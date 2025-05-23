import styled from 'styled-components'

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  return (
    <ScrollToTopStyled>
      <ScrollToTopButton onClick={handleScrollToTop} role="button">
        ↑ Scroll to top
      </ScrollToTopButton>
    </ScrollToTopStyled>
  )
}

export default ScrollToTop

const ScrollToTopStyled = styled.div`
  position: relative;
`

const ScrollToTopButton = styled.div`
  position: absolute;
  right: 10vw;
  padding: 0 15px;
  top: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.textSecondary};
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  border-radius: 100px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
  }
`
