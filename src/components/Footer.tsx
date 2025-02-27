import { FC } from 'react'
import styled, { useTheme } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

import SimpleLink, { SimpleLinkProps } from './SimpleLink'
import PageSectionContainer from './PageSectionContainer'
import Columns from './Columns/Columns'
import Column from './Columns/Column'

import { graphql, useStaticQuery } from 'gatsby'
import AlephiumLogo from './AlephiumLogo'
import SocialMediaIcon from './SocialMediaIcon'
import NavigationMenuSocials from './navigation/NavigationMenuSocials'
import { notEmpty } from '../utils/misc'

interface FooterProps {
  openPrivacyPolicyModal?: boolean
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  const data = useStaticQuery<Queries.FooterSectionQuery>(footerQuery)
  const theme = useTheme()

  const columnsContent = data.footer.nodes[0].frontmatter?.columns
  const bottomContent = data.footer.nodes[0].frontmatter?.bottom

  return (
    <div className={className}>
      <PageSectionContainerStyled>
        <Separator />
        <FooterColumnsSection gap="var(--spacing-4)">
          {columnsContent?.map((column) => (
            <Column key={column?.title}>
              <FooterColumn
                title={column?.title ?? ''}
                links={
                  column?.links?.map((link) => ({
                    text: link?.text ?? '',
                    url: link?.url ?? ''
                  })) ?? []
                }
              />
            </Column>
          ))}
        </FooterColumnsSection>
      </PageSectionContainerStyled>
      <PageSectionContainerBottom>
        <BottomColumn>
          <LogosSection>
            <LogoStyled gradientIndex={0} fill={theme.textTertiary} />
          </LogosSection>
        </BottomColumn>
        <BottomColumnCenter>{bottomContent?.text}</BottomColumnCenter>
        <BottomColumn>
          <NavigationMenuSocialsStyled enabledItems={bottomContent?.socials?.filter(notEmpty) ?? []} />
        </BottomColumn>
      </PageSectionContainerBottom>
    </div>
  )
}

const PageSectionContainerBottom = styled(PageSectionContainer)`
  display: flex;
  align-items: center;
  padding: var(--spacing-12) 0 0;
`

const BottomColumn = styled.div`
  flex: 1;
`

const BottomColumnCenter = styled(BottomColumn)`
  text-align: center;
  color: ${({ theme }) => theme.textTertiary};
`

const NavigationMenuSocialsStyled = styled(NavigationMenuSocials)`
  justify-content: flex-end;
`

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
              newTab={!link?.url?.startsWith('/')}
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
            }
          }
          bottom {
            text
            socials
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
  max-width: 30px;
`
