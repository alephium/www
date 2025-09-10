import styled from 'styled-components'

const SimpleLoader = () => (
  <SimpleLoaderContainer>
    {Array.from({ length: 3 }, (_, i) => (
      <LoaderDot key={i} />
    ))}
  </SimpleLoaderContainer>
)

const LoaderDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.textSecondary};
  animation: loading 1.2s linear infinite;
`

const SimpleLoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 40px;
  height: 40px;

  ${LoaderDot}:nth-child(1) {
    animation-delay: -0.24s;
  }

  ${LoaderDot}:nth-child(2) {
    animation-delay: -0.12s;
  }

  ${LoaderDot}:nth-child(3) {
    animation-delay: 0s;
  }

  @keyframes loading {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`

export default SimpleLoader
