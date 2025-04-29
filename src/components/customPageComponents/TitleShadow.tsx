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
  width: 180%;
  height: 200%;
  border-radius: var(--radius-big);
  transform: translateX(-30%) translateY(-30%);

  pointer-events: none;
  z-index: -1;
  backdrop-filter: blur(40px) saturate(200%) brightness(0.8);
  -webkit-backdrop-filter: blur(40px) saturate(200%) brightness(0.8);

  /* Circular gradient mask for progressive fade */
  mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 70%);
  mask-mode: alpha;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;

  -webkit-mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 70%);
  -webkit-mask-mode: alpha;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: cover;
`
