import styled, { css } from 'styled-components'
import SimpleLink from '../SimpleLink'
import { ReactNode } from 'react'
import TextElement from './TextElement'

interface CardProps {
  children: ReactNode
  url?: string
}

const TextCard = ({ children, url }: CardProps) => {
  const card = (
    <CardStyled>
      <TextElementStyled isSmall url={url}>
        {children}
      </TextElementStyled>
    </CardStyled>
  )

  return url ? <SimpleLink url={url}>{card}</SimpleLink> : card
}

export default TextCard

const CardStyled = styled.div`
  padding: 41px 30px 25px 34px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.bgPrimary};
  background-color: ${({ theme }) => theme.bgTertiary};
  background-clip: padding-box;
  text-decoration: none;
  box-shadow: 0px 22px 30px rgba(0, 0, 0, 0.47);
  transition: all 0.1s ease-out;
`

const TextElementStyled = styled(TextElement)<Pick<CardProps, 'url'>>`
  ${({ url }) =>
    url &&
    css`
      &:hover {
        > h3 {
          ::after {
            content: '  →';
          }
        }
      }
    `}
`
