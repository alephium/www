import { motion } from 'framer-motion'
import styled from 'styled-components'

import { RiPauseFill, RiPlayFill } from 'react-icons/ri'

interface PaginatorProps {
  numberOfPages?: number
  currentPage: number
  setCurrentPage: (page: number) => void
  onPageClick: (page: number) => void
  isPaused: boolean
  onTogglePause: () => void
  className?: string
}

const Paginator = ({
  numberOfPages = 2,
  currentPage,
  setCurrentPage,
  onPageClick,
  isPaused,
  onTogglePause,
  className
}: PaginatorProps) => {
  const handleOnClick = (page: number) => {
    setCurrentPage(page)
    onPageClick(page)
  }

  return (
    <div className={className}>
      {Array.from({ length: numberOfPages }).map((_, index) => (
        <DotContainer key={`page-${index}`} onClick={() => handleOnClick(index)}>
          {currentPage === index && <Dot layoutId="dot" style={{ scale: 1.2 }} />}
        </DotContainer>
      ))}
      <PausePlayIcon onClick={onTogglePause}>{isPaused ? <RiPlayFill /> : <RiPauseFill />}</PausePlayIcon>
    </div>
  )
}

export default styled(Paginator)`
  display: flex;
  gap: var(--spacing-2);
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.textPrimary};
    width: var(--width-16);

    &:hover {
      cursor: pointer;
    }
  }
`

const DotContainer = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 10px;
  border: 3px solid white;
  cursor: pointer;
`

const Dot = styled(motion.div)`
  height: 10px;
  width: 10px;
  border-radius: 10px;
  background-color: white;
`

const PausePlayIcon = styled.div`
  height: 20px;
  width: 20px;
  margin-left: 5px;

  svg {
    height: 100%;
    width: 100%;
  }
`
