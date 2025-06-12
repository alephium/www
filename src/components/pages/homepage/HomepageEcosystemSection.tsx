import { colord } from 'colord'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import Button from '../../Button'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'
import SectionDivider from '../../SectionDivider'

interface LogoPosition {
  x: number
  y: number
  size: number
  depth: number
}

const HomepageEcosystemSection = () => {
  const [dapps, setDapps] = useState<Array<{ name: string; media: { logoUrl: string } }>>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isInitialized, setIsInitialized] = useState(false)
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null)
  const [hoveredAppName, setHoveredAppName] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const allPositionsRef = useRef<LogoPosition[]>([])

  // Add refs for smooth animation
  const currentOffsetRef = useRef({ x: 0, y: 0 })
  const targetOffsetRef = useRef({ x: 0, y: 0 })
  const lastFrameTimeRef = useRef<number>(0)

  const initializeLogoPositions = (numLogos: number) => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerWidth = container.offsetWidth
    const containerHeight = container.offsetHeight
    const centerX = containerWidth / 2
    const centerY = containerHeight / 2
    const buttonRadius = Math.max(Math.min(containerWidth, containerHeight) * 0.13, 60)
    const minDistance = Math.max(Math.min(containerWidth, containerHeight) * 0.09, 40)
    const maxAttempts = 300
    const padding = 10

    const positions: LogoPosition[] = []

    for (let i = 0; i < numLogos; i++) {
      let attempts = 0
      let validPosition = false

      while (!validPosition && attempts < maxAttempts) {
        const x = Math.random() * (containerWidth - padding * 2) + padding
        const y = Math.random() * (containerHeight - padding * 2) + padding

        // Check distance from center (button)
        const distanceFromCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))

        // Check distance from other logos
        const tooClose = positions.some((pos) => {
          const distance = Math.sqrt(Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2))
          return distance < minDistance
        })

        if (distanceFromCenter > buttonRadius && !tooClose) {
          const size = Math.random() * 0.5 + 0.8
          const depth = Math.random() + 0.5
          positions.push({ x, y, size, depth })
          validPosition = true
        }

        attempts++
      }
    }

    allPositionsRef.current = positions
    return positions
  }

  // Initialize everything when the component mounts
  useEffect(() => {
    const initialize = async () => {
      try {
        setIsLoading(true)
        const response = await fetch('https://publicapi.alph.land/api/dapps')
        const data = await response.json()
        setDapps(data)
        if (containerRef.current) {
          const positions = initializeLogoPositions(data.length)
          if (positions) setIsInitialized(true)
        }
      } catch (error) {
        console.error('Error initializing ecosystem section:', error)
      } finally {
        setIsLoading(false)
      }
    }

    initialize()
  }, [])

  // Use ResizeObserver to handle container size changes
  useEffect(() => {
    if (!containerRef.current || !isInitialized) return
    const container = containerRef.current
    let throttleTimeout: ReturnType<typeof setTimeout> | null = null

    const handleResize = () => {
      if (dapps.length > 0) {
        initializeLogoPositions(dapps.length)
      }
    }

    handleResize()

    const resizeObserver = new window.ResizeObserver(() => {
      if (throttleTimeout) return
      throttleTimeout = setTimeout(() => {
        handleResize()
        throttleTimeout = null
      }, 200)
    })
    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
      if (throttleTimeout) clearTimeout(throttleTimeout)
    }
  }, [isInitialized, dapps.length])

  // Animation loop for parallax effect
  useEffect(() => {
    if (!containerRef.current) return

    const animate = (timestamp: number) => {
      if (!lastFrameTimeRef.current) lastFrameTimeRef.current = timestamp
      lastFrameTimeRef.current = timestamp

      // Calculate target offset based on hover position
      const container = containerRef.current
      if (!container) return

      const centerX = container.offsetWidth / 2
      const centerY = container.offsetHeight / 2
      const parallaxX = hoverPosition ? (hoverPosition.x - centerX) * 0.05 : 0
      const parallaxY = hoverPosition ? (hoverPosition.y - centerY) * 0.05 : 0

      // Update target offset
      targetOffsetRef.current = { x: parallaxX, y: parallaxY }

      // Apply inertia to current offset
      const inertia = 0.1
      currentOffsetRef.current = {
        x: currentOffsetRef.current.x + (targetOffsetRef.current.x - currentOffsetRef.current.x) * inertia,
        y: currentOffsetRef.current.y + (targetOffsetRef.current.y - currentOffsetRef.current.y) * inertia
      }

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [hoverPosition])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    setHoverPosition({ x: mouseX, y: mouseY })
    // Find the closest app in dapps
    let closestDistance = Infinity
    let closestAppName = null
    dapps.forEach((dapp, i) => {
      const position = allPositionsRef.current[i]
      if (!position) return
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

  const extractAppId = (logoUrl: string) => {
    const match = logoUrl.match(/dapps\/([^/]+)/)
    return match ? match[1] : null
  }

  return (
    <SubpageSection fullWidth bgColor="2" border="top-bottom" edgeGradient gradientPosition="bottom">
      <div style={{ position: 'relative', zIndex: 1 }}>
        <TextElement isCentered>
          <h2>Built on Alephium.</h2>
          <p>
            <strong>Alephium is home to hundreds of innovative dApps.</strong>
          </p>
        </TextElement>
        <SectionDivider />
        <LogosContainer ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          {isInitialized &&
            dapps.map((dapp, index) => {
              const position = allPositionsRef.current[index]
              if (!position) return null
              const parallaxX = position.depth ? currentOffsetRef.current.x * position.depth : 0
              const parallaxY = position.depth ? currentOffsetRef.current.y * position.depth : 0
              const blurAmount = Math.max((1 - position.depth) * 3, 0)
              return (
                <LogoWrapper
                  key={dapp.name + index}
                  style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) translate(${parallaxX}px, ${parallaxY}px) scale(${
                      position.size * position.depth
                    })`,
                    filter: `blur(${blurAmount}px)`
                  }}
                >
                  <a
                    href={`https://alph.land/${extractAppId(dapp.media.logoUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <img src={dapp.media.logoUrl} alt={dapp.name} loading="lazy" />
                    {hoveredAppName === dapp.name && <AppTooltip>{dapp.name}</AppTooltip>}
                  </a>
                </LogoWrapper>
              )
            })}
          <CenterButtonWrapper>
            <Button big highlight url="https://alph.land">
              Explore
            </Button>
          </CenterButtonWrapper>
        </LogosContainer>
      </div>
    </SubpageSection>
  )
}

export default HomepageEcosystemSection

const LogosContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  margin: 0 auto;
  perspective: 1000px;

  @media ${deviceBreakPoints.mobile} {
    height: 350px;
  }
`

const LogoWrapper = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  @media ${deviceBreakPoints.mobile} {
    width: 25px;
    height: 25px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.background2};
  }
`

const AppTooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.textPrimary};
  color: ${({ theme }) => theme.background2};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
  white-space: nowrap;
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.2s ease-out;
  margin-bottom: 8px;
  z-index: 1000;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 4px;
    border-style: solid;
    border-color: ${({ theme }) => theme.background2} transparent transparent transparent;
  }

  @media ${deviceBreakPoints.mobile} {
    font-size: 0.8rem;
    padding: 3px 6px;
  }
`

const CenterButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 30px;
  backdrop-filter: blur(30px) saturate(180%) brightness(1.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  border-radius: 100px;
  box-shadow: 0 0px 30px 10px ${({ theme }) => colord(theme.textPrimary).alpha(0.3).toHex()};
`
