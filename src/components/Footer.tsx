import { graphql, useStaticQuery } from 'gatsby'
import styled, { useTheme } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'
import { notEmpty } from '../utils/misc'
import AlephiumLogo from './AlephiumLogo'
import Column from './Columns/Column'
import Columns from './Columns/Columns'
import NavigationMenuSocials from './navigation/NavigationMenuSocials'
import PageSectionContainer from './PageSectionContainer'
import ScrollToTop from './ScrollToTop'
import SimpleLink from './SimpleLink'

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

const Footer = () => {
  const data = useStaticQuery<Queries.FooterSectionQuery>(footerQuery)
  const theme = useTheme()

  const columnsContent = data.footer.nodes[0].frontmatter?.columns
  const bottomContent = data.footer.nodes[0].frontmatter?.bottom

  return (
    <>
      <ScrollToTop />
      <FooterStyled>
        <PageSectionContainerStyled>
          <FooterColumnsSection gap="var(--spacing-4)">
            {columnsContent?.map((column) => (
              <Column key={column?.title}>
                <FooterColumn>
                  <div className="title">{column?.title}</div>
                  <ul>
                    {column?.links?.map(
                      (link) =>
                        link?.text &&
                        link?.url && (
                          <li key={link.text}>
                            <SimpleLink
                              text={link.text}
                              url={link.url}
                              color={theme.textTertiary}
                              trackingName={`footer:${link?.text?.replaceAll(' ', '-')}-link`}
                            />
                          </li>
                        )
                    )}
                  </ul>
                </FooterColumn>
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
      </FooterStyled>
    </>
  )
}

export default Footer

const PageSectionContainerBottom = styled(PageSectionContainer)`
  display: flex;
  align-items: center;
  padding: var(--spacing-12) 0 0;

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--spacing-4);
  }
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

const FooterStyled = styled.div`
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

const FooterColumn = styled.div`
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
