import styled from 'styled-components'

interface GradientTextProps {
  children: React.ReactNode
  color1?: string
  color2?: string
  className?: string
}

const GradientText = (props: GradientTextProps) => <GradientTextStyled {...props} />

const GradientTextStyled = styled.span<GradientTextProps>`
  background: radial-gradient(
    circle at 100% 0%,
    ${({ theme, color1 }) => (color1 ? color1 : theme.palette4)} 0%,
    ${({ theme, color2 }) => (color2 ? color2 : theme.palette5)} 60%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
`

export default GradientText
