import { graphql, PageProps, useStaticQuery } from 'gatsby'

import Button from '../components/Button'
import Grid from '../components/customPageComponents/Grid'
import Page from '../components/customPageComponents/Page'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageHeroSection from '../components/customPageComponents/SubpageImageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextCard from '../components/customPageComponents/TextCard'
import TextCardContent from '../components/customPageComponents/TextCardContent'
import TextElement from '../components/customPageComponents/TextElement'

const aboutQuery = graphql`
  query AboutPage {
    heroImage: file(relativePath: { eq: "alephium-hackathon-lake.png" }) {
      ...HeroImage
    }
  }
`

const CustomPage = (props: PageProps) => {
  const { heroImage } = useStaticQuery<Queries.AboutPageQuery>(aboutQuery)

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
          <SubpageHeroSection backgroundImage={heroImage}>
            <h1>About</h1>
            <hr />
            <p>About</p>
          </SubpageHeroSection>

          <SubpageSection>
            <TextElement>
              <h2>Why?</h2>
              <p>
                Alephium was born from a simple but powerful question: What should a blockchain for the next decade look
                like? Inspired by Bitcoin’s robustness and shaped by a deep understanding of distributed systems and
                consensus theory, Alephium set out to build infrastructure that doesn’t compromise; on decentralization,
                security, or real scalability.
              </p>
              <p>
                Conceived by Cheng Wang after witnessing firsthand how security and decentralization were increasingly
                treated as trade-offs rather than essentials, Alephium reimagines blockchain from the ground up. Drawing
                from deep expertise in consensus research and hands-on DeFi experience, the project addresses the
                shortcomings that became evident as neither Bitcoin nor Ethereum could fully meet the needs of a
                decentralized future. Bitcoin, while secure, lacked scalability and programmability. Ethereum introduced
                flexibility through smart contracts but struggled with security vulnerabilities, complexity, and growing
                centralization pressures.
              </p>
              <p>
                Alephium offers a new path forward. By combining the resilience of Proof-of-Work with breakthrough
                innovations like BlockFlow sharding, Proof-of-Less-Work, and a stateful UTXO model leveraged by a custom
                virtual machine, Alephium delivers high throughput, energy efficiency, and secure smart contracts.
              </p>
              <p>
                Every layer of Alephium; from protocol design to tooling; is built with usability and accessibility in
                mind, empowering both developers and end users. Alephium is designed to support real-world decentralized
                applications at scale, where dApps are safe by design, running a node is accessible to all, and builders
                can innovate with confidence.{' '}
                <strong>Alephium is here to prove that scaling decentralization doesn’t mean sacrificing it.</strong>
              </p>
            </TextElement>
          </SubpageSection>

          <SubpageSection>
            <TextElement>
              <h2>What is Alephium?</h2>
              <p>
                Alephium is a Layer 1 blockchain that brings scalability, smart contract capabilities, and energy
                efficiency to the security and decentralization of Proof-of-Work. Built on a novel approach to the UTXO
                model, it solves the limitations of earlier networks through a set of breakthrough technologies:
              </p>
              <h3>BlockFlow Sharding</h3>
              <p>
                A unique sharding algorithm that enables over 10,000 transactions per second with the simplicity of a
                single-chain user experience without sacrificing decentralization.
              </p>
              <h3>Proof-of-Less-Work</h3>
              <p>
                A more energy-efficient evolution of classic Proof-of-Work, reducing energy consumption by over 87%
                striking a balance between environmental responsibility and decentralization, without compromising
                security.
              </p>
              <h3>Stateful UTXO Model</h3>
              <p>
                Alephium introduces a new accounting paradigm that merges Ethereum-like programmability with UTXO-level
                security, providing a secure, reliable foundation for tokenized assets and large-scale decentralized
                applications.
              </p>
              <h3>Custom Virtual Machine</h3>
              <p>
                Alephium’s VM is purpose-built to harness the strengths of its stateful UTXO model, offering a secure
                alternative to vulnerable EVM-based environments. It mitigates critical attack vectors like reentrancy,
                flash loan exploits, and unlimited authorization. Designed with MEV resistance in mind and paired with a
                high-performance language and SDK, it empowers developers to build safer, more reliable decentralized
                applications.
              </p>
              <p>
                Together, these innovations make Alephium a uniquely positioned platform for building scalable, secure,
                and user-friendly decentralized applications; without compromising the core values that make blockchain
                worth building on.
              </p>
            </TextElement>
          </SubpageSection>

          <SubpageSection>
            <TextElement>
              <h2>Core Contributors</h2>
              <p>
                Alephium is more than the sum of its core contributors. It is a community-first blockchain, and its
                long-term evolution is guided not by any single team, but by the growing network of users, developers,
                miners, and supporters who believe in the project’s vision of decentralized, secure, and sustainable
                infrastructure.
              </p>
            </TextElement>

            <SubheaderContent>
              <Grid columns={2} gap="small">
                <TextCard>
                  <TextCardContent>
                    <h3>
                      <strong>Cheng Wang</strong> - Founder & Core Developer
                    </h3>
                    <p>
                      Founder and chief architect, Cheng Wang, brings academic depth and engineering clarity to
                      Alephium. His research in number theory and distributed algorithms; two separate Ph.D. tracks; led
                      directly to Alephium's core innovation: BlockFlow, a sharding algorithm designed to improve
                      scalability without compromising decentralization or security. Cheng's involvement spans the
                      protocol's full-node architecture, virtual machine, smart contract design and implementation, and
                      consensus mechanics.
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>
                      <strong>Hongchao Liu (h0ngcha0)</strong> - Core Developer
                    </h3>
                    <p>
                      A core developer based in Sweden, and also known in the community as h0ngcha0, Hongchao works on
                      Alephium’s protocol layer and smart contract implementation. His academic background spans both
                      Southeast University in China and Chalmers University of Technology in Sweden. His interest in
                      Bitcoin’s foundational ideas led him to Alephium, where he now helps build out the system’s
                      low-level architecture. He is especially focused on improving scalability while staying aligned
                      with Bitcoin's minimalist tech ethos
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>
                      <strong>Muchen</strong> - Protocol Engineer
                    </h3>
                    <p>
                      Based in Hefei, China, Muchen studied Communication Engineering at Anhui University before diving
                      into crypto in 2017. A self-taught engineer with a sharp eye for code, he discovered Alephium
                      through its whitepaper and was drawn to its BlockFlow sharding algorithm, which he considers one
                      of the best in the space. At Alephium, he focuses on bridge development and core infrastructure,
                      always with an eye on how to make the platform more welcoming for developers
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>
                      <strong>Thomas Droxler</strong> - Back-End Core Developer
                    </h3>
                    <p>
                      Thomas is a software engineer with a background in computer science from EPFL. He was among the
                      first to join Alephium. Initially involved in nearly every part of the codebase, he later focused
                      on the node-wallet, the backend for the explorer, and the APIs that connect users and developers
                      to the blockchain. His background includes work in autonomous systems, and he remains one of the
                      most versatile core contributors.
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>
                      <strong>Simer Plaha</strong> - Core DB Developer
                    </h3>
                    <p>
                      Simer, based in Sydney, Australia, holds a Bachelor’s in IT with a major in Software Engineering
                      from Griffith University. He first encountered Bitcoin in 2015 through a TechCrunch article, but
                      his deeper dive into crypto came later. A proponent of open-source software, Simer was drawn to
                      Alephium after Cheng started a discussion on GitHub. At Alephium, he focuses on database-related
                      development, ensuring high performance and scalability through clean, testable code.
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>
                      <strong>Yuanying Li</strong> - Junior Core Developer & Ecosystem
                    </h3>
                    <p>
                      Yuanying Wing is a junior core developer at Alephium, where she focuses on improving the developer
                      experience. With her background in hackathons, she brings a mix of creativity and a clear
                      understanding of what developers need to get started effectively. At Alephium, Yuanying works on
                      building tools and refining processes that make it easier for developers to onboard, engage with
                      the community, and access programs like grants and bounties. Her work helps simplify workflows,
                      ensuring that Alephium remains an accessible and practical platform for developers
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>
                      <strong>Mikaël Vaivre</strong> - Product & Front-End Core Developer
                    </h3>
                    <p>
                      Mikaël is the creative force behind Alephium’s user experience and front-end development. He
                      oversees design and product growth across the ecosystem. Whether it’s the desktop wallet or the
                      explorer UI, we trust Mikaël delivers top-notch design for all things in our network. Mikaël is at
                      his core an environmental engineer, and he brings a systems-thinking approach to interface design
                      – one that makes Alephium’s complexity feel elegant and approachable.
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>
                      <strong>Ilias Trichopoulos</strong> - Front-End Core Developer
                    </h3>
                    <p>
                      Known in the Alephium community as nop33, Ilias brings over a decade of experience in front-end
                      architecture and user interface design. With a background in computer science, his path has taken
                      him from Greece to Switzerland, where he worked at CERN before joining Alephium in 2021. At
                      Alephium, Ilias works closely with Mikaël Vaivre on the features and user experience of key
                      applications like the wallets and the explorer. His focus is clear: building intuitive interfaces
                      that make complex blockchain technology feel simple and accessible.
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>
                      <strong>Maud Bannwart</strong> - Operations
                    </h3>
                    <p>
                      Maud Bannwart is the not-so quiet engine behind Alephium’s momentum. With a scientific background
                      and a career that began at one of Switzerland’s most promising tech startups, she quickly found
                      herself at the intersection of innovation and infrastructure. It was there she first met several
                      of Alephium’s future core contributors. This connection eventually brought her into the world of
                      blockchain. Before joining Alephium, she gained hands-on crypto experience at a pioneering Swiss
                      exchange. Today, she orchestrates the moving parts of a growing ecosystem: overseeing operations,
                      aligning timelines, managing legal frameworks, and supporting the community. Maud ensures that
                      builders can build, marketers can market, and the project as a whole can keep pushing forward.
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>
                      <strong>Bertrand Caffi</strong>
                    </h3>
                    <p>
                      Bertrand leads business development. He focuses on partnerships, integrations, and use cases that
                      align with Alephium’s mission. His approach is pragmatic, maintaining relationships with external
                      partners, exploring ecosystem expansion, and aligning strategic opportunities with Alephium’s
                      long-term decentralized vision. His role guarantees that Alephium doesn’t just remain a technical
                      breakthrough, but a platform with real-world impact.
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>
                      <strong>Ratko Stambolija</strong> - Marketing & Communications
                    </h3>
                    <p>
                      Alephium’s marketing lead, Ratko, is responsible for marketing strategy, Alephium’s positioning in
                      the Web3 space, and global outreach. He works with our Ambassadors, PR, and communities to ensure
                      the message is getting out properly, and that every piece of the marketing puzzle leads to proper
                      growth for our branding, dApps, and ecosystem as a whole.
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>
                      <strong>Juan S. Burgos</strong> - Content & Social Media
                    </h3>
                    <p>
                      Juan leads content and social media at Alephium, crafting the project’s public narrative and
                      growth strategy. He oversees performance-driven campaigns across X, YouTube, Telegram, Discord,
                      TikTok, Farcaster, and LinkedIn. Juan’s work mixes creative storytelling with data-informed
                      marketing funnels, targeting users, miners, investors, and developers alike. Juan also coordinates
                      live events to expand Alephium’s reach and strengthen its community across the broader Web3
                      ecosystem
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>
                      <strong>Alexandre Poltorak</strong> - Legal & Strategy Advisor
                    </h3>
                    <p>
                      A veteran of the open-source world, Alexandre brings over 20 years of experience in Free Software
                      and digital rights to his role as Alephium’s legal and strategic advisor. He’s been active in the
                      Bitcoin ecosystem since the early days and has advised crypto projects since 2016. At Alephium, he
                      helps with the legal and regulatory landscape, grounding strategic decisions in long-term
                      principles: decentralization, resilience, and user autonomy.
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>
                      <strong>Philipp Richner</strong> - Finance
                    </h3>
                    <p>
                      Philipp, based in Switzerland’s German-speaking region, holds a Master of Science in Banking and
                      Finance from Lucerne University. He previously led finance and controlling at a blockchain
                      company, supporting both strategic and financial goals. His crypto journey began in 2016 with a
                      conversation about blockchain, and he’s been active in the space since. Philipp joined Alephium
                      and oversees all financial matters, ensuring a healthy ecosystem.
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>
                      <strong>The Alephium Ecosystem & Community</strong>
                    </h3>
                    <p>
                      Alephium wouldn’t be what it is without the builders, miners, creators, and supporters who
                      contribute to the ecosystem every day. Whether through building dApps, running nodes, providing
                      liquidity, writing documentation, or simply sharing ideas, the community continues to push
                      Alephium forward. We’re deeply grateful for every contributor helping shape Alephium into an open
                      and thriving network. In the long run, Alephium belongs to its community, and its future will be
                      built together.
                    </p>
                  </TextCardContent>
                </TextCard>
                <TextCard>
                  <TextCardContent>
                    <h3>
                      <strong>The Blockflow Alliance DAO</strong>
                    </h3>
                    <p>
                      The BlockFlow Alliance DAO is a collective of passionate community members dedicated to supporting
                      the growth of the Alephium ecosystem through community-driven initiatives. From hackathons and
                      AMAs to marketing efforts, educational outreach, and daily engagement, the DAO empowers
                      individuals to contribute to Alephium’s expansion in a decentralized and organic way. It reflects
                      Alephium’s belief that lasting success comes not from a single team, but from the strength and
                      creativity of its broader community.
                    </p>
                  </TextCardContent>
                </TextCard>
              </Grid>
            </SubheaderContent>
          </SubpageSection>

          <SubpageSection>
            <TextElement isCentered>
              <h2>Connect with Alephium</h2>
              <p>
                Ready to build, explore, or connect? Whether you’re a developer, a community member, or a partner, there
                are many ways to get involved with Alephium.
              </p>
              <Button url="/communities">Join the Community</Button>
              <Button url="https://docs.alephium.org/">Build with us</Button>
            </TextElement>
          </SubpageSection>
        </>
      }
    />
  )
}

export default CustomPage
