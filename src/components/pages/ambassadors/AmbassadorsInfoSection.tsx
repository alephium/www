import { colord } from 'colord'
import styled from 'styled-components'
import ArrowedLink from '../../ArrowedLink'
import { deviceBreakPoints } from '../../../styles/global-style'
import AI from './AnimatedIllustrations/AI'
import DeFi from './AnimatedIllustrations/DeFi'
import Gaming from './AnimatedIllustrations/Gaming'
import Interoperability from './AnimatedIllustrations/Interoperability'
import NFTs from './AnimatedIllustrations/NFTs'
import Tooling from './AnimatedIllustrations/Tooling'
import AmbassadorsSectionContainer from './AmbassadorsSectionContainer'
import { H3, Paragraph } from './Texts'
import TrackCard from './TrackCard'
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
            selected parties. Once accepted, Alephians will be onboarded into the program. We will re-open the program
            again once we have some feedback and more capacity. If you haven’t been selected this time around, don’t
            worry! Rewards will be paid for once off contributions or extra tasks. All you have to do is to let us know
            about your contribution through this form!
          </Paragraph>
        </Column>
        <Column>
          <H3 divider>Who are we looking for?</H3>
          <Paragraph>
            Community Builder - Be our Community Builder in your location. Set up meets, build Alephium’s profile, and
            share ideas on how you can get Alephium to your community. Moderators - Help to keep the conversations
            going. Alephium needs people in its channels working with and interacting with users to ensure knowledge
            sharing and a good experience for all. Content Creators - Are you a good writer, a videographer, podcast
            host or know of any other medium to spread the Alephium’s story? This is for you. Translators - Alephium’s
            content and applications should be accessible and inclusive.
          </Paragraph>
        </Column>
      </Columns>
    </AmbassadorsSectionContainer>
  </div>
)

export default AmbassadorsInfoSection
