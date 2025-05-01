import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import Button from '../../Button'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  depth: number
}

const HomepageEcosystemSection = () => {
  const [dapps, setDapps] = useState<Array<{ name: string; media: { logoUrl: string } }>>([])
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null)
  const [hoveredAppName, setHoveredAppName] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const zIndexOrderRef = useRef<number[]>([])
  const nebulaRef = useRef<HTMLDivElement>(null)

  // Add refs for smooth animation
  const currentOffsetRef = useRef({ x: 0, y: 0 })
  const targetOffsetRef = useRef({ x: 0, y: 0 })
  const lastFrameTimeRef = useRef<number>(0)

  useEffect(() => {
    fetch('https://publicapi.alph.land/api/dapps').then((res) =>
      res.json().then((data) => {
        setDapps(data)
        // Create a randomized z-index order
        const order = Array.from({ length: data.length }, (_, i) => i)
        for (let i = order.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[order[i], order[j]] = [order[j], order[i]]
        }
        zIndexOrderRef.current = order
      })
    )

    // Initial check
    const mediaQuery = window.matchMedia(deviceBreakPoints.mobile)
    setIsMobile(mediaQuery.matches)

    // Add resize listener
    const handleResize = () => {
      setIsMobile(mediaQuery.matches)
    }

    mediaQuery.addListener(handleResize)
    return () => mediaQuery.removeListener(handleResize)
  }, [])

  // Initialize stars
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true }) // Changed to true for transparency
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create stars
    const stars: Star[] = []
    const numStars = 150 // Reduced number for better performance
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.2 + 0.1,
        depth: Math.random() * 0.5 + 0.5
      })
    }
    starsRef.current = stars

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  // Animation loop for stars with inertia
  useEffect(() => {
    const canvas = canvasRef.current
    const nebula = nebulaRef.current
    if (!canvas || !nebula) return

    const ctx = canvas.getContext('2d', { alpha: true }) // Changed to true for transparency
    if (!ctx) return

    const animate = (timestamp: number) => {
      if (!lastFrameTimeRef.current) lastFrameTimeRef.current = timestamp
      lastFrameTimeRef.current = timestamp

      // Calculate target offset based on hover position
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const parallaxX = hoverPosition ? (hoverPosition.x - centerX) * 0.05 : 0
      const parallaxY = hoverPosition ? (hoverPosition.y - centerY) * 0.05 : 0

      // Update target offset
      targetOffsetRef.current = { x: parallaxX, y: parallaxY }

      // Apply inertia to current offset
      const inertia = 0.1 // Adjust this value to change the "weight" of the movement
      currentOffsetRef.current = {
        x: currentOffsetRef.current.x + (targetOffsetRef.current.x - currentOffsetRef.current.x) * inertia,
        y: currentOffsetRef.current.y + (targetOffsetRef.current.y - currentOffsetRef.current.y) * inertia
      }

      // Update nebula position with slower parallax
      const nebulaParallax = 0.3 // Slower than stars for depth effect
      nebula.style.transform = `translate(${currentOffsetRef.current.x * nebulaParallax}px, ${
        currentOffsetRef.current.y * nebulaParallax
      }px)`

      // Clear canvas with transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars with current offset
      starsRef.current.forEach((star) => {
        const offsetX = currentOffsetRef.current.x * star.depth
        const offsetY = currentOffsetRef.current.y * star.depth
        const x = star.x + offsetX
        const y = star.y + offsetY

        // Only draw stars that are visible
        if (x >= -star.size && x <= canvas.width + star.size && y >= -star.size && y <= canvas.height + star.size) {
          ctx.beginPath()
          ctx.arc(x, y, star.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
          ctx.fill()

          // Update opacity for twinkling effect
          star.opacity += Math.sin(timestamp * star.speed * 0.01) * 0.01
          star.opacity = Math.max(0.3, Math.min(1, star.opacity))
        }
      })

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [hoverPosition])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    setHoverPosition({ x: mouseX, y: mouseY })

    // Find the closest app
    let closestDistance = Infinity
    let closestAppName = null

    dapps.forEach((dapp, index) => {
      const position = calculatePosition(index, dapps.length)
      const distance = Math.sqrt(Math.pow(mouseX - position.x, 2) + Math.pow(mouseY - position.y, 2))

      if (distance <= 100 && distance < closestDistance) {
        closestDistance = distance
        closestAppName = dapp.name
      }
    })

    setHoveredAppName(closestAppName)
  }

  const handleMouseLeave = () => {
    setHoverPosition(null)
    setHoveredAppName(null)
  }

  const calculatePosition = (index: number, total: number) => {
    // Calculate base angle for this logo
    const baseAngle = (index / total) * Math.PI * 2

    if (isMobile) {
      const centerPoint = 150
      const radius = 85
      return {
        x: centerPoint + Math.cos(baseAngle) * radius,
        y: centerPoint + Math.sin(baseAngle) * radius
      }
    } else {
      const centerPoint = 300
      const radius = 230
      return {
        x: centerPoint + Math.cos(baseAngle) * radius,
        y: centerPoint + Math.sin(baseAngle) * radius
      }
    }
  }

  const calculateTransform = (position: { x: number; y: number }) => {
    if (!hoverPosition) return { scale: 1, translateX: 0, translateY: 0, zIndex: 1 }

    const distance = Math.sqrt(Math.pow(hoverPosition.x - position.x, 2) + Math.pow(hoverPosition.y - position.y, 2))

    const maxDistance = 150
    const minScale = 0.3
    const maxScale = 1.2
    const scale = Math.max(minScale, maxScale - (distance / maxDistance) * (maxScale - minScale))

    const parallaxStrength = 20
    const translateX = (position.x - hoverPosition.x) / parallaxStrength
    const translateY = (position.y - hoverPosition.y) / parallaxStrength

    // Only apply z-index changes within threshold distance
    const zIndexThreshold = 200
    const zIndex = distance <= zIndexThreshold ? Math.round((1 - distance / zIndexThreshold) * 100) : 1

    return {
      scale,
      translateX,
      translateY,
      zIndex
    }
  }

  const extractAppId = (logoUrl: string) => {
    const match = logoUrl.match(/dapps\/([^/]+)/)
    return match ? match[1] : null
  }

  return (
    <SubpageSection wide>
      <NebulaBackground ref={nebulaRef} />
      <StarBackground ref={canvasRef} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <TextElement isCentered>
          <h2>Built on Alephium.</h2>
          <p>
            Alephium is home to pioneers, combining <strong>strong technology and a bustling community</strong> to bring
            the <strong>next generation of decentralized applications to life</strong>.
          </p>
        </TextElement>
        <LogosContainer onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <InnerContainer>
            {dapps.map((dapp, index) => {
              const position = calculatePosition(index, dapps.length)
              const transform = calculateTransform(position)
              const appId = extractAppId(dapp.media.logoUrl)
              return (
                <LogoWrapper
                  key={index}
                  isSelected={dapp.name === hoveredAppName}
                  style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${transform.scale}) translate(${transform.translateX}px, ${transform.translateY}px)`,
                    zIndex: hoverPosition ? transform.zIndex : zIndexOrderRef.current[index]
                  }}
                >
                  {appId && (
                    <a href={`https://alph.land/${appId}`} target="_blank" rel="noopener noreferrer">
                      <img src={dapp.media.logoUrl} alt={dapp.name} loading="lazy" />
                    </a>
                  )}
                </LogoWrapper>
              )
            })}
          </InnerContainer>
          <HoveredAppName>{hoveredAppName}</HoveredAppName>
          <CenterButtonWrapper>
            <Button big highlight url="https://alph.land">
              Explore ecosystem
            </Button>
          </CenterButtonWrapper>
        </LogosContainer>
      </div>
    </SubpageSection>
  )
}

