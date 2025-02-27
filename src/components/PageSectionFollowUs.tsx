import { FC } from 'react'
import styled from 'styled-components'

import SectionTextHeader from './SectionTextHeader'
import PageSectionContainer from './PageSectionContainer'
import SocialMediaIcon from './SocialMediaIcon'

import Columns from './Columns/Columns'
import Column from './Columns/Column'
import { deviceBreakPoints } from '../styles/global-style'
import { getIconByName } from '../images/utils'

export interface PageSectionFollowUsContentType {
  title: string
  subtitle: string
  description: string
  socialMediaLinks: {
    name: string
    url: string
  }[]
}

interface FollowUsProps {
  className?: string
  content: PageSectionFollowUsContentType
}

const FollowUs: FC<FollowUsProps> = ({ className, content }) => (
  <section className={className}>
    <PageSectionContainer>
      <Columns>
        <Column>
          <SectionHeader title={content.title} subtitle={content.subtitle} bigSubtitle bigText>
            <p>{content.description}</p>
          </SectionHeader>
        </Column>
        <Column>
          <SocialMediaIconsList>
            {content.socialMediaLinks.map(({ name, url }) => (
              <SocialMediaIcon
                key={name}
                name={name}
                url={url}
                ImageComponent={getIconByName(name)}
                trackingName={`follow-us-section:${name}-link`}
                displayName={true}
              />
            ))}
          </SocialMediaIconsList>
        </Column>
      </Columns>
    </PageSectionContainer>
    <ScrollToTopButton role="button" onClick={handleScrollToTop}>
      ↑ Scroll to top
    </ScrollToTopButton>
  </section>
)

const handleScrollToTop = () => {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

export default styled(FollowUs)`
  position: relative;
  background-color: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => theme.textPrimary};
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.separator};
  padding-bottom: var(--spacing-12);

  * {
    text-align: left;
  }

  .text-content {
    display: flex;
    justify-content: flex-start;
  }
`

const SocialMediaIconsList = styled.div`
  display: flex;
  gap: var(--spacing-6);
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.separator};
  border-radius: 12px;
  padding: var(--spacing-4);
  width: 80%;
  margin: auto;
  margin-top: var(--spacing-12);
  background-color: ${({ theme }) => theme.bgTertiary};

  @media ${deviceBreakPoints.ipad} {
    margin-top: 0;
  }
`

const SectionHeader = styled(SectionTextHeader)`
  margin-top: var(--spacing-12);
`

const ScrollToTopButton = styled.a`
  position: absolute;
  right: 10vw;
  padding: 0 15px;
  bottom: -20px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.bgPrimary};
  color: ${({ theme }) => theme.textSecondary};
  border-radius: 9px;
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
  }
`
