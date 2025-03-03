import SectionTextHeader from '../SectionTextHeader'
import { graphql } from 'gatsby'
import { notEmpty } from '../../utils/misc'
import Button from '../Button'
import styled from 'styled-components'

export const query = graphql`
  fragment PageSectionCta on MarkdownRemarkFrontmatterPageSectionCtaContent {
    titleRows
    subtitleRows
    button {
      text
      url
    }
  }
`

const PageSectionCta = (content: Queries.PageSectionCtaFragment) => (
  <PageSectionCtaStyled>
    {content?.titleRows && content?.subtitleRows && (
      <SectionTextHeader
        titleRows={content.titleRows.filter(notEmpty)}
        subtitleRows={content.subtitleRows.filter(notEmpty)}
        centered
        bigSubtitle
      />
    )}

    {content?.button && content.button.url && (
      <CtaButtonSection>
        <Button url={content.button.url}>{content.button.text}</Button>
      </CtaButtonSection>
    )}
  </PageSectionCtaStyled>
)

export default PageSectionCta

const PageSectionCtaStyled = styled.section`
  padding-bottom: var(--spacing-12);
`

const CtaButtonSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`
