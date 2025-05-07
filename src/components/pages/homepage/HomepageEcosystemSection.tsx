import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import Button from '../../Button'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'

interface LogoPosition {
  x: number
  y: number
  size: number
  depth: number
}

const ROTATION_INTERVAL = 1500
const FADE_DURATION = 1000
const LOGOS_VISIBLE = 50
const LOGOS_TO_ROTATE = 2

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

  // For each slot, track { currentDappIdx, nextDappIdx, fadeState }
  interface LogoSlot {
    currentDappIdx: number
    nextDappIdx: number | null
    fadeState: 'idle' | 'fading'
  }
  const [logoSlots, setLogoSlots] = useState<LogoSlot[]>([])
  const [fadeIn, setFadeIn] = useState<boolean[]>([])

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
          const size = Math.random() * 0.4 + 0.6
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

        // Initialize positions immediately after getting the data
        if (containerRef.current) {
          const positions = initializeLogoPositions(LOGOS_VISIBLE)
          if (positions) {
            setLogoSlots(
              Array.from({ length: LOGOS_VISIBLE }, (_, i) => ({
                currentDappIdx: i % data.length,
                nextDappIdx: null,
                fadeState: 'idle'
              }))
            )
            setFadeIn(Array.from({ length: LOGOS_VISIBLE }, () => true))
            setIsInitialized(true)
          }
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
      initializeLogoPositions(LOGOS_VISIBLE)
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
  }, [isInitialized])

  // Rotation effect: only change LOGOS_TO_ROTATE logos per interval, with crossfade
  useEffect(() => {
    if (dapps.length === 0 || logoSlots.length === 0) return
    let timeout: ReturnType<typeof setTimeout>
    let fadeTimeout: ReturnType<typeof setTimeout>
    const interval = setInterval(() => {
      // Pick LOGOS_TO_ROTATE random indices to update
      const indicesToUpdate: number[] = []
      const usedIndices = new Set<number>()
      while (indicesToUpdate.length < LOGOS_TO_ROTATE && indicesToUpdate.length < logoSlots.length) {
        const idx = Math.floor(Math.random() * logoSlots.length)
        if (!usedIndices.has(idx)) {
          indicesToUpdate.push(idx)
          usedIndices.add(idx)
        }
      }
      // Build a set of all currently visible dapp indices (including nextDappIdx for slots in crossfade)
      const visibleDappIndices = new Set<number>()
      logoSlots.forEach((slot) => {
        if (slot.fadeState === 'fading' && slot.nextDappIdx !== null) {
          visibleDappIndices.add(slot.nextDappIdx)
        } else {
          visibleDappIndices.add(slot.currentDappIdx)
        }
      })
      // For each slot being updated, find the next available dapp index not in the set
      const newSlots = logoSlots.map((slot, i) => {
        if (!indicesToUpdate.includes(i)) return slot
        let nextIdx = (slot.currentDappIdx + 1) % dapps.length
        while (visibleDappIndices.has(nextIdx)) {
          nextIdx = (nextIdx + 1) % dapps.length
        }
        visibleDappIndices.add(nextIdx)
        return {
          currentDappIdx: slot.currentDappIdx,
          nextDappIdx: nextIdx,
          fadeState: 'fading' as const
        }
      })
      setLogoSlots(newSlots)
      // Set fadeIn to false for these slots, then true after a short delay
      setFadeIn((prev) => prev.map((v, i) => (indicesToUpdate.includes(i) ? false : v)))
      fadeTimeout = setTimeout(() => {
        setFadeIn((prev) => prev.map((v, i) => (indicesToUpdate.includes(i) ? true : v)))
      }, 10)
      // After fade duration, complete the swap
      timeout = setTimeout(() => {
        setLogoSlots((current) =>
          current.map((slot, i) =>
            indicesToUpdate.includes(i)
              ? {
                  currentDappIdx: slot.nextDappIdx ?? slot.currentDappIdx,
                  nextDappIdx: null,
                  fadeState: 'idle' as const
                }
              : slot
          )
        )
        setFadeIn((prev) => prev.map((v, i) => (indicesToUpdate.includes(i) ? false : v)))
      }, FADE_DURATION / 2)
    }, ROTATION_INTERVAL)
    return () => {
      clearInterval(interval)
      if (timeout) clearTimeout(timeout)
      if (fadeTimeout) clearTimeout(fadeTimeout)
    }
  }, [dapps, logoSlots.length])

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
    // Find the closest app (current or next) in any slot
    let closestDistance = Infinity
    let closestAppName = null
    logoSlots.forEach((slot, i) => {
      const position = allPositionsRef.current[i]
      if (!position) return
      ;[slot.currentDappIdx, slot.nextDappIdx].forEach((dappIdx) => {
        if (dappIdx === null || dappIdx === undefined) return
        const dapp = dapps[dappIdx]
        if (!dapp) return
        const distance = Math.sqrt(Math.pow(mouseX - position.x, 2) + Math.pow(mouseY - position.y, 2))
        if (distance <= 100 && distance < closestDistance) {
          closestDistance = distance
          closestAppName = dapp.name
        }
      })
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
    <SubpageSection fullWidth>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <TextElement isCentered>
          <h2>Built on Alephium.</h2>
          <p>
            <strong>Alephium is home to hundreds of innovative dApps.</strong>
          </p>
        </TextElement>
        <LogosContainer ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          {isInitialized &&
            logoSlots.map((slot, index) => {
              const position = allPositionsRef.current[index]
              if (!position) return null
              const parallaxX = position.depth ? currentOffsetRef.current.x * position.depth : 0
              const parallaxY = position.depth ? currentOffsetRef.current.y * position.depth : 0
              const dappCurrent = dapps[slot.currentDappIdx]
              const dappNext = slot.nextDappIdx !== null ? dapps[slot.nextDappIdx] : null

              return (
                <LogoWrapper
                  key={`${dappCurrent?.name ?? 'empty'}-${index}`}
                  isSelected={
                    !!(hoveredAppName === dappCurrent?.name || (dappNext && hoveredAppName === dappNext.name))
                  }
                  style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%) scale(${position.size}) translate(${parallaxX}px, ${parallaxY}px)`,
                    zIndex: hoverPosition && position.depth ? Math.round(position.depth * 100) : 1,
                    opacity: 1
                  }}
                >
                  {dappCurrent && (
                    <a
                      href={`https://alph.land/${extractAppId(dappCurrent.media.logoUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        opacity: slot.fadeState === 'fading' ? (fadeIn[index] ? 0 : 1) : 1,
                        transition: `opacity ${FADE_DURATION / 2}ms cubic-bezier(0.4, 0, 0.2, 1)`
                      }}
                    >
                      <img
                        src={dappCurrent.media.logoUrl}
                        alt={dappCurrent.name}
                        loading="eager"
                        style={{ opacity: 1 }}
                      />
                      {hoveredAppName === dappCurrent.name && <AppTooltip>{dappCurrent.name}</AppTooltip>}
                    </a>
                  )}
                  {dappNext && (
                    <a
                      href={`https://alph.land/${extractAppId(dappNext.media.logoUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        opacity: slot.fadeState === 'fading' ? (fadeIn[index] ? 1 : 0) : 0,
                        transition: `opacity ${FADE_DURATION / 2}ms cubic-bezier(0.4, 0, 0.2, 1)`
                      }}
                    >
                      <img src={dappNext.media.logoUrl} alt={dappNext.name} loading="eager" style={{ opacity: 1 }} />
                      {hoveredAppName === dappNext.name && <AppTooltip>{dappNext.name}</AppTooltip>}
                    </a>
                  )}
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

const LogoWrapper = styled.div<{ isSelected?: boolean }>`
  position: absolute;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.15s ease-out, opacity ${FADE_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;
  border-radius: 50%;
  border: ${({ isSelected }) => (isSelected ? '6px solid white' : 'none')};
  opacity: 1;

  @media ${deviceBreakPoints.mobile} {
    width: 45px;
    height: 45px;
    border: ${({ isSelected }) => (isSelected ? '3px solid white' : 'none')};
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
    transition: transform 0.15s ease-out, opacity 0.3s ease-in;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    background-color: ${({ theme }) => theme.background2};
  }
`

const AppTooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.background2};
  color: ${({ theme }) => theme.textPrimary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
  white-space: nowrap;
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.2s ease-out;
  margin-bottom: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  padding: var(--spacing-6);
  border-radius: var(--radius-big);
  backdrop-filter: blur(30px) brightness(40%);
  border: 3px solid ${({ theme }) => theme.borderPrimary};
`
