/*
Copyright 2018 - 2023 The Alephium Authors
This file is part of the alephium project.

The library is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

The library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with the library. If not, see <http://www.gnu.org/licenses/>.
*/

import { motion, Transition } from 'framer-motion'
import { useCallback } from 'react'
import { IconType } from 'react-icons'
import styled, { css, useTheme } from 'styled-components'

interface ToggleProps {
  toggled: boolean
  onToggle: (value: boolean) => void
  disabled?: boolean
  ToggleIcons?: [IconType, IconType]
  handleColors?: [string, string]
  label?: string
  className?: string
}

const toggleWidth = 70

const Toggle = ({ toggled, onToggle, className, disabled, ToggleIcons, handleColors, label }: ToggleProps) => {
  const theme = useTheme()
  const [ToggleIconRight, ToggleIconLeft] = ToggleIcons ?? [undefined, undefined]

  const toggleBackgroundVariants = {
    off: {
      backgroundColor: theme.bgPrimary
    },
    on: { backgroundColor: handleColors ? theme.bgTertiary : '#2a51ff' }
  }

  const handleContainerVariants = {
    off: { left: -2 },
    on: { left: toggleWidth / 2 }
  }

  const handleVariants = {
    off: { backgroundColor: handleColors?.[0] ?? 'var(--color-white)' },
    on: { backgroundColor: handleColors?.[1] ?? 'var(--color-white)' }
  }

  const toggleState = toggled ? 'on' : 'off'

  const transition: Transition = { duration: 0.2, type: 'tween' }

  const handleSwitch = useCallback(() => {
    if (!disabled) {
      onToggle(!toggled)
    }
  }, [disabled, toggled, onToggle])

  const getToggleIconColor = (isActive: boolean) => (isActive ? 'var(--color-white)' : theme.textTertiary)

  return (
    <StyledToggle
      onClick={handleSwitch}
      className={className}
      aria-label={label}
      aria-checked={toggled}
      role="checkbox"
      tabIndex={0}
      variants={toggleBackgroundVariants}
      animate={toggleState}
      transition={transition}
      disabled={disabled}
    >
      <ToggleHandleContainer variants={handleContainerVariants} animate={toggleState} transition={transition}>
        <ToggleHandle variants={handleVariants} animate={toggleState} transition={transition} />
      </ToggleHandleContainer>
      {ToggleIconRight && ToggleIconLeft && (
        <ToggleContent>
          <ToggleIconContainer>
            <ToggleIconRight color={getToggleIconColor(!toggled)} size={16} className="toggle-icon" strokeWidth={2} />
          </ToggleIconContainer>
          <ToggleIconContainer>
            <ToggleIconLeft color={getToggleIconColor(toggled)} size={16} className="toggle-icon" strokeWidth={2} />
          </ToggleIconContainer>
        </ToggleContent>
      )}
    </StyledToggle>
  )
}

export default Toggle

export const StyledToggle = styled(motion.div)<Omit<ToggleProps, 'onToggle' | 'toggled'>>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${toggleWidth}px;
  height: calc(${toggleWidth}px / 2);
  border-radius: ${toggleWidth}px;
  overflow: hidden;
  cursor: pointer;
  box-sizing: content-box;
  border: 1px solid ${({ theme }) => theme.textPrimary};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.link};
    border: 1px solid ${({ theme }) => theme.link};
  }

  svg {
    cursor: pointer;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`

const ToggleHandleContainer = styled(motion.div)`
  position: absolute;
  width: calc(${toggleWidth}px / 2);
  height: calc(${toggleWidth}px / 2);
  padding: 2px;
`

const ToggleHandle = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.textPrimary};
  border-radius: ${toggleWidth}px;
`

const ToggleContent = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
`

const ToggleIconContainer = styled.div`
  width: 50%;
  display: flex;

  .toggle-icon {
    margin: auto;
  }
`
