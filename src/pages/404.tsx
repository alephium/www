import { Link, PageProps } from 'gatsby'
import styled from 'styled-components'

import Page from '../components/customPageComponents/Page'
import PageSectionContainer from '../components/PageSectionContainer'
import TextSnippet from '../components/TextSnippet'

const NotFoundPage = (props: PageProps) => (
  <Page
    {...props}
    seo={{
      title: 'Alephium | The Web3 you were promised',
      description:
        'Alephium is the next generation PoW Layer 1 with smart contracts. Built for speed, security, and sustainability. Start building or join the community today.'
    }}
    content={
      <Container>
        <CenteredContainer>
          <div className="contents">
            <h1>404</h1>
            <h2>Oops! Looks like this block got orphaned...</h2>

            <TextSnippetStyled bigText>
              Go back <Link to="/">home</Link> before this fork gets any weirder!
            </TextSnippetStyled>
          </div>
        </CenteredContainer>
      </Container>
    }
  />
)

export default NotFoundPage

const TextSnippetStyled = styled(TextSnippet)`
  color: ${({ theme }) => theme.textTertiary};

  a {
    color: ${({ theme }) => theme.textPrimary};
    text-decoration: none;
  }
`

const Container = styled(PageSectionContainer)`
  height: 70vh;
`

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`
