import { PageProps } from 'gatsby'

import CommunityChannelCard from '../components/CommunityChannelCard'
import CommunityMosaic from '../components/CommunityMosaic'
import ClickableBox from '../components/customPageComponents/ClickableBox'
import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'
import SimpleLink from '../components/SimpleLink'
import SocialMediaIcon from '../components/SocialMediaIcon'
import { communityChannels } from '../content/communityChannels'
import useSocials from '../hooks/useSocials'
import { getIconByName } from '../images/utils'

const officialCommunities = communityChannels.filter((channel) => channel.official)
const unofficialCommunities = communityChannels.filter((channel) => !channel.official)

const CustomPage = (props: PageProps) => {
  const socials = useSocials()
  const discordUrl = socials.find((social) => social.node.name === 'Discord')?.node.url

  return (
    <Page
      {...props}
      seo={{
        title: 'Alephium Communities | Join the Global Movement',
        description:
          "From Discord to regional Telegram groups, Alephium's community is active and global. Find your space and help shape decentralized tech."
      }}
      content={
        <>
          <SubpageSection edgeGradient fullWidth border="bottom">
            <TextElement isCentered>
              <h1>
                Online
                <br />
                Communities
              </h1>
              <p>
                Join our bubbling community of <strong>builders, users, partners, and friends.</strong>
              </p>
            </TextElement>
          </SubpageSection>

          <SubpageSection>
            <TextElement>
              <h2>Official Channels</h2>
              <p>Core contributors maintain these with the help of fantastic community moderators:</p>
            </TextElement>

            <SubheaderContent>
              <Grid columns={3} gap="small">
                {socials.slice(0, 8).map((social) => (
                  <ClickableBox key={social.node.name} url={social.node.url ?? ''}>
                    <SocialMediaIcon
                      name={social.node.name ?? ''}
                      url={social.node.url ?? ''}
                      ImageComponent={getIconByName(social.node.name ?? '')}
                    />
                    <TextElement isSmall noMargin>
                      <h4>{social.node.name}</h4>
                    </TextElement>
                  </ClickableBox>
                ))}
              </Grid>
            </SubheaderContent>
          </SubpageSection>

          <CommunityMosaic />

          <SubpageSection>
            <TextElement>
              <h2>Community Channels</h2>
              <p>
                Alephium has vibrant local communities around the world, each running its own channels in its own
                language.
              </p>
              <p>
                Not on Telegram? These community channels are bridged and cross-posted to the{' '}
                <SimpleLink url={discordUrl} text="official Alephium Discord" />, so you can follow along there too.
              </p>
            </TextElement>

            <SubheaderContent>
              <TextElement>
                <h3>Official communities</h3>
                <p>Regional communities officially recognized and supported by Alephium.</p>
              </TextElement>

              <Grid columns={3} gap="small">
                {officialCommunities.map((channel) => (
                  <CommunityChannelCard key={channel.name} channel={channel} />
                ))}
              </Grid>
            </SubheaderContent>

            <SubheaderContent>
              <TextElement>
                <h3>Unofficial communities</h3>
                <p>Independent, community-run channels. These are not officially recognized by Alephium.</p>
              </TextElement>

              <Grid columns={3} gap="small">
                {unofficialCommunities.map((channel) => (
                  <CommunityChannelCard key={channel.name} channel={channel} />
                ))}
              </Grid>
            </SubheaderContent>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement isCentered>
              <h2>Want to be featured?</h2>
              <p>
                If you run an Alephium community account in your language and want to be featured here, send a message
                to admins in official channels and we&apos;ll add you in a flash!
              </p>
            </TextElement>
          </SubpageSection>
        </>
      }
    />
  )
}

export default CustomPage
