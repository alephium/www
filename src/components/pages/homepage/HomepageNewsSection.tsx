import { colord } from 'colord'
import styled, { useTheme } from 'styled-components'

import { deviceBreakPoints } from '../../../styles/global-style'
import Badge from '../../Badge'
import Button from '../../Button'
import TextElement from '../../customPageComponents/TextElement'
import PageSectionContainer from '../../PageSectionContainer'

const HomepageNewsSection = () => {
  const theme = useTheme()

  return (
    <PageSectionContainer>
      <NewsCard>
        <NewsCardContent>
          <Badge color="palette4" style={{ marginBottom: 10 }}>
            BREAKING NEWS 🔥
          </Badge>
          <TextElement isBodySmall noHeadingsMargins>
            <h4 style={{ color: theme.palette4 }}>Danube Upgrade</h4>
            <p>
              A major milestone towards true Web3. <strong>Going live soon.</strong>
            </p>
          </TextElement>
        </NewsCardContent>
        <ButtonStyled squared url="https://x.com/alephium/status/1920780688313233634">
          Learn more about Danube
        </ButtonStyled>
      </NewsCard>
    </PageSectionContainer>
  )
}

export default HomepageNewsSection

const NewsCard = styled.div<{ border?: boolean }>`
  display: flex;
  border: 2px solid ${({ theme }) => colord(theme.palette4).alpha(0.4).toRgbString()};
  background: linear-gradient(
    to right,
    ${({ theme }) => colord(theme.palette4).alpha(0.15).toRgbString()},
    ${({ theme }) => colord(theme.palette4).alpha(0.05).toRgbString()}
  );
  border-radius: var(--radius-large);
  padding: var(--spacing-3);
  padding-right: var(--spacing-8);
  border-radius: var(--radius);
  margin-top: var(--spacing-4);

  p {
    margin-bottom: 0;
  }

  @media ${deviceBreakPoints.mobile} {
    flex-direction: column;
  }
`

const NewsCardContent = styled.div`
  flex-direction: column;
  flex: 1;
`

const ButtonStyled = styled(Button)`
  align-self: center;

  @media ${deviceBreakPoints.mobile} {
    align-self: flex-start;
    margin-top: var(--spacing-3);
  }
`
