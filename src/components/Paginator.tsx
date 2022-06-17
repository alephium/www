import { motion } from 'framer-motion'
import { FC } from 'react'
import styled from 'styled-components'

interface PaginatorProps {
  numberOfPages?: number
  currentPage: number
  setCurrentPage: (page: number) => void
  onPageClick: (page: number) => void
  className?: string
}

let Paginator: FC<PaginatorProps> = ({ numberOfPages = 2, currentPage, setCurrentPage, onPageClick, className }) => {
  const handleOnClick = (page: number) => {
    setCurrentPage(page)
    onPageClick(page)
  }

  return (
    <div className={className}>
      {Array.from({ length: numberOfPages }).map((_, index) => (
        <DotContainer key={`page-${index}`} onClick={() => handleOnClick(index)}>
          {currentPage === index && <Dot layoutId="dot" />}
        </DotContainer>
      ))}
    </div>
  )
}

Paginator = styled(Paginator)`
  display: flex;
  gap: var(--spacing-2);

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

export default Paginator
