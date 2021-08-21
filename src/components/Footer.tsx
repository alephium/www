import React, { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from '../styles/themes'
import { deviceBreakPoints } from '../styles/global-style'

import SimpleLink, { SimpleLinkProps } from './SimpleLink'
import PageSectionContainer from './PageSectionContainer'
import Columns from './Columns'
import Column from './Column'

import LogoBlack from '../images/svgs/logo-black.svg'

interface FooterProps {
  className?: string
}

let Footer: FC<FooterProps> = ({ className }) => (
  <section className={className}>
    <PageSectionContainerStyled>
      <LogoBlack />
      <FooterColumns gap="var(--spacing-8)">
        <Column>
          <FooterColumn
            title="Resources"
            links={[
              { text: 'Wallet', to: '#' },
              {
                text: 'BlockFlow white paper',
                to: 'https://github.com/alephium/white-paper/blob/master/alephium.pdf',
                newTab: true
              },
              { text: 'Investor documents', to: '#', newTab: true }
            ]}
          />
        </Column>
        <Column>
          <FooterColumn
            title="Social Media"
            links={[
              { text: 'Telegram', to: '#', newTab: true },
              { text: 'Slack', to: '#', newTab: true },
              { text: 'Twitter', to: '#', newTab: true },
              { text: 'Reddit', to: '#', newTab: true }
            ]}
          />
        </Column>
        <Column>
          <FooterColumn
            title="Company"
            links={[
              { text: 'About us', to: '#' },
              { text: 'Contact', to: '#' },
              { text: 'Privacy policy', to: '#' }
            ]}
          />
        </Column>
      </FooterColumns>
    </PageSectionContainerStyled>
  </section>
)

interface FooterColumnProps {
  className?: string
  title: string
  links: Array<SimpleLinkProps>
}

let FooterColumn: FC<FooterColumnProps> = ({ className, title, links }) => (
  <div className={className}>
    <div className="title">{title}</div>
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <SimpleLink {...link} color="var(--color-text-grey-light-2)" />
        </li>
      ))}
    </ul>
  </div>
)

Footer = styled(Footer)`
  padding-top: var(--spacing-50);
  padding-bottom: var(--spacing-50);
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
    gap: var(--spacing-4);
    color: var(--color-text-grey-light-2);
    list-style: none;
    padding-left: 0;
  }

  .title {
    font-weight: var(--fontWeight-bold);
  }
`

const FooterColumns = styled(Columns)`
  flex: 1;
`

const PageSectionContainerStyled = styled(PageSectionContainer)`
  display: flex;
  gap: var(--spacing-80);
  justify-content: space-between;

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
    gap: var(--spacing-20);
  }
`

export default Footer
