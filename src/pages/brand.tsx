import { graphql, PageProps, useStaticQuery } from 'gatsby'

import Button from '../components/Button'
import CardImage from '../components/customPageComponents/CardImage'
import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import Placeholder from '../components/customPageComponents/Placeholder'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageHeroSection from '../components/customPageComponents/SubpageImageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextCard from '../components/customPageComponents/TextCard'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'

const brandQuery = graphql`
  query BrandPage {
    heroImage: file(relativePath: { eq: "alephium-hackathon-lake.png" }) {
      ...HeroImage
    }
  }
`

const CustomPage = (props: PageProps) => {
  const { heroImage } = useStaticQuery<Queries.BrandPageQuery>(brandQuery)

  return (
    <Page
      {...props}
      seo={{
        title: 'Alephium Brand Assets | Logos, Fonts, Colors & More',
        description:
          'Access Alephium’s official brand resources including logos, colors, fonts, and guidelines. Start shaping the future of Web3 with us.'
      }}
      content={
        <>
          <SubpageHeroSection backgroundImage={heroImage}>
            <h1>Shaping the Future, One Block at a Time</h1>
            <hr />
            <p>
              At Alephium, we blend innovative technology with a human-centric approach to create a blockchain
              experience that’s both powerful and accessible. Dive into our official brand hub to discover resources
              that reflect our vision including logos, fonts, color palettes, templates, and more. Let’s shape the
              future of Web3, together.
            </p>
            <Button url="../assets/brand.zip">Download assets</Button>
          </SubpageHeroSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Alephium Logo</h2>
              <p>
                Get the Alephium logo for your next publication, event, or any other creation. Please do not stretch,
                recolor, edit, or alter the logo in any way
              </p>
            </TextElement>

            <SubheaderContent>
              <Grid columns={3}>
                <TextCard>
                  <CardImage src="https://place-hold.it/100" rounded />
                  <h3>SVG</h3>
                  <p>
                    A flexible format that stays sharp no matter how much you zoom in. Perfect for logos, icons, and
                    graphics on websites.
                  </p>
                  <Button url="/">Download SVG</Button>
                </TextCard>
                <TextCard>
                  <CardImage src="https://place-hold.it/100" rounded />
                  <h3>PNG</h3>
                  <p>
                    High-quality image format that supports transparency. Ideal for photos, logos, and graphics with
                    clean edges.
                  </p>
                  <Button url="/">Download PNG</Button>
                </TextCard>
                <TextCard>
                  <CardImage src="https://place-hold.it/100" rounded />
                  <h3>MP4</h3>
                  <p>Alephium animations in a widely used format. Perfect for streaming and sharing online.</p>
                  <Button url="/">Download MP4</Button>
                </TextCard>
              </Grid>
            </SubheaderContent>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Spacing</h2>
              <p>
                Please do not crowd the logo. When placing elements nearby, use the letter ‘u’ in the wordmark as a
                guide for spacing. //TODO: I have stolen this from another project, please add whatever is the best
                practice from our side
              </p>
            </TextElement>

            <Placeholder width="100%" height="400px" />
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Partnerships</h2>
              <p>
                When positioning dual logos in brand partnerships, apply the same principles as for clear space. Use a
                1pt line, extending from the top to the bottom of the symbol's height, as a divider between the two
                logos.
              </p>
            </TextElement>

            <Placeholder width="100%" height="400px" />
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Colors</h2>
            </TextElement>

            <SubheaderContent>
              <Grid columns={4}>
                <TextCard>
                  <CardImage src="https://place-hold.it/100/1200da/fff" rounded />
                  <h3>Purple</h3>
                  <p>#1200da</p>
                </TextCard>
                <TextCard>
                  <CardImage src="https://place-hold.it/100/ff5d51/fff" rounded />
                  <h3>Orange red</h3>
                  <p>#ff5d51</p>
                </TextCard>
                <TextCard>
                  <CardImage src="https://place-hold.it/100/000000/fff" rounded />
                  <h3>Black</h3>
                  <p>#000000</p>
                </TextCard>
                <TextCard>
                  <CardImage src="https://place-hold.it/100/ffffff" rounded />
                  <h3>White</h3>
                  <p>#ffffff</p>
                </TextCard>
                <TextCard>
                  <CardImage src="https://place-hold.it/100/D8D8D8" rounded />
                  <h3>Mountain 1st</h3>
                  <p>#D8D8D8</p>
                </TextCard>
                <TextCard>
                  <CardImage src="https://place-hold.it/100/E5E5E5" rounded />
                  <h3>Mountain 2nd</h3>
                  <p>#E5E5E5</p>
                </TextCard>
                <TextCard>
                  <CardImage src="https://place-hold.it/100/ECECEC" rounded />
                  <h3>Mountain 3rd</h3>
                  <p>#ECECEC</p>
                </TextCard>
              </Grid>
            </SubheaderContent>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Typography</h2>
              <p>
                We use the Inter typeface family in all our communications. Use Inter Regular and Inter Bold for all
                Alephium communications.
              </p>
              <Button url="https://rsms.me/inter">Download Inter</Button>
            </TextElement>
          </SubpageSection>
        </>
      }
    />
  )
}

export default CustomPage
