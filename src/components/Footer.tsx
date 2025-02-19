import { FC, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

import SimpleLink, { SimpleLinkProps } from './SimpleLink'
import PageSectionContainer from './PageSectionContainer'
import Columns from './Columns/Columns'
import Column from './Columns/Column'
import ModalTeam from './ModalTeam'
import ModalContact from './ModalContact'

import { graphql, useStaticQuery } from 'gatsby'
import AlephiumLogo from './AlephiumLogo'

interface FooterProps {
  openPrivacyPolicyModal?: boolean
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const data = useStaticQuery<Queries.FooterSectionQuery>(footerQuery)
  const theme = useTheme()

  const columnsContent = data.footer.nodes[0].frontmatter?.columns

  return (
    <div className={className}>
      <PageSectionContainerStyled>
        <LogosSection>
          <LogoStyled gradientIndex={0} fill={theme.textTertiary} />
        </LogosSection>
        <Separator />
        <FooterColumnsSection gap="var(--spacing-4)">
          {columnsContent?.map((column, columnIndex) => (
            <Column key={column?.title}>
              <FooterColumn
                title={column?.title ?? ''}
                links={
                  column?.links?.map((link, linkIndex) => ({
                    text: link?.text ?? '',
                    url: link?.url ?? '',
                    newTab: link?.newTab ?? false,
                    openModal:
                      columnIndex === 2 && linkIndex === 0
                        ? setIsTeamModalOpen
                        : columnIndex === 2 && linkIndex === 2
                        ? setIsContactModalOpen
                        : undefined
                  })) ?? []
                }
              />
            </Column>
          ))}
        </FooterColumnsSection>
      </PageSectionContainerStyled>
      <ModalTeam isOpen={isTeamModalOpen} setIsOpen={setIsTeamModalOpen} />
      <ModalContact isOpen={isContactModalOpen} setIsOpen={setIsContactModalOpen} />
    </div>
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
            <SimpleLink
              {...link}
              color={theme.textTertiary}
              trackingName={`footer:${link.text?.replaceAll(' ', '-')}-link`}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export const footerQuery = graphql`
  query FooterSection {
    footer: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/footer.md/" } }) {
      nodes {
        frontmatter {
          columns {
            title
            links {
              text
              url
              newTab
            }
          }
        }
      }
    }
  }
`

export default styled(Footer)`
  padding: var(--spacing-12) 0;
  background-color: ${({ theme }) => theme.bgPrimary};
  color: ${({ theme }) => theme.textPrimary};
  font-size: var(--fontSize-18);
  border-top: 1px solid ${({ theme }) => theme.separator};
`

const LogosSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Separator = styled.div`
  width: 2px;
  height: 5rem;
  background-color: ${({ theme }) => theme.separator};
  margin: auto 0;

  @media ${deviceBreakPoints.mobile} {
    display: none;
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
    font-weight: var(--fontWeight-semiBold);
    margin-bottom: var(--spacing-2);
  }
`

const FooterColumnsSection = styled(Columns)`
  flex-grow: 1;
`

const PageSectionContainerStyled = styled(PageSectionContainer)`
  display: flex;
  gap: var(--spacing-10);
  justify-content: space-between;

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
    gap: var(--spacing-10);
    align-items: center;
    text-align: center;
  }
`

const LogoStyled = styled(AlephiumLogo)`
  height: auto;
  max-width: 60px;
`
