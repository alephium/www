import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { deviceBreakPoints } from '../styles/global-style'

import SectionTextHeader from './SectionTextHeader'
import PageSectionContainer from './PageSectionContainer'
import SubsectionTextHeader from './SubsectionTextHeader'
import SimpleLink from './SimpleLink'

import IllustrationColumn from './Columns/IllustrationColumn'

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
      <PageSectionContainer>
        <SectionTextHeader title={title} subtitle={subtitle} bigSubtitle bigText />
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
                        <SimpleLink url={url} text={title} newTab trackingName={`ecosystem-${title}`}>
                          <SubsectionItem key={title}>
                            {logo ? (
                              <>
                                <IllustrationColumn>
                                  <SubsectionItemLogo src={logo.publicURL} alt={title} />
                                </IllustrationColumn>
                                <SubsectionItemTitleOnHover>{title}</SubsectionItemTitleOnHover>
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
  padding-top: var(--spacing-20);
  padding-bottom: var(--spacing-20);
  position: relative;
`

const Subsections = styled.div`
  margin-top: var(--spacing-15);
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
    margin-bottom: var(--spacing-14);
  }
`

const SubsectionItems = styled.div`
  margin-top: var(--spacing-4);
  gap: var(--spacing-4);
  display: flex;
  flex-wrap: wrap;
`

const SubsectionItemTitle = styled.div`
  font-weight: var(--fontWeight-bold);
  display: flex;
`

const SubsectionItemTitleOnHover = styled(SubsectionItemTitle)`
  display: none;
`

const SubsectionItemLogo = styled.img``

const SubsectionItem = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bgSecondary};
  padding: var(--spacing-2);
  box-sizing: border-box;
  border-radius: 9px;
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.bgSurface};

  ${SubsectionItemTitleOnHover},
  ${SubsectionItemTitle} {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  ${SubsectionItemLogo} {
    max-width: 100%;
    max-height: 100%;
  }

  &:hover {
    ${SubsectionItemLogo} {
      display: none;
    }

    ${SubsectionItemTitleOnHover} {
      display: flex;
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
