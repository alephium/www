import styled from 'styled-components'

import AmbassadorsSectionContainer from './AmbassadorsSectionContainer'
import { H3, Paragraph } from './Texts'

import Columns from '../../Columns/Columns'
import Column from '../../Columns/Column'

export type AmbassadorsInfoSectionContentType = {
  participantsInfo: {
    title: string
    description: string
    link: {
      text: string
      url: string
    }
  }
  prerequisites: {
    title: string
    description: string
    skills: string[]
    link: {
      text: string
      url: string
    }
  }
  schedule: {
    title: string
    description: string
    events: {
      title: string
      description: string
    }[]
  }
  ideasAndTracks: {
    title: string
    subtitle: string
    tracks: {
      title: string
      description: string
    }[]
  }
  prizes: {
    title: string
    description: string
    prizeList: {
      title: string
      description: string
    }[]
  }
}

interface AmbassadorsInfoSectionProps {
  content: AmbassadorsInfoSectionContentType
  className?: string
}

const AmbassadorsInfoSection = ({ content, className }: AmbassadorsInfoSectionProps) => (
  <div className={className}>
    <AmbassadorsSectionContainer>
      <Columns gap={'50px'}>
        <Column>
          <H3 divider>Number of participants</H3>
          <Paragraph>
            The 2023 program will onboard a maximum of 16 Alephians and will be divided into 2 cohorts. To be eligible
            to participate in the program, all Alephium enthusiasts will need to submit their applications and be
            willing to commit for at least 6 months. Alephium will evaluate the submissions and reach out to the
            selected parties.
          </Paragraph>
          <Paragraph>
            Once accepted, Alephians will be onboarded into the program. We will re-open the program again once we have
            some feedback and more capacity. If you haven’t been selected this time around, don’t worry! Rewards will be
            paid for once off contributions or extra tasks. All you have to do is to let us know about your contribution
            through this form!
          </Paragraph>
        </Column>
        <Column>
          <H3 divider>Who are we looking for?</H3>
          <List>
            <ListItem>
              <ItemTitle>Community Builder</ItemTitle> -{' '}
              <ItemContent>
                Be our Community Builder in your location. Set up meets, build Alephium’s profile, and share ideas on
                how you can get Alephium to your community.
              </ItemContent>
            </ListItem>
            <ListItem>
              <ItemTitle>Moderators</ItemTitle> -{' '}
              <ItemContent>
                Help to keep the conversations going. Alephium needs people in its channels working with and interacting
                with users to ensure knowledge sharing and a good experience for all.
              </ItemContent>
            </ListItem>
            <ListItem>
              <ItemTitle>Content Creators</ItemTitle> -{' '}
              <ItemContent>
                Are you a good writer, a videographer, podcast host or know of any other medium to spread the Alephium’s
                story? This is for you.
              </ItemContent>
            </ListItem>
            <ListItem>
              <ItemTitle>Translators</ItemTitle> -{' '}
              <ItemContent>Alephium’s content and applications should be accessible and inclusive.</ItemContent>
            </ListItem>
          </List>
        </Column>
      </Columns>
    </AmbassadorsSectionContainer>
    <AmbassadorsSectionContainer>
      <StyledTiersAndPerksColumns>
        <Column>
          <Paragraph>
            The Alephian program will be a three-tier based program. Each tier will have specific monthly targets
            attached to it and meeting these targets is a requirement for getting the reward. When applying for the
            program make sure to consider this information in combination with the time you are willing to dedicate to
            the project.
          </Paragraph>
          <List>
            <ListItem>
              <ItemTitle>Rewards</ItemTitle>
              <ItemContent>- Each tier comes with remuneration and requires formal agreements.</ItemContent>
            </ListItem>
            <ListItem>
              <ItemTitle>Swag</ItemTitle>
              <ItemContent>
                - Vouchers to our Alephium online store will allow you to represent the project in style, or treat your
                local community.
              </ItemContent>
            </ListItem>
            <ListItem>
              <ItemTitle>In house collaboration</ItemTitle>
              <ItemContent>- A direct line of communication to the Alephium core contributors!</ItemContent>
            </ListItem>
          </List>
        </Column>
        <Column>
          <H3>Tiers</H3>
          <Tiers>
            <Tier>
              <TierTitle>🐥 Tier 1 - Alephians Begin</TierTitle>
              <TierContent>Community Animators, Translations, Meet-up coordinator</TierContent>
            </Tier>
            <Tier>
              <TierTitle>🚀 Tier 2 - Alephians Go</TierTitle>
              <TierContent>Community Moderators, Content Creator, Local Events organizers</TierContent>
            </Tier>
            <Tier>
              <TierTitle>🔥 Tier 3 - Alephians Power</TierTitle>
              <TierContent>Community Creator, Super Content Creator, Alephium Influencer</TierContent>
            </Tier>
          </Tiers>
        </Column>
      </StyledTiersAndPerksColumns>
    </AmbassadorsSectionContainer>
  </div>
)

export default AmbassadorsInfoSection

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ListItem = styled.div``

const ItemTitle = styled.b``

const ItemContent = styled.span`
  opacity: 0.8;
`

const StyledTiersAndPerksColumns = styled(Columns)`
  border: 1px solid ${({ theme }) => theme.borderPrimary};

  ${Column} {
    padding: var(--spacing-6);

    &:first-child {
      background-color: ${({ theme }) => theme.bgSecondary};
    }
  }
`

const Tiers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Tier = styled.div`
  padding: var(--spacing-4);

  &:nth-child(1) {
    background-color: #d5e9f3;
  }

  &:nth-child(2) {
    background-color: #fbf2c8;
  }

  &:nth-child(3) {
    background-color: #f6d3d3;
  }
`

const TierTitle = styled.div`
  font-weight: 500;
  margin-bottom: var(--spacing-2);
`

const TierContent = styled.div``
