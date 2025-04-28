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
  border-radius: var(--radius-big);
  transform: translateX(-30px) scale(1.4);
  filter: blur(90px);
  pointer-events: none;
  z-index: -1;
  mix-blend-mode: multiply;
  backdrop-filter: blur(100px) saturate(200%) brightness(0.8);
`
