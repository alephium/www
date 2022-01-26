import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { deviceBreakPoints } from '../styles/global-style'

import SectionTextHeader from './SectionTextHeader'
import PageSectionContainer from './PageSectionContainer'
import SubsectionTextHeader from './SubsectionTextHeader'
import SimpleLink from './SimpleLink'

import NetworkImage from './styleable-images/ImageNetwork'

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
      <NetworkImageStyled />
      <PageSectionContainer>
        <SectionTextHeader title={title} subtitle={subtitle} bigSubtitle bigText />
        <Subsections>
          {subsections.map(({ title, description, image, items }: SubsectionType) => (
            <Subsection key={title}>
              <SubsectionImage>{image && <img src={image.publicURL} alt={title} />}</SubsectionImage>
              <SubsectionTextContent>
                <SubsectionTextHeader title={title} subtitle={description} />
                <SubsectionItems>
                  {items &&
                    items.map(({ title, logo, url }) => (
                      <SubsectionItem key={title}>
                        {url ? (
                          <SimpleLink url={url} text={title} newTab>
                            {logo ? (
                              <img src={logo.publicURL} alt={title} />
                            ) : (
                              <SubsectionItemTitle>{title}</SubsectionItemTitle>
                            )}
                          </SimpleLink>
                        ) : (
                          <SubsectionItemTitle>{title}</SubsectionItemTitle>
                        )}
                      </SubsectionItem>
                    ))}
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
  padding-top: var(--spacing-15);
  padding-bottom: var(--spacing-14);
  position: relative;
`

const NetworkImageStyled = styled(NetworkImage)`
  position: absolute;
  right: 0;
  top: var(--spacing-6);

  @media ${deviceBreakPoints.ipad} {
    width: 50%;
  }
`

const Subsections = styled.div`
  margin-top: var(--spacing-20);
`

const SubsectionImage = styled.div`
  flex-grow: 1;
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
    }
  }

  &:nth-child(odd) {
    ${SubsectionImage} {
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

  @media ${deviceBreakPoints.ipad} {
    align-items: flex-start;
  }
`

const SubsectionItems = styled.div`
  margin-top: var(--spacing-4);
  gap: var(--spacing-4);
  display: flex;
  flex-wrap: wrap;
`

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

  > a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`

const SubsectionItemTitle = styled.div`
  font-weight: var(--fontWeight-bold);
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
