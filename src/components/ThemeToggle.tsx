import { motion } from 'framer-motion'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import styled from 'styled-components'

import { useTheme } from '../contexts/ThemeContext'

const DAY_GRADIENT = 'linear-gradient(180deg, rgb(165, 212, 255) 0%, rgb(185, 225, 255) 50%, rgb(236, 250, 255) 100%)'
const SUNSET_GRADIENT = 'linear-gradient(180deg, rgb(95, 143, 255) 20%, rgb(255, 120, 48) 80%, rgb(255, 207, 95) 100%)'
const NIGHT_GRADIENT = 'linear-gradient(180deg, rgb(21, 21, 36) 0%, rgb(31, 30, 98) 50%, rgb(46, 27, 163) 100%)'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ThemeToggleStyled>
      <ToggleButton onClick={toggleTheme} initial={false}>
        <ToggleIcon
          initial={false}
          animate={{
            y: theme === 'dark' ? 0 : 40,
            opacity: theme === 'dark' ? 1 : 0
          }}
          transition={{
            type: 'spring',
            stiffness: 20
          }}
        >
          <RiMoonFill size={20} color="#ffe2a2" />
        </ToggleIcon>
        <ToggleIcon
          initial={false}
          animate={{
            y: theme === 'dark' ? 40 : 0,
            opacity: theme === 'dark' ? 0 : 1
          }}
          transition={{
            type: 'spring',
            stiffness: 20
          }}
        >
          <RiSunFill size={20} color="#fff8c6" />
        </ToggleIcon>
        <SkyGradient
          $isDark={theme === 'dark'}
          initial={false}
          animate={{
            background:
              theme === 'dark'
                ? [DAY_GRADIENT, SUNSET_GRADIENT, NIGHT_GRADIENT]
                : [NIGHT_GRADIENT, SUNSET_GRADIENT, DAY_GRADIENT]
          }}
        />
      </ToggleButton>
    </ThemeToggleStyled>
  )
}

export default ThemeToggle

const ThemeToggleStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
`

const ToggleButton = styled(motion.button)`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.link};
  }
`

const ToggleIcon = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

const SkyGradient = styled(motion.div)<{ $isDark: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`
