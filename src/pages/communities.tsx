import { graphql, PageProps, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import CommunityMosaic from '../components/CommunityMosaic'
import ClickableBox from '../components/customPageComponents/ClickableBox'
import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import SubpageVideoHeroSection from '../components/customPageComponents/SubpageVideoHeroSection'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'
import SocialMediaIcon from '../components/SocialMediaIcon'
import useSocials from '../hooks/useSocials'
import { getIconByName } from '../images/utils'

const communitiesQuery = graphql`
  query CommunitiesPage {
    heroImage: file(relativePath: { eq: "geneva.png" }) {
      ...HeroImage
    }
    heroVideo: file(relativePath: { eq: "geneva-scrub.mp4" }) {
      publicURL
    }
  }
`

const CustomPage = (props: PageProps) => {
  const { heroImage, heroVideo } = useStaticQuery<Queries.CommunitiesPageQuery>(communitiesQuery)
  const socials = useSocials()

  return (
    <Page
      {...props}
      seo={{
        title: 'Alephium Communities | Join the Global Movement',
        description:
          'From Discord to regional Telegram groups, Alephium’s community is active and global. Find your space and help shape decentralized tech.'
      }}
      content={
        <>
          <SubpageVideoHeroSection poster={heroImage} video={heroVideo} minHeight="130px">
            <h1>Online communities</h1>
            <p>
              <strong>
                We’re proud to have a thriving community of builders, users, and friends. Join the movement.
              </strong>
            </p>
          </SubpageVideoHeroSection>

          <SubpageSection>
            <TextElement>
              <h2>Official Channels</h2>
              <p>Core contributors maintain these with the help of fantastic community moderators:</p>
            </TextElement>

            <SubheaderContent>
              <Grid columns={4} gap="small">
                {socials.map((social) => (
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
              <Grid columns={3} gap="small"></Grid>
            </SubheaderContent>
          </SubpageSection>

          <CommunityMosaic />

          <SubpageSection>
            <TextElement>
              <h2>Community Channels</h2>
              <p>
                Many of our communities run their own channels in a variety of languages. These local communities are
                unofficial.
              </p>
            </TextElement>

            <SubheaderContent>
              <TextElement>
                <h3>Telegram Community Groups</h3>
              </TextElement>

              <Grid columns={3} gap="small">
                <ClickableBox url="https://t.me/Alephiumfr">
                  <Emoji>🥖</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>France</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/alphgermanofficial">
                  <Emoji>🥨</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Germany</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/Alephium_pt">
                  <Emoji>🐟</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Portugal/Brazil</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/alephiumgroup_ru">
                  <Emoji>🥃</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Russia</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/minerosAlephium">
                  <Emoji>🍷</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Spain</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/alephiumCN">
                  <Emoji>🍵</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>China</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/AlephiumTurkey">
                  <Emoji>🍢</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Turkey</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/AlephiumgroupNL">
                  <Emoji>🍟</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>The Netherlands</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/alephiumvn">
                  <Emoji>🍜</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Vietnam</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/AlephiumID">
                  <Emoji>🥥</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Indonesia</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/alephiumPL">
                  <Emoji>🥩</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Poland</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/AlephiumGreece">
                  <Emoji>🥗</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Greece</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/AlephiumIndia">
                  <Emoji>🍛</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>India</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/Alephium_it">
                  <Emoji>🍕</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Italy</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/AlephiumArabia">
                  <Emoji>🥙</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Arabic</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/AlephiumNigeria">
                  <Emoji>🍲</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Nigeria</strong>
                    </p>
                  </TextElement>
                </ClickableBox>
              </Grid>
            </SubheaderContent>

            <SubheaderContent>
              <TextElement>
                <h3>Twitter/X Community Accounts</h3>
              </TextElement>

              <Grid columns={3} gap="small">
                <ClickableBox url="https://twitter.com/Alephiumfr">
                  <Emoji>🥖</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>France</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://twitter.com/Alephiumde">
                  <Emoji>🥨</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Germany</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://twitter.com/Alephium_pt">
                  <Emoji>🐟</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Portugal/Brazil</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://twitter.com/AlephiumRU">
                  <Emoji>🥃</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Russia</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://twitter.com/FanAlph">
                  <Emoji>🍵</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>China</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://twitter.com/AlphTurkey">
                  <Emoji>🍢</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Turkey</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://twitter.com/AlephiumNL">
                  <Emoji>🍟</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Netherlands</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://twitter.com/AlephiumVN">
                  <Emoji>🍜</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Vietnam</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://twitter.com/AlephiumID">
                  <Emoji>🥥</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Indonesia</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://twitter.com/AlephiumPoland">
                  <Emoji>🥩</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Poland</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://twitter.com/AlephiumGreece">
                  <Emoji>🥗</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Greece</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://twitter.com/Alephium_it">
                  <Emoji>🍕</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Italy</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://twitter.com/AlephiumArabia">
                  <Emoji>🥙</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Arabic</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://twitter.com/Alephiumua">
                  <Emoji>🥟</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Ukraine</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://twitter.com/alephiumafrique">
                  <Emoji>🌍</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Africa</strong>
                    </p>
                  </TextElement>
                </ClickableBox>
              </Grid>
            </SubheaderContent>

            <SubheaderContent>
              <TextElement>
                <h3>Alephium Community Blogs</h3>
              </TextElement>

              <Grid columns={3} gap="small">
                <ClickableBox url="https://medium.com/alephiumfr">
                  <Emoji>🥖</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Blog <strong>France</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://medium.com/@alephiumde">
                  <Emoji>🥨</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Blog <strong>Germany</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://medium.com/@alephium-pt/">
                  <Emoji>🐟</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Blog <strong>Portugal/Brazil</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://alephiumvn.medium.com/">
                  <Emoji>🍜</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Blog <strong>Vietnam</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://alephium.it/blog">
                  <Emoji>🍕</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Blog <strong>Italy</strong>
                    </p>
                  </TextElement>
                </ClickableBox>
              </Grid>
            </SubheaderContent>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement isCentered>
              <h2>Want to be featured?</h2>
              <p>
                If you run an Alephium community account in your language and want to be featured here, send a message
                to admins in official channels and we’ll add you in a flash!
              </p>
            </TextElement>
          </SubpageSection>
        </>
      }
    />
  )
}

export default CustomPage

const Emoji = styled.div`
  font-size: 50px;
  width: 50px;
  height: 50px;
  border-radius: var(--radius-small);
`
