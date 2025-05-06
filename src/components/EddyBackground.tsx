import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

export interface MeshGradientEffectProps {
  /** Contrast multiplier (1 = no change) */
  contrast?: number
  /** Brightness multiplier (1 = no change) */
  brightness?: number
  /** CSS blend mode between canvas and background */
  blendMode?: string
  /** Animation speed multiplier (1 = normal speed) */
  speed?: number
}

const MeshGradientEffect: React.FC<MeshGradientEffectProps> = ({
  contrast = 1.0,
  brightness = 1.5,
  blendMode = 'screen',
  speed = 0.25
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl')
    if (!gl) {
      console.error('WebGL not supported')
      return
    }

    gl.clearColor(0, 0, 0, 0)

    function compileShader(src: string, type: number) {
      const shader = gl.createShader(type)!
      gl.shaderSource(shader, src)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader))
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

      void main() {
        float t = u_time * u_speed;
        vec2 uv = v_uv;

        // fewer, softer swirls
        vec2 c0 = vec2(0.3 + 0.03 * sin(t * 1.1), 0.4 + 0.03 * cos(t * 1.3));
        vec2 c1 = vec2(0.7 + 0.03 * cos(t * 0.8), 0.6 + 0.03 * sin(t * 1.0));

        float s0 = 0.3 + 0.1 * sin(t * 0.5);
        float s1 = -0.3 + 0.1 * cos(t * 0.6);

        uv = swirlAspect(uv, c0, s0);
        uv = swirlAspect(uv, c1, s1);

        // color ramps
        vec3 col1 = vec3(0.2, 0.4, 0.9);
        vec3 col2 = vec3(0.5, 0.8, 1.0);
        vec3 col3 = vec3(0.8, 0.4, 0.9);
        vec3 col4 = vec3(1.0, 0.6, 0.7);
        float m1 = smoothstep(0.0, 1.0, uv.x + 0.1);
        float m2 = smoothstep(0.0, 1.0, uv.y + 0.1);
        vec3 color = mix(mix(col1, col2, m1), mix(col3, col4, m1), m2);

        // contrast & brightness
        color = applyContrast(color, u_contrast);
        color = applyBrightness(color, u_brightness);

        gl_FragColor = vec4(color, 1.0);
      }
    `

    const vertShader = compileShader(vsSource, gl.VERTEX_SHADER)
    const fragShader = compileShader(fsSource, gl.FRAGMENT_SHADER)
    const program = gl.createProgram()!
    gl.attachShader(program, vertShader)
    gl.attachShader(program, fragShader)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program))
    }
    gl.useProgram(program)

    const uTime = gl.getUniformLocation(program, 'u_time')!
    const uSpeed = gl.getUniformLocation(program, 'u_speed')!
    const uRes = gl.getUniformLocation(program, 'u_resolution')!
    const uContr = gl.getUniformLocation(program, 'u_contrast')!
    const uBright = gl.getUniformLocation(program, 'u_brightness')!

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
      const buf = gl.createBuffer()!
      gl.bindBuffer(gl.ARRAY_BUFFER, buf)
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)
      const loc = gl.getAttribLocation(program, attr)
      gl.enableVertexAttribArray(loc)
      gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0)
    }
    setupBuffer(new Float32Array(positions), 'a_pos', 2)
    setupBuffer(new Float32Array(uvCoords), 'a_uv', 2)
    const idxBuf = gl.createBuffer()!
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, idxBuf)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW)

    function updateSize() {
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
      gl.clear(gl.COLOR_BUFFER_BIT)
      const now = performance.now() * 0.001
      gl.uniform1f(uTime, now)
      gl.uniform1f(uSpeed, speed)
      gl.uniform1f(uContr, contrast)
      gl.uniform1f(uBright, brightness)
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0)
      requestAnimationFrame(render)
    }
    render()
  }, [contrast, brightness, speed])

  return <Canvas ref={canvasRef} blendMode={blendMode} />
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
`
