import { PageProps } from 'gatsby'
import styled from 'styled-components'

import CommunityMosaic from '../components/CommunityMosaic'
import ClickableBox from '../components/customPageComponents/ClickableBox'
import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'
import SocialMediaIcon from '../components/SocialMediaIcon'
import useSocials from '../hooks/useSocials'
import { getIconByName } from '../images/utils'

const CustomPage = (props: PageProps) => {
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
          <SubpageSection edgeGradient fullWidth border="bottom">
            <TextElement isCentered>
              <h1>
                Online
                <br />
                Communities
              </h1>
              <p>
                Join our bubbling community of community of <strong>builders, users, partners and friends.</strong>
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
                      Alephium Telegram <strong>French</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/alphgermanofficial">
                  <Emoji>🥨</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>German</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/Alephium_pt">
                  <Emoji>🐟</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Portuguese/Brazilian</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/alephiumgroup_ru">
                  <Emoji>🥃</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Russian</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/minerosAlephium">
                  <Emoji>🍷</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Spanish</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/alephiumCN">
                  <Emoji>🍵</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Chinese</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/AlephiumTurkey">
                  <Emoji>🍢</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Turkish</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/AlephiumgroupNL">
                  <Emoji>🍟</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Dutch</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/alephiumvn">
                  <Emoji>🍜</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Vietnamese</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/AlephiumID">
                  <Emoji>🥥</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Indonesian</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/alephiumPL">
                  <Emoji>🥩</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Polish</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/AlephiumGreece">
                  <Emoji>🥗</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Greek</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/AlephiumIndia">
                  <Emoji>🍛</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Indian</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://t.me/Alephium_it">
                  <Emoji>🍕</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Telegram <strong>Italian</strong>
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
                      Alephium Telegram <strong>Nigerian</strong>
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
                <ClickableBox url="https://x.com/Alephiumfr">
                  <Emoji>🥖</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>French</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/Alephiumde">
                  <Emoji>🥨</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>German</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/Alephium_pt">
                  <Emoji>🐟</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Portuguese/Brazilian</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/AlephiumRU">
                  <Emoji>🥃</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Russian</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/ALPH_CNintern">
                  <Emoji>🍵</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Chinese</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/AlphTurkey">
                  <Emoji>🍢</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Turkish</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/AlephiumNL">
                  <Emoji>🍟</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Dutch</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/AlephiumVN">
                  <Emoji>🍜</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Vietnamese</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/AlephiumID">
                  <Emoji>🥥</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Indonesian</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/AlephiumPoland">
                  <Emoji>🥩</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Polish</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/AlephiumGreece">
                  <Emoji>🥗</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Greek</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/Alephium_it">
                  <Emoji>🍕</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Italian</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/AlephiumArabia">
                  <Emoji>🥙</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Arabic</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/Alephiumua">
                  <Emoji>🥟</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Twitter/X <strong>Ukrainian</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/alephiumafrique">
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
                      Alephium Blog <strong>French</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://medium.com/@alephiumde">
                  <Emoji>🥨</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Blog <strong>German</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://medium.com/@alephium-pt/">
                  <Emoji>🐟</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Blog <strong>Portuguese/Brazilian</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://alephiumvn.medium.com/">
                  <Emoji>🍜</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Blog <strong>Vietnamese</strong>
                    </p>
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://alephium.it/blog">
                  <Emoji>🍕</Emoji>
                  <TextElement isSmall noMargin>
                    <p>
                      Alephium Blog <strong>Italian</strong>
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
                to admins in official channels and we'll add you in a flash!
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
