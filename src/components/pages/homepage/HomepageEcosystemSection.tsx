import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import Button from '../../Button'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'

const HomepageEcosystemSection = () => {
  const [dapps, setDapps] = useState<Array<{ name: string; media: { logoUrl: string } }>>([])
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null)
  const [hoveredAppName, setHoveredAppName] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const rotationRef = useRef<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)

  useEffect(() => {
    fetch('https://publicapi.alph.land/api/dapps').then((res) =>
      res.json().then((data) => {
        setDapps(data)
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

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp
      const deltaTime = timestamp - lastTimeRef.current
      lastTimeRef.current = timestamp

      if (!hoverPosition) {
        rotationRef.current = (rotationRef.current + deltaTime * 0.02) % 360
        // Force re-render to update positions
        setDapps((prev) => [...prev])
      }
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [hoverPosition])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Get cursor position relative to center
    const relativeX = e.clientX - rect.left - centerX
    const relativeY = e.clientY - rect.top - centerY

    // Rotate cursor position to match current rotation
    const rad = (rotationRef.current * Math.PI) / 180
    const rotatedX = relativeX * Math.cos(rad) + relativeY * Math.sin(rad)
    const rotatedY = -relativeX * Math.sin(rad) + relativeY * Math.cos(rad)

    // Convert back to absolute coordinates
    const x = rotatedX + centerX
    const y = rotatedY + centerY

    setHoverPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })

    // Find the closest app
    let closestDistance = Infinity
    let closestAppName = null

    dapps.forEach((dapp, index) => {
      const position = calculatePosition(index, dapps.length, 0) // Use unrotated positions
      const distance = Math.sqrt(Math.pow(x - position.x, 2) + Math.pow(y - position.y, 2))

      if (distance <= 200 && distance < closestDistance) {
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

  const calculatePosition = (index: number, total: number, overrideRotation?: number) => {
    // Calculate base angle for this logo
    const baseAngle = (index / total) * Math.PI * 2
    // Add rotation angle (convert from degrees to radians)
    const angle = baseAngle + ((overrideRotation ?? rotationRef.current) * Math.PI) / 180

    if (isMobile) {
      const centerPoint = 150
      const radius = 85
      return {
        x: centerPoint + Math.cos(angle) * radius,
        y: centerPoint + Math.sin(angle) * radius
      }
    } else {
      const centerPoint = 300
      const radius = 230
      return {
        x: centerPoint + Math.cos(angle) * radius,
        y: centerPoint + Math.sin(angle) * radius
      }
    }
  }

  const calculateTransform = (position: { x: number; y: number }) => {
    if (!hoverPosition) return { scale: 1, translateX: 0, translateY: 0, zIndex: 1 }

    // Calculate distance from hover position
    const distance = Math.sqrt(Math.pow(hoverPosition.x - position.x, 2) + Math.pow(hoverPosition.y - position.y, 2))

    // Calculate scale
    const maxDistance = 150
    const minScale = 0.3
    const maxScale = 1.2
    const scale = Math.max(minScale, maxScale - (distance / maxDistance) * (maxScale - minScale))

    // Calculate parallax movement (inverted)
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
    <>
      <SubpageSection dark>
        <TextElement isCentered>
          <h2>
            <small>Built to last.</small>
            <br />
            Built on Alephium.
          </h2>
          <p>
            Alephium is home to pioneers, combining <strong>strong technology and a bustling community</strong> to bring
            the <strong>next generation of decentralized applications to life</strong>.
          </p>
        </TextElement>
        <LogosContainer onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <RotatingContainer ref={containerRef}>
            {dapps.map((dapp, index) => {
              const position = calculatePosition(index, dapps.length)
              const transform = calculateTransform(position)
              const appId = extractAppId(dapp.media.logoUrl)

              return (
                <LogoWrapper
                  key={index}
                  style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${transform.scale}) translate(${transform.translateX}px, ${transform.translateY}px)`,
                    zIndex: transform.zIndex
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
          </RotatingContainer>
          <HoveredAppName>{hoveredAppName}</HoveredAppName>
          <CenterButtonWrapper>
            <Button big highlight url="https://alph.land">
              Explore ecosystem
            </Button>
          </CenterButtonWrapper>
        </LogosContainer>
      </SubpageSection>
    </>
  )
}

export default HomepageEcosystemSection

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

const RotatingContainer = styled.div`
  position: absolute;
  inset: 0;
  transform-origin: center center;
  will-change: transform;
`

const LogoWrapper = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.15s ease-out;
  will-change: transform;

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
