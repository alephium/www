import React, { FC, useState } from 'react'
import styled from 'styled-components'

import DotEmptyImage from '../images/svgs/dot-empty.svg'
import DotFilledImage from '../images/svgs/dot-filled.svg'

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
      {Array.from({ length: numberOfPages }).map((_, index) =>
        currentPage - 1 === index ? (
          <DotFilledImage key={`page-${index}`} />
        ) : (
          <DotEmptyImage key={`page-${index}`} onClick={() => handleOnClick(index + 1)} />
        )
      )}
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

export default Paginator
