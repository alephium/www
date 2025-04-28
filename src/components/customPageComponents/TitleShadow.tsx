import styled from 'styled-components'

interface TitleShadowProps {
  className?: string
}

const TitleShadow = ({ className }: TitleShadowProps) => <TitleShadowStyled className={className} />

export default TitleShadow

const TitleShadowStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: var(--radius-big);
  transform: translateX(-30px);
  filter: blur(60px);
  pointer-events: none;
  z-index: -1;
`
