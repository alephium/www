import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import styled from 'styled-components'

import { useTheme } from '../contexts/ThemeContext'
import Toggle from '../Toggle'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ThemeToggleStyled>
      <Toggle
        toggled={theme === 'dark'}
        onToggle={toggleTheme}
        ToggleIcons={[RiSunFill, RiMoonFill]}
        handleColors={['#FFD700', '#515151']}
      />
    </ThemeToggleStyled>
  )
}

export default ThemeToggle

const ThemeToggleStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: var(--spacing-4);

  .toggle-icon {
    stroke-width: 0;
  }
`
