import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { deviceBreakPoints } from '../styles/global-style'

import SectionTextHeader from './SectionTextHeader'
import PageSectionContainer from './PageSectionContainer'
import SubsectionTextHeader from './SubsectionTextHeader'
import SimpleLink from './SimpleLink'

type SubsectionType = {
  title: string
  description: string
  image?: { publicURL: string }
  items: {
    title: string
    logo?: { publicURL: string }
    url?: string
  }[]
}

let PageSectionEcosystem = ({ className }: { className?: string }) => {
  const { homepage } = useStaticQuery(query)

  const {
    ecosystemSection: { title, subtitle, subsections }
  } = homepage.nodes[0].frontmatter

  return (
    <section className={className}>
      <SectionTextHeader title={title} subtitle={subtitle} bigSubtitle bigText sticky />
      <PageSectionContainer>
        <Subsections>
          {subsections.map(({ title, description, image, items }: SubsectionType) => (
            <Subsection key={title}>
              <SubsectionImageContainer>{image && <img src={image.publicURL} alt={title} />}</SubsectionImageContainer>
              <SubsectionTextContent>
                <SubsectionTextHeader title={title} subtitle={description} />
                <SubsectionItems>
                  {items &&
                    items.map(({ title, logo, url }) =>
                      url ? (
                        <SimpleLink
                          url={url}
                          text={title}
                          key={url}
                          newTab
                          trackingName={`ecosystem-section:${title.replaceAll(' ', '-')}-link`}
                        >
                          <SubsectionItem key={title}>
                            {logo ? (
                              <>
                                <SubsectionItemTitle className="with-logo">{title}</SubsectionItemTitle>
                                <SubsectionItemLogoContainer>
                                  <SubsectionItemLogo src={logo.publicURL} alt={title} />
                                </SubsectionItemLogoContainer>
                              </>
                            ) : (
                              <SubsectionItemTitle>{title}</SubsectionItemTitle>
                            )}
                          </SubsectionItem>
                        </SimpleLink>
                      ) : (
                        <SubsectionItem key={title}>
                          <SubsectionItemTitle>{title}</SubsectionItemTitle>
                        </SubsectionItem>
                      )
                    )}
                </SubsectionItems>
              </SubsectionTextContent>
            </Subsection>
          ))}
        </Subsections>
      </PageSectionContainer>
    </section>
  )
}

PageSectionEcosystem = styled(PageSectionEcosystem)`
  padding-top: var(--spacing-10);
  padding-bottom: var(--spacing-20);
  position: relative;
`

const Subsections = styled.div`
  margin-top: var(--spacing-5);
`

const SubsectionImageContainer = styled.div`
  flex-grow: 1;

  @media ${deviceBreakPoints.mobile} {
    display: flex;
    justify-content: center;
  }

  img {
    width: 60%;
  }
`

const SubsectionTextContent = styled.div`
  max-width: 50%;

  @media ${deviceBreakPoints.mobile} {
    max-width: 100%;
  }
`

const Subsection = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);

  @media ${deviceBreakPoints.ipad} {
    flex-direction: column;
    gap: var(--spacing-4);
    align-items: stretch;
  }

  &:nth-child(odd) {
    ${SubsectionImageContainer} {
      order: 2;
      text-align: right;

      @media ${deviceBreakPoints.ipad} {
        order: 0;
      }
    }
  }

  &:not(:last-child) {
    margin-bottom: var(--spacing-20);
  }
`

const SubsectionItems = styled.div`
  margin-top: var(--spacing-4);
  gap: 30px;
  display: flex;
  flex-wrap: wrap;
`

const SubsectionItemTitle = styled.div`
  font-weight: var(--fontWeight-bold);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-out;
  text-align: center;
  padding: var(--spacing-1);
`

const SubsectionItemLogoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0;
  transition: all 0.2s ease-out;
  transform: translateY(-5px);
  padding: var(--spacing-2);
  display: flex;
`

const SubsectionItemLogo = styled.img`
  flex: 1;
  transition: all 0.2s ease-out;
  max-width: 100%;
  max-width: 100%;
`

const SubsectionItem = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgPrimary};
  box-shadow: 0px 22px 30px rgba(0, 0, 0, 0.47);
  box-sizing: border-box;
  border-radius: 9px;
  font-size: 13px;
  border: ${({ theme }) => theme.borderPrimary};

  &:hover {
    ${SubsectionItemTitle}.with-logo {
      opacity: 0;
      transform: translateY(-5px);
    }

    ${SubsectionItemLogoContainer} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const query = graphql`
  query {
    homepage: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/homepage.md/" } }) {
      nodes {
        frontmatter {
          ecosystemSection {
            title
            subtitle
            subsections {
              title
              description
              image {
                publicURL
              }
              items {
                title
                logo {
                  publicURL
                }
                url
              }
            }
          }
        }
      }
    }
  }
`

export default PageSectionEcosystem
