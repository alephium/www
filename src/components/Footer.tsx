import React, { FC } from 'react'
import styled, { useTheme } from 'styled-components'

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
      <Separator />
      <FooterColumns gap="var(--spacing-4)">
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
    font-weight: var(--fontWeight-bold);
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
