import React, { FC, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

import SimpleLink, { SimpleLinkProps } from './SimpleLink'
import PageSectionContainer from './PageSectionContainer'
import Columns from './Columns'
import Column from './Column'
import ModalAboutUs from './ModalAboutUs'
import ModalContact from './ModalContact'
import ModalPrivacyPolicy from './ModalPrivacyPolicy'

import LogoBlack from '../images/svgs/logo-black.svg'

export interface FooterContentType {
  columns: {
    title: string
    links: SimpleLinkProps[]
  }[]
}

interface FooterProps {
  className?: string
  content: FooterContentType
}

let Footer: FC<FooterProps> = ({ className, content }) => {
  const [isAboutUsModalOpen, setIsAboutUsModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isPrivacyPolicyModalOpen, setIsPrivacyPolicyModalOpen] = useState(false)
  const columnsContent = content.columns
  columnsContent[2].links[0] = { ...columnsContent[2].links[0], openModal: setIsAboutUsModalOpen }
  columnsContent[2].links[1] = { ...columnsContent[2].links[1], openModal: setIsContactModalOpen }
  columnsContent[2].links[2] = { ...columnsContent[2].links[2], openModal: setIsPrivacyPolicyModalOpen }
  return (
    <section className={className}>
      <PageSectionContainerStyled>
        <LogoBlack />
        <Separator />
        <FooterColumns gap="var(--spacing-4)">
          {columnsContent.map((column) => (
            <Column>
              <FooterColumn key={column.title} {...column} />
            </Column>
          ))}
        </FooterColumns>
      </PageSectionContainerStyled>
      <ModalAboutUs isOpen={isAboutUsModalOpen} setIsOpen={setIsAboutUsModalOpen} />
      <ModalContact isOpen={isContactModalOpen} setIsOpen={setIsContactModalOpen} />
      <ModalPrivacyPolicy isOpen={isPrivacyPolicyModalOpen} setIsOpen={setIsPrivacyPolicyModalOpen} />
    </section>
  )
}

interface FooterColumnProps {
  className?: string
  title: string
  links: Array<SimpleLinkProps>
}

let FooterColumn: FC<FooterColumnProps> = ({ className, title, links }) => {
  const theme = useTheme()

  return (
    <div className={className}>
      <div className="title">{title}</div>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <SimpleLink {...link} color={theme.textTertiary} />
          </li>
        ))}
      </ul>
    </div>
  )
}

const Separator = styled.div`
  width: 2px;
  height: 5rem;
  background-color: ${({ theme }) => theme.separator};
  margin: auto 0;

  @media ${deviceBreakPoints.mobile} {
    display: none;
  }
`

Footer = styled(Footer)`
  padding-top: var(--spacing-25);
  padding-bottom: var(--spacing-25);
  background-color: ${({ theme }) => theme.bgPrimary};
  color: ${({ theme }) => theme.textPrimary};
  font-size: var(--fontSize-18);

  svg {
    max-width: var(--width-120);
  }
`

FooterColumn = styled(FooterColumn)`
  ul {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
    list-style: none;
    padding-left: 0;
  }

  .title {
    font-weight: var(--fontWeight-medium);
  }
`

const FooterColumns = styled(Columns)`
  flex: 1;
`

const PageSectionContainerStyled = styled(PageSectionContainer)`
  display: flex;
  gap: var(--spacing-20);
  justify-content: space-between;

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
    gap: var(--spacing-10);
  }
`

export default Footer
