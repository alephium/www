import { colord } from 'colord'
import styled from 'styled-components'

interface GradientTextProps {
  children: React.ReactNode
  color?: string
  className?: string
}

const GradientText = ({ children, className }: GradientTextProps) => (
  <GradientTextStyled className={className}>{children}</GradientTextStyled>
)

const GradientTextStyled = styled.span`
  background: radial-gradient(
    circle at 100% 0%,
    ${({ theme, color }) =>
        colord(color || theme.palette5)
          .lighten(0.1)
          .toHex()}
      0%,
    ${({ theme, color }) => (color ? color : theme.palette5)} 40%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
`

export default GradientText