export default HomepageEcosystemSection

const StarBackground = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`

const NebulaBackground = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  pointer-events: none;
  z-index: -1;
  will-change: transform;
  transform-origin: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(76, 0, 255, 0.12) 0%, transparent 35%),
      radial-gradient(circle at 50% 50%, rgba(255, 0, 128, 0.1) 0%, transparent 35%),
      radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 35%),
      radial-gradient(circle at 50% 50%, rgba(255, 0, 128, 0.1) 0%, transparent 35%),
      radial-gradient(circle at 50% 50%, rgba(76, 0, 255, 0.12) 0%, transparent 35%);
    filter: blur(40px);
  }
`

const LogosContainer = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  margin: 0 auto;
  perspective: 1000px;

  @media ${deviceBreakPoints.mobile} {
    width: 300px;
    height: 300px;
  }
`

const InnerContainer = styled.div`
  position: absolute;
  inset: 0;
  transform-origin: center center;
  will-change: transform;
`

const LogoWrapper = styled.div<{ isSelected?: boolean }>`
  position: absolute;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.15s ease-out;
  will-change: transform;
  border-radius: 50%;
  border: ${({ isSelected }) => (isSelected ? '6px solid white' : 'none')};

  @media ${deviceBreakPoints.mobile} {
    width: 35px;
    height: 35px;
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
    transition: transform 0.15s ease-out;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    background-color: ${({ theme }) => theme.bgSecondary};
  }
`

const HoveredAppName = styled.div`
  position: absolute;
  left: 50%;
  top: 42%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  transition: opacity 0.15s ease-out;
  opacity: ${({ children }) => (children ? 1 : 0)};
  z-index: 1;
  pointer-events: none;

  @media ${deviceBreakPoints.mobile} {
    font-size: 1rem;
  }
`

const CenterButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`
