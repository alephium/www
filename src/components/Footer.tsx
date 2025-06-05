import { graphql, useStaticQuery } from 'gatsby'
import styled, { useTheme } from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'
import { notEmpty } from '../utils/misc'
import AlephiumLogo from './AlephiumLogo'
import Column from './Columns/Column'
import Columns from './Columns/Columns'
import NavigationMenuSocials from './navigation/NavigationMenuSocials'
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
        <FooterContent>
          <ContainerLeft>
            <BottomColumn>
              <LogosSection>
                <LogoStyled gradientIndex={0} fill={theme.textPrimary} />
              </LogosSection>
            </BottomColumn>
            <BottomColumn>
              <NavigationMenuSocialsStyled enabledItems={bottomContent?.socials?.filter(notEmpty) ?? []} />
            </BottomColumn>
            <BottomColumnCenter>{bottomContent?.text}</BottomColumnCenter>
          </ContainerLeft>
          <ContainerRight>
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
          </ContainerRight>
        </FooterContent>
      </FooterStyled>
    </>
  )
}

export default Footer

const FooterStyled = styled.div`
  padding: var(--spacing-12) 0;
  background-color: ${({ theme }) => theme.background3};
  border-top: 1px solid ${({ theme }) => theme.borderPrimary};
  color: ${({ theme }) => theme.textPrimary};
  font-size: var(--fontSize-18);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 80%;
    bottom: 0;
    left: 0;
    background: radial-gradient(
      circle at 0% 0%,
      transparent 0%,
      transparent 10%,
      ${({ theme }) => theme.palette4} 25%,
      ${({ theme }) => theme.palette6} 30%,
      ${({ theme }) => theme.palette1} 40%,
      ${({ theme }) => theme.palette3} 55%,
      ${({ theme }) => theme.palette2} 60%,
      transparent 65%
    );
    mask-image: radial-gradient(ellipse 100% 100% at left bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%);
    -webkit-mask-image: radial-gradient(ellipse 100% 100% at left bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%);
    pointer-events: none;
    opacity: 0.5;
  }
`

const FooterContent = styled.div`
  display: flex;
  width: var(--page-width);
  margin: 0 auto;

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
    gap: var(--spacing-4);
  }
`

const ContainerLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-4);
  flex-direction: column;

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--spacing-4);
  }
`

const ContainerRight = styled.div`
  flex: 1;
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

const BottomColumn = styled.div``

const BottomColumnCenter = styled(BottomColumn)`
  text-align: center;
  color: ${({ theme }) => theme.textTertiary};
`

const NavigationMenuSocialsStyled = styled(NavigationMenuSocials)`
  justify-content: flex-end;
`

const LogoStyled = styled(AlephiumLogo)`
  height: auto;
  max-width: 30px;
  position: relative;
  z-index: 1;
`

const LogosSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  padding: 4px;
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
