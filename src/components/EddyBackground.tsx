import { graphql, useStaticQuery } from 'gatsby'
import { FC, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import useIsMobile from '../hooks/useIsMobile'
import GatsbyImageWrapper from './GatsbyImageWrapper'

const backgroundQuery = graphql`
  query BackgroundQuery {
    placeholderImage: file(relativePath: { eq: "hero-gradient.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          layout: CONSTRAINED
          transformOptions: { fit: COVER, cropFocus: CENTER }
          quality: 80
        )
      }
    }
  }
`

/**
 * Convert a hex color string to an [r, g, b] array in 0–1 range.
 */
function hexToRgb01(hex: string): [number, number, number] {
  hex = hex.replace(/^#/, '')
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((c) => c + c)
      .join('')
  }
  const n = parseInt(hex, 16)
  const r = (n >> 16) & 0xff
  const g = (n >> 8) & 0xff
  const b = n & 0xff
  return [r / 255, g / 255, b / 255]
}

export interface MeshGradientEffectProps {
  /** Contrast multiplier (1 = no change) */
  contrast?: number
  /** Brightness multiplier (1 = no change) */
  brightness?: number
  /** CSS blend mode between canvas and background */
  blendMode?: string
  /** Animation speed multiplier (1 = normal speed) */
  speed?: number
  /** Corner colors as [r, g, b] in 0–1 range */
  color1?: [number, number, number]
  color2?: [number, number, number]
  color3?: [number, number, number]
  color4?: [number, number, number]
}

const MeshGradientEffect: FC<MeshGradientEffectProps> = ({
  contrast = 1.3,
  brightness = 0.8,
  blendMode = 'screen',
  speed = 0.25,
  color1 = hexToRgb01('#ffffaa'),
  color2 = hexToRgb01('#57d4e1'),
  color3 = hexToRgb01('#ff99ff'),
  color4 = hexToRgb01('#99a3ff')
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isWebGLReady, setIsWebGLReady] = useState(false)
  const isMobile = useIsMobile()

  const data = useStaticQuery(backgroundQuery)

  useEffect(() => {
    if (isMobile) return

    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const [r1, g1, b1] = color1
    const [r2, g2, b2] = color2
    const [r3, g3, b3] = color3
    const [r4, g4, b4] = color4
    const gl = canvas.getContext('webgl')
    if (!gl) {
      return
    }

    gl.clearColor(0, 0, 0, 0)

    function compileShader(src: string, type: number) {
      if (!gl) return null
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, src)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        return null
      }
      return shader
    }

    const vsSource = `
      precision mediump float;
      attribute vec2 a_pos;
      attribute vec2 a_uv;
      varying vec2 v_uv;
      void main() {
        v_uv = a_uv;
        gl_Position = vec4(a_pos, 0.0, 1.0);
      }
    `

    // Fragment shader with softened swirls
    const fsSource = `
      precision mediump float;
      uniform float u_time;
      uniform float u_speed;
      uniform vec2 u_resolution;
      uniform float u_contrast;
      uniform float u_brightness;
      varying vec2 v_uv;

      // Reduced-intensity swirl
      vec2 swirlAspect(vec2 uv, vec2 center, float strength) {
        float aspect = u_resolution.x / u_resolution.y;
        vec2 p = (uv - center) * vec2(aspect, 1.0);
        float dist = length(p);
        // soften swirl: lower strength amplitude & larger falloff
        float angle = (strength * 0.3) / (dist + 0.2);
        float s = sin(angle);
        float c = cos(angle);
        p = mat2(c, -s, s, c) * p;
        return center + p / vec2(aspect, 1.0);
      }

      vec3 applyContrast(vec3 c, float contrast) {
        return (c - 0.5) * contrast + 0.5;
      }
      vec3 applyBrightness(vec3 c, float brightness) {
        return c * brightness;
      }

      // Simple noise function for ink mixing
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(22.9898, 78.233))) * 1000.1);
      }

      void main() {
        float t = u_time * u_speed;
        vec2 uv = v_uv;
        // strengthen currents for visibility
        uv.x += 0.05 * sin((uv.y * 15.0) + t * 2.0);
        uv.y += 0.05 * cos((uv.x * 15.0) + t * 1.5);

        // fewer, softer swirls
        vec2 c0 = vec2(0.3 + 0.03 * sin(t * 1.1), 0.4 + 0.03 * cos(t * 2.3));
        vec2 c1 = vec2(0.7 + 0.03 * cos(t * 0.8), 0.6 + 0.03 * sin(t * 1.0));

        float s0 = 0.3 + 0.1 * sin(t * 0.5);
        float s1 = -0.3 + 0.1 * cos(t * 0.6);

        uv = swirlAspect(uv, c0, s0);
        uv = swirlAspect(uv, c1, s1);

        // additional swirl and ink-mixing noise
        vec2 c2 = vec2(0.5 + 0.05 * sin(t * 1.7), 0.5 + 0.05 * cos(t * 1.9));
        float s2 = 0.4 + 0.15 * sin(t * 0.7);
        uv = swirlAspect(uv, c2, s2);
        uv += 0.01 * vec2(noise(uv * 5.0 + t), noise(uv * 5.0 - t));

        // color ramps (tweakable via props)
        vec3 col1 = vec3(${r1}, ${g1}, ${b1});
        vec3 col2 = vec3(${r2}, ${g2}, ${b2});
        vec3 col3 = vec3(${r3}, ${g3}, ${b3});
        vec3 col4 = vec3(${r4}, ${g4}, ${b4});

        // smooth continuous color blend across the mesh
        float m1 = smoothstep(0.0, 1.0, uv.x + 0.1);
        float m2 = smoothstep(0.0, 1.0, uv.y + 0.1);
        vec3 color = mix(
          mix(col1, col2, m1),
          mix(col3, col4, m1),
          m2
        );

        // contrast & brightness
        color = applyContrast(color, u_contrast);
        color = applyBrightness(color, u_brightness);
        // clamp to [0,1] to avoid over-bright whites
        color = clamp(color, 0.0, 1.0);

        // vignette effect
        float dist = distance(uv, vec2(0.5, 0.5));
        float vignette = smoothstep(0.5, 0.01, dist);
        color *= 1.0 + vignette;

        gl_FragColor = vec4(color, 1.0);
      }
    `

    const vertShader = compileShader(vsSource, gl.VERTEX_SHADER)
    const fragShader = compileShader(fsSource, gl.FRAGMENT_SHADER)
    if (!vertShader || !fragShader) {
      return
    }

    const program = gl.createProgram()
    if (!program) {
      return
    }

    gl.attachShader(program, vertShader)
    gl.attachShader(program, fragShader)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      return
    }
    gl.useProgram(program)

    const uTime = gl.getUniformLocation(program, 'u_time')
    const uSpeed = gl.getUniformLocation(program, 'u_speed')
    const uRes = gl.getUniformLocation(program, 'u_resolution')
    const uContr = gl.getUniformLocation(program, 'u_contrast')
    const uBright = gl.getUniformLocation(program, 'u_brightness')

    if (!uTime || !uSpeed || !uRes || !uContr || !uBright) {
      console.error('Failed to get uniform locations')
      return
    }

    // grid setup
    const GRID = 30
    const positions: number[] = []
    const uvCoords: number[] = []
    for (let y = 0; y <= GRID; y++) {
      for (let x = 0; x <= GRID; x++) {
        positions.push((x / GRID) * 2 - 1, (y / GRID) * 2 - 1)
        uvCoords.push(x / GRID, y / GRID)
      }
    }
    const indices: number[] = []
    for (let y = 0; y < GRID; y++) {
      for (let x = 0; x < GRID; x++) {
        const i = y * (GRID + 1) + x
        indices.push(i, i + 1, i + GRID + 1, i + 1, i + GRID + 2, i + GRID + 1)
      }
    }

    function setupBuffer(data: Float32Array, attr: string, size: number) {
      if (!gl || !program) return
      const buf = gl.createBuffer()
      if (!buf) return
      gl.bindBuffer(gl.ARRAY_BUFFER, buf)
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)
      const loc = gl.getAttribLocation(program, attr)
      if (loc === -1) return
      gl.enableVertexAttribArray(loc)
      gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0)
    }

    setupBuffer(new Float32Array(positions), 'a_pos', 2)
    setupBuffer(new Float32Array(uvCoords), 'a_uv', 2)

    const idxBuf = gl.createBuffer()
    if (!idxBuf) {
      return
    }
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, idxBuf)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW)

    function updateSize() {
      if (!canvas || !gl || !uRes) return
      const w = canvas.parentElement?.clientWidth ?? window.innerWidth
      const h = canvas.parentElement?.clientHeight ?? window.innerHeight
      canvas.width = w
      canvas.height = h
      gl.viewport(0, 0, w, h)
      gl.uniform2f(uRes, w, h)
    }
    updateSize()
    window.addEventListener('resize', updateSize)

    function render() {
      if (!gl || !uTime || !uSpeed || !uContr || !uBright || !program) return
      gl.clear(gl.COLOR_BUFFER_BIT)

      // Make sure program is bound before setting uniforms
      gl.useProgram(program)

      const now = performance.now() * 0.001
      gl.uniform1f(uTime, now)
      gl.uniform1f(uSpeed, speed)
      gl.uniform1f(uContr, contrast)
      gl.uniform1f(uBright, brightness)
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0)
      requestAnimationFrame(render)
    }

    render()
    setIsWebGLReady(true)

    return () => {
      window.removeEventListener('resize', updateSize)
      setIsWebGLReady(false)
    }
  }, [isMobile, contrast, brightness, speed, color1, color2, color3, color4])

  return (
    <>
      <Canvas ref={canvasRef} blendMode={blendMode} style={{ display: isWebGLReady ? 'block' : 'none' }} />
      {!isWebGLReady && (
        <PlaceholderContainer>
          <GatsbyImageWrapper
            image={data.placeholderImage.childImageSharp.gatsbyImageData}
            alt="Loading gradient background"
            style={{ width: '100%', height: '100%' }}
            objectFit="cover"
          />
        </PlaceholderContainer>
      )}
    </>
  )
}

export default MeshGradientEffect

const Canvas = styled.canvas<{ blendMode: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  mix-blend-mode: ${(props) => props.blendMode};
  background-color: #000;
`

const PlaceholderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`
