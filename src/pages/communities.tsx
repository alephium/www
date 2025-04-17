import { graphql, PageProps, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageHeroSection from '../components/customPageComponents/SubpageImageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextCard from '../components/customPageComponents/TextCard'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'
import SimpleLink from '../components/SimpleLink'
import SocialMediaIcon from '../components/SocialMediaIcon'
import useSocials from '../hooks/useSocials'
import { getIconByName } from '../images/utils'

const communitiesQuery = graphql`
  query CommunitiesPage {
    heroImage: file(relativePath: { eq: "alephium-hackathon-lake.png" }) {
      ...HeroImage
    }
  }
`

const CustomPage = (props: PageProps) => {
  const { heroImage } = useStaticQuery<Queries.CommunitiesPageQuery>(communitiesQuery)
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
          <SubpageHeroSection backgroundImage={heroImage}>
            <h1>Online communities</h1>
            <hr />
            <p>
              We are lucky to have a very active community of builders, users & friends. Join the channels and groups
              and help us launch Alephium to the stars!
            </p>
          </SubpageHeroSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Official Channels</h2>
              <p>Core contributors maintain these with the help of fantastic community moderators:</p>
            </TextElement>

            <SubheaderContent>
              <Grid columns={4} gap="small">
                {socials.map((social) => (
                  <TextCard key={social.node.name} url={social.node.url ?? ''}>
                    <SocialMediaIconStyled
                      name={social.node.name ?? ''}
                      url={social.node.url ?? ''}
                      ImageComponent={getIconByName(social.node.name ?? '')}
                    />
                    <h4>{social.node.name}</h4>
                  </TextCard>
                ))}
              </Grid>
            </SubheaderContent>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Community Channels</h2>
              <p>
                Many of our communities run their own channels in a variety of languages. These local communities are
                unofficial.
              </p>
            </TextElement>

            <TextElement>
              <h3>Telegram Community Groups</h3>
              <ul>
                <li>
                  <SimpleLink url="https://t.me/Alephiumfr">Alephium Telegram France</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://t.me/alphgermanofficial">Alephium Telegram Germany</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://t.me/Alephium_pt">Alephium Telegram Portugal/Brazil</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://t.me/alephiumgroup_ru">Alephium Telegram Russia</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://t.me/minerosAlephium">Alephium Telegram Spain</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://t.me/alephiumCN">Alephium Telegram China</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://t.me/AlephiumTurkey">Alephium Telegram Turkey</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://t.me/AlephiumgroupNL">Alephium Telegram The Netherlands</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://t.me/alephiumvn">Alephium Telegram Vietnam</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://t.me/AlephiumID">Alephium Telegram Indonesia</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://t.me/alephiumPL">Alephium Telegram Poland</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://t.me/AlephiumGreece">Alephium Telegram Greece</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://t.me/AlephiumIndia">Alephium Telegram India</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://t.me/Alephium_it">Alephium Telegram Italy</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://t.me/AlephiumArabia">Alephium Telegram Arabic</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://t.me/AlephiumNigeria">Alephium Telegram Nigeria</SimpleLink>
                </li>
              </ul>
            </TextElement>

            <TextElement>
              <h3>Twitter/X Community Accounts</h3>
              <ul>
                <li>Alephium Twitter/X France - @Alephiumfr</li>
                <li>Alephium Twitter/X Germany - @Alephiumde</li>
                <li>Alephium Twitter/X Portugal/Brazil - @Alephium_pt</li>
                <li>Alephium Twitter/X Russia - @AlephiumRU</li>
                <li>Alephium Twitter/X China - @FanAlph</li>
                <li>Alephium Twitter/X Turkey - @AlphTurkey</li>
                <li>Alephium Twitter/X The Netherlands - @AlephiumNL</li>
                <li>Alephium Twitter/X Vietnam - @AlephiumVN</li>
                <li>Alephium Twitter/X Indonesia - @AlephiumID</li>
                <li>Alephium Twitter/X Poland - @AlephiumPoland</li>
                <li>Alephium Twitter/X Greece - @AlephiumGreece</li>
                <li>Alephium Twitter/X Italy - @Alephium_it</li>
                <li>Alephium Twitter/X Arabic - @AlephiumArabia</li>
                <li>Alephium Twitter/X Ukraine - @Alephiumua</li>
                <li>Alephium Twitter/X Africa - @alephiumafrique</li>
              </ul>
            </TextElement>

            <TextElement>
              <h3>Alephium Community Blogs</h3>
              <ul>
                <li>
                  <SimpleLink url="https://medium.com/alephiumfr">Alephium Blog France</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://medium.com/@alephiumde">Alephium Blog Germany</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://medium.com/@alephium-pt/">Alephium Blog Portugal/Brazil</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://alephiumvn.medium.com/">Alephium Blog Vietnam</SimpleLink>
                </li>
                <li>
                  <SimpleLink url="https://alephium.it/blog">Alephium Blog Italy</SimpleLink>
                </li>
              </ul>
            </TextElement>
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

const SocialMediaIconStyled = styled(SocialMediaIcon)`
  margin-bottom: 30px;
`
