import styled from 'styled-components'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

const GradientText = ({ children, className }: GradientTextProps) => (
  <GradientTextStyled className={className}>{children}</GradientTextStyled>
)

const GradientTextStyled = styled.span`
  background: radial-gradient(
    circle at 100% 0%,
    ${({ theme }) => theme.palette5} 0%,
    ${({ theme }) => theme.palette5} 5%,
    ${({ theme }) => theme.palette2} 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
`

export default GradientText
