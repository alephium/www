import { graphql, PageProps, useStaticQuery } from 'gatsby'

import Button from '../components/Button'
import ClickableBox from '../components/customPageComponents/ClickableBox'
import Grid from '../components/customPageComponents/Grid'
import ImageIcon from '../components/customPageComponents/ImageIcon'
import Page from '../components/customPageComponents/Page'
import SideBySide from '../components/customPageComponents/SideBySide'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import GatsbyImageWrapper from '../components/GatsbyImageWrapper'
import NetworkUpgradesCardScroller from '../components/NetworkUpgradesCardScroller'
import SectionDivider from '../components/SectionDivider'
import SimpleLink from '../components/SimpleLink'

const aboutQuery = graphql`
  query AboutPage {
    heroImage: file(relativePath: { eq: "alephium-hackathon-lake.png" }) {
      ...HeroImage
    }
    teamPhotos: allFile(filter: { relativeDirectory: { eq: "team" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(quality: 100)
        }
      }
    }
    ecosystemImage: file(relativePath: { eq: "bay-tree-2.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 80)
      }
    }
  }
`

const CustomPage = (props: PageProps) => {
  const { teamPhotos, ecosystemImage } = useStaticQuery<Queries.AboutPageQuery>(aboutQuery)
  const ecosystemImageData = ecosystemImage?.childImageSharp?.gatsbyImageData || undefined
  const teamPhotosData = teamPhotos.nodes.map(({ name, childImageSharp }) => ({
    name,
    image: childImageSharp?.gatsbyImageData
  }))

  return (
    <Page
      {...props}
      seo={{
        title: 'About Alephium | Sharded Layer 1 Blockchain with PoLW & Smart Contracts',
        description:
          'Alephium is a scalable, energy-efficient Layer 1 blockchain combining sharding, smart contracts, and Proof-of-Less-Work (PoLW) to deliver high throughput and sustainability. Explore our mission, core contributors, and ecosystem.'
      }}
      content={
        <>
          <SectionDivider double />
          <SubpageSection edgeGradient gradientPosition="top-left">
            <TextElement noHeadingsMargins>
              <h3>About</h3>
              <h1>
                Building the Web3
                <br />
                we were promised
                <hr />
              </h1>
              <p>
                <strong>
                  The Web3 we were promised wasn’t just about decentralization, it was about ease. Systems that empower
                  people without confusion, allow developers to build freely, and make users feel confident, not
                  cautious.
                </strong>
              </p>
            </TextElement>
          </SubpageSection>

          <SubpageSection noBottomPadding>
            <TextElement>
              <h2>One upgrade at a time.</h2>
              <p>
                From Leman to Rhone to Danube, <strong>this has always been the plan</strong>. Now we&apos;re entering
                the chapter <strong>where it all comes together.</strong>
              </p>
            </TextElement>
            <NetworkUpgradesCardScroller />
          </SubpageSection>

          <SubpageSection noBottomPadding>
            <TextElement>
              <h2>Our convictions</h2>
              <p>
                <strong>They told us Web3 would be accessible. Fast. Intuitive. Secure.</strong> A future where
                decentralization didn’t mean compromise, where user experience matched the ideals of sovereignty and
                interoperability.{' '}
                <strong>
                  But for years, reality lagged behind the vision: clunky UX, complex wallets, and slow networks were
                  the standard.
                </strong>{' '}
                <br />
                <strong>At Alephium, we’re determined to close that gap.</strong> With Danube, we’re not just upgrading
                the network; we’re making the most ambitious leap in our history.{' '}
                <strong>Danube is the moment where everything clicks</strong>, from wallet simplicity to developer
                power, block speed to onboarding. <br />
                It doesn’t just enhance our protocol, it redefines what’s possible for a UTXO-based smart contract
                chain. Alephium was born from the belief that decentralization, scalability, and energy efficiency can
                coexist without compromise. We combine Bitcoin’s resilience with cutting-edge innovations like BlockFlow
                sharding, Proof-of-Less-Work, and a stateful UTXO model,{' '}
                <strong>delivering high throughput, energy efficiency, and secure smart contracts.</strong> We’re
                committed to building infrastructure that empowers developers and users alike, supporting real-world
                decentralized applications with ease, security, and confidence.{' '}
                <strong>Alephium proves that scaling decentralization doesn’t mean sacrificing it.</strong>
              </p>
            </TextElement>
          </SubpageSection>

          <SubpageSection>
            <TextElement>
              <h2>Core Contributors</h2>
              <p>
                Alephium is a community-first blockchain, shaped not by a single team, but by a growing network of
                users, developers, miners, partners and friends.
              </p>
            </TextElement>

            <SubheaderContent>
              <Grid columns={2} gap="small">
                <ClickableBox url="https://x.com/wachmc">
                  <ImageIcon
                    image={teamPhotosData.find(({ name }) => name === 'cheng')?.image}
                    alt="Cheng Wang"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>
                      <strong>Cheng Wang</strong> - Founder & Core Developer
                    </p>
                    {/* <p>
                      Founder and chief architect, Cheng Wang, brings academic depth and engineering clarity to
                      Alephium. His research in number theory and distributed algorithms; two separate Ph.D. tracks; led
                      directly to Alephium's core innovation: BlockFlow, a sharding algorithm designed to improve
                      scalability without compromising decentralization or security. Cheng's involvement spans the
                      protocol's full-node architecture, virtual machine, smart contract design and implementation, and
                      consensus mechanics.
                    </p> */}
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/hongchao">
                  <ImageIcon
                    image={teamPhotosData.find(({ name }) => name === 'h0ngcha0')?.image}
                    alt="Hongchao Liu"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>
                      <strong>Hongchao Liu</strong> - Core Developer
                    </p>
                    {/* <p>
                      A core developer based in Sweden, and also known in the community as h0ngcha0, Hongchao works on
                      Alephium's protocol layer and smart contract implementation. His academic background spans both
                      Southeast University in China and Chalmers University of Technology in Sweden. His interest in
                      Bitcoin's foundational ideas led him to Alephium, where he now helps build out the system's
                      low-level architecture. He is especially focused on improving scalability while staying aligned
                      with Bitcoin's minimalist tech ethos
                    </p> */}
                  </TextElement>
                </ClickableBox>

                <ClickableBox>
                  <ImageIcon
                    image={teamPhotosData.find(({ name }) => name === 'muchen')?.image}
                    alt="Muchen"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>
                      <strong>Muchen</strong> - Protocol Engineer
                    </p>
                    {/* <p>
                      Based in Hefei, China, Muchen studied Communication Engineering at Anhui University before diving
                      into crypto in 2017. A self-taught engineer with a sharp eye for code, he discovered Alephium
                      through its whitepaper and was drawn to its BlockFlow sharding algorithm, which he considers one
                      of the best in the space. At Alephium, he focuses on bridge development and core infrastructure,
                      always with an eye on how to make the platform more welcoming for developers.
                    </p> */}
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://www.linkedin.com/in/thomas-droxler-06010481/">
                  <ImageIcon
                    image={teamPhotosData.find(({ name }) => name === 'thomas')?.image}
                    alt="Thomas Droxler"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>
                      <strong>Thomas Droxler</strong> - Back-End Core Developer
                    </p>
                    {/* <p>
                      Thomas is a software engineer with a background in computer science from EPFL. He was among the
                      first to join Alephium. Initially involved in nearly every part of the codebase, he later focused
                      on the node-wallet, the backend for the explorer, and the APIs that connect users and developers
                      to the blockchain. His background includes work in autonomous systems, and he remains one of the
                      most versatile core contributors.
                    </p> */}
                  </TextElement>
                </ClickableBox>

                <ClickableBox>
                  <ImageIcon
                    image={teamPhotosData.find(({ name }) => name === 'simer')?.image}
                    alt="Simer Plaha"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>
                      <strong>Simer Plaha</strong> - Core DB Developer
                    </p>
                    {/* <p>
                      Simer, based in Sydney, Australia, holds a Bachelor's in IT with a major in Software Engineering
                      from Griffith University. He first encountered Bitcoin in 2015 through a TechCrunch article, but
                      his deeper dive into crypto came later. A proponent of open-source software, Simer was drawn to
                      Alephium after Cheng started a discussion on GitHub. At Alephium, he focuses on database-related
                      development, ensuring high performance and scalability through clean, testable code.
                    </p> */}
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://www.linkedin.com/in/yuanying-l-8bb20b121/">
                  <ImageIcon
                    image={teamPhotosData.find(({ name }) => name === 'yy')?.image}
                    alt="Yuanying Li"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>
                      <strong>Yuanying Li</strong> - Junior Core Developer & Ecosystem
                    </p>
                    {/* <p>
                      Yuanying Wing is a junior core developer at Alephium, where she focuses on improving the developer
                      experience. With her background in hackathons, she brings a mix of creativity and a clear
                      understanding of what developers need to get started effectively. At Alephium, Yuanying works on
                      building tools and refining processes that make it easier for developers to onboard, engage with
                      the community, and access programs like grants and bounties. Her work helps simplify workflows,
                      ensuring that Alephium remains an accessible and practical platform for developers.
                    </p> */}
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/mikalph">
                  <ImageIcon
                    image={teamPhotosData.find(({ name }) => name === 'mika')?.image}
                    alt="Mikaël Vaivre"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>
                      <strong>Mikaël Vaivre</strong> - Product & Front-End Core Developer
                    </p>
                    {/* <p>
                      Mikaël is the creative force behind Alephium's user experience and front-end development. He
                      oversees design and product growth across the ecosystem. Whether it's the desktop wallet or the
                      explorer UI, we trust Mikaël delivers top-notch design for all things in our network. Mikaël is at
                      his core an environmental engineer, and he brings a systems-thinking approach to interface design
                      – one that makes Alephium's complexity feel elegant and approachable.
                    </p> */}
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/_nop33">
                  <ImageIcon
                    image={teamPhotosData.find(({ name }) => name === 'ilias')?.image}
                    alt="Ilias Trichopoulos"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>
                      <strong>Ilias Trichopoulos</strong> - Front-End Core Developer
                    </p>
                    {/* <p>
                      Known in the Alephium community as nop33, Ilias brings over a decade of experience in front-end
                      architecture and user interface design. With a background in computer science, his path has taken
                      him from Greece to Switzerland, where he worked at CERN before joining Alephium in 2021. At
                      Alephium, Ilias works closely with Mikaël Vaivre on the features and user experience of key
                      applications like the wallets and the explorer. His focus is clear: building intuitive interfaces
                      that make complex blockchain technology feel simple and accessible.
                    </p> */}
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/MaudBannwart">
                  <ImageIcon
                    image={teamPhotosData.find(({ name }) => name === 'maud')?.image}
                    alt="Maud Bannwart"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>
                      <strong>Maud Bannwart</strong> - Operations
                    </p>
                    {/* <p>
                      Maud Bannwart is the not-so quiet engine behind Alephium's momentum. With a scientific background
                      and a career that began at one of Switzerland's most promising tech startups, she quickly found
                      herself at the intersection of innovation and infrastructure. It was there she first met several
                      of Alephium's future core contributors. This connection eventually brought her into the world of
                      blockchain. Before joining Alephium, she gained hands-on crypto experience at a pioneering Swiss
                      exchange. Today, she orchestrates the moving parts of a growing ecosystem: overseeing operations,
                      aligning timelines, managing legal frameworks, and supporting the community. Maud ensures that
                      builders can build, marketers can market, and the project as a whole can keep pushing forward.
                    </p> */}
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://www.linkedin.com/in/bertrandcaf/">
                  <ImageIcon
                    image={teamPhotosData.find(({ name }) => name === 'bertrand')?.image}
                    alt="Bertrand Caffi"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>
                      <strong>Bertrand Caffi</strong> - Business Development
                    </p>
                    {/* <p>
                      Bertrand leads business development. He focuses on partnerships, integrations, and use cases that
                      align with Alephium's mission. His approach is pragmatic, maintaining relationships with external
                      partners, exploring ecosystem expansion, and aligning strategic opportunities with Alephium's
                      long-term decentralized vision. His role guarantees that Alephium doesn't just remain a technical
                      breakthrough, but a platform with real-world impact.
                    </p> */}
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/RatkoStambolija">
                  <ImageIcon
                    image={teamPhotosData.find(({ name }) => name === 'ratko')?.image}
                    alt="Ratko Stambolija"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>
                      <strong>Ratko Stambolija</strong> - Marketing & Communications
                    </p>
                    {/* <p>
                      Alephium's marketing lead, Ratko, is responsible for marketing strategy, Alephium's positioning in
                      the Web3 space, and global outreach. He works with our Ambassadors, PR, and communities to ensure
                      the message is getting out properly, and that every piece of the marketing puzzle leads to proper
                      growth for our branding, dApps, and ecosystem as a whole.
                    </p> */}
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://www.linkedin.com/in/jsburgos">
                  <ImageIcon
                    image={teamPhotosData.find(({ name }) => name === 'juan')?.image}
                    alt="Juan S. Burgos"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>
                      <strong>Juan S. Burgos</strong> - Content & Social Media
                    </p>
                    {/* <p>
                      Juan leads content and social media at Alephium, crafting the project's public narrative and
                      growth strategy. He oversees performance-driven campaigns across X, YouTube, Telegram, Discord,
                      TikTok, Farcaster, and LinkedIn. Juan's work mixes creative storytelling with data-informed
                      marketing funnels, targeting users, miners, investors, and developers alike. Juan also coordinates
                      live events to expand Alephium's reach and strengthen its community across the broader Web3
                      ecosystem
                    </p> */}
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://x.com/_polto_">
                  <ImageIcon
                    image={teamPhotosData.find(({ name }) => name === 'polto')?.image}
                    alt="Alexandre Poltorak"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>
                      <strong>Alexandre Poltorak</strong> - Legal & Strategy Advisor
                    </p>
                    {/* <p>
                      A veteran of the open-source world, Alexandre brings over 20 years of experience in Free Software
                      and digital rights to his role as Alephium's legal and strategic advisor. He's been active in the
                      Bitcoin ecosystem since the early days and has advised crypto projects since 2016. At Alephium, he
                      helps with the legal and regulatory landscape, grounding strategic decisions in long-term
                      principles: decentralization, resilience, and user autonomy.
                    </p> */}
                  </TextElement>
                </ClickableBox>

                <ClickableBox url="https://www.linkedin.com/in/philipp-richner-2b0b82a5/">
                  <ImageIcon
                    image={teamPhotosData.find(({ name }) => name === 'philipp')?.image}
                    alt="Philipp Richner"
                    rounded
                    size={50}
                    padding={10}
                    noBottomMargin
                  />
                  <TextElement isSmall noMargin>
                    <p>
                      <strong>Philipp Richner</strong> - Finance
                    </p>
                    {/* <p>
                      Philipp, based in Switzerland's German-speaking region, holds a Master of Science in Banking and
                      Finance from Lucerne University. He previously led finance and controlling at a blockchain
                      company, supporting both strategic and financial goals. His crypto journey began in 2016 with a
                      conversation about blockchain, and he's been active in the space since. Philipp joined Alephium
                      and oversees all financial matters, ensuring a healthy ecosystem.
                    </p> */}
                  </TextElement>
                </ClickableBox>
              </Grid>
            </SubheaderContent>
          </SubpageSection>

          <SubpageSection>
            <GatsbyImageWrapper
              image={ecosystemImageData}
              alt="Ecosystem background"
              style={{ height: '100%', opacity: 0.5 }}
              objectFit="cover"
              loading="lazy"
              isBackground
            />
            <TextElement isCentered>
              <h2>Ecosystem & Community</h2>
              <p>
                <strong>
                  Alephium wouldn't be what it is without the builders, miners, creators, and supporters who contribute
                  to the ecosystem every day. We're deeply grateful for every contributor helping shape Alephium into an
                  open and thriving network. Alephium belongs to its community, and its future will be built together.
                </strong>
              </p>
              <Button big url="/communities">
                Online communities
              </Button>
            </TextElement>
          </SubpageSection>

          <SubpageSection>
            <SideBySide>
              <TextElement>
                <h2>The Blockflow Alliance DAO</h2>
                <p>
                  The <SimpleLink url="https://x.com/Blockflow_DAO/">BlockFlow Alliance DAO</SimpleLink> is a collective
                  of passionate community members dedicated to supporting the growth of the Alephium ecosystem through
                  community-driven initiatives. From hackathons and AMAs to marketing efforts, educational outreach, and
                  daily engagement, the DAO empowers individuals to contribute to Alephium's expansion in a
                  decentralized and organic way. It reflects Alephium's belief that{' '}
                  <strong>
                    lasting success comes not from a single team, but from the strength and creativity of its broader
                    community.
                  </strong>
                </p>
              </TextElement>
              <GatsbyImageWrapper
                image={teamPhotosData.find(({ name }) => name === 'blockflowalliance')?.image}
                alt="The Blockflow Alliance DAO"
                preserveWidth
                center
                rounded
              />
            </SideBySide>
          </SubpageSection>

          <SubpageSection border edgeGradient>
            <TextElement isCentered>
              <h1>Contact Us</h1>
              <p>
                Got questions, feedback, or just want to say hi? <br /> We’re here for you.
              </p>
            </TextElement>
            <TextElement isCentered>
              <Button squared url="mailto:info@alephium.org">
                General
              </Button>
              <Button squared url="mailto:business@alephium.org">
                Business and Partnerships
              </Button>
              <Button squared url="mailto:press@alephium.org">
                Press
              </Button>
            </TextElement>
          </SubpageSection>
          <SectionDivider double />
        </>
      }
    />
  )
}

export default CustomPage
