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
  width: 160%;
  height: 160%;
  border-radius: var(--radius-big);
  transform: translateX(-20%) translateY(-20%);

  pointer-events: none;
  z-index: -1;
  backdrop-filter: blur(60px) saturate(160%) brightness(0.7);
  -webkit-backdrop-filter: blur(60px) saturate(160%) brightness(0.7);

  /* Circular gradient mask for progressive fade */
  mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%);
  mask-mode: alpha;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;

  -webkit-mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%);
  -webkit-mask-mode: alpha;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: cover;
`
