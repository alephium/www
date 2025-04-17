import { graphql, PageProps, useStaticQuery } from 'gatsby'

import Accordion from '../components/Accordion'
import Button from '../components/Button'
import Page from '../components/customPageComponents/Page'
import SubheaderContent from '../components/customPageComponents/SubheaderContent'
import SubpageHeroSection from '../components/customPageComponents/SubpageImageHeroSection'
import SubpageSection from '../components/customPageComponents/SubpageSection'
import TextElement from '../components/customPageComponents/TextElement'
import SectionDivider from '../components/SectionDivider'
import SimpleLink from '../components/SimpleLink'

const faqQuery = graphql`
  query FaqPage {
    heroImage: file(relativePath: { eq: "alephium-hackathon-lake.png" }) {
      ...HeroImage
    }
  }
`

const CustomPage = (props: PageProps) => {
  const { heroImage } = useStaticQuery<Queries.FaqPageQuery>(faqQuery)

  return (
    <Page
      {...props}
      seo={{
        title: 'Alephium FAQ | Everything You Need to Know',
        description:
          'Got questions? We’ve got answers. Explore FAQs about mining, wallets, smart contracts, and more on Alephium’s growing ecosystem.'
      }}
      content={
        <>
          <SubpageHeroSection backgroundImage={heroImage}>
            <h1>Frequently Asked Questions</h1>
            <hr />
            <p>
              This page is your go-to resource for all things Alephium! Whether you&apos;re looking for blockchain data,
              development resources, mining information, or general ecosystem insights, we&apos;ve got you covered
            </p>
          </SubpageHeroSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement>
              <h2>Chain Data</h2>
            </TextElement>

            <SubheaderContent>
              <Accordion title="How can I check wallet balances and top holders?">
                <p>
                  Check wallet balances via the Alephium Explorer. You can also view the top 256 addresses using
                  community-built tools like ALPH-Richlist.
                </p>
              </Accordion>
              <Accordion title="How much ALPH is in circulation?">
                <p>Find the current circulating supply on the Alephium Explorer or via this API endpoint.</p>
              </Accordion>
              <Accordion title="What is the minimum transaction fee?">
                <p>
                  The minimum fee is 0.002 ALPH, designed to prevent network spam. The lowest possible fee is
                  0.00000000000001 ALPH depending on transaction complexity.
                </p>
              </Accordion>
              <Accordion title="How fast is Alephium?">
                <p>
                  Alephium currently supports 400+ transactions per second (TPS) with 16 shards and can scale beyond
                  10,000 TPS as needed.
                </p>
              </Accordion>
              <Accordion title="What is the smallest unit of ALPH?">
                <p>The smallest denomination of ALPH is called Phi, where 1 ALPH = 10¹⁸ Phi.</p>
              </Accordion>
            </SubheaderContent>

            <TextElement>
              <h2>Wallet & Transactions</h2>
            </TextElement>

            <SubheaderContent>
              <Accordion title="What wallets are available for Alephium?">
                <p>Alephium offers:</p>
                <ul>
                  <li>
                    <SimpleLink url="https://github.com/alephium/alephium-frontend/releases/latest">
                      Desktop wallet
                    </SimpleLink>
                  </li>
                  <li>
                    <SimpleLink url="https://chrome.google.com/webstore/detail/alephium-extension-wallet/gdokollfhmnbfckbobkdbakhilldkhcj">
                      Chrome extension wallet
                    </SimpleLink>
                  </li>
                  <li>
                    <SimpleLink url="https://addons.mozilla.org/en-US/firefox/addon/alephiumextensionwallet">
                      Firefox extension wallet
                    </SimpleLink>
                  </li>
                  <li>
                    <SimpleLink url="https://play.google.com/store/apps/details?id=org.alephium.wallet">
                      Android wallet
                    </SimpleLink>
                  </li>
                  <li>
                    <SimpleLink url="https://apps.apple.com/us/app/alephium-wallet/id6469043072">iOS wallet</SimpleLink>
                  </li>
                </ul>
              </Accordion>
              <Accordion title="Why does my transaction have an extra 0.001 ALPH added?">
                <p>
                  This is a minimum UTXO requirement to prevent spam. The amount is not consumed and arrives at the
                  recipient’s wallet.
                </p>
              </Accordion>
              <Accordion title="Does Alephium have hardware wallet support?">
                <p>
                  Yes, we have a{' '}
                  <SimpleLink url="https://docs.alephium.org/wallet/ledger">Ledger integration</SimpleLink>!
                </p>
              </Accordion>
              <Accordion title="Where can I get ALPH?">
                <p>You can get ALPH here</p>
                <ul>
                  <li>
                    <SimpleLink url="https://www.ayin.app/swap">AYIN DEX</SimpleLink>
                  </li>
                  <li>
                    <SimpleLink url="https://www.elexium.finance">Elexium Finance DEX</SimpleLink>
                  </li>
                  <li>
                    <SimpleLink url="https://buy.onramper.com/?mode=buy&onlyCryptos=alph_alph">
                      Onramper on-ramp aggregator
                    </SimpleLink>
                  </li>
                  <li>
                    <SimpleLink url="https://www.mexc.com/exchange/ALPH_USDT">MEXC CEX</SimpleLink>
                  </li>
                </ul>
                <p>
                  Or you can explore{' '}
                  <SimpleLink url="https://www.coingecko.com/en/coins/alephium#markets">more ALPH markets</SimpleLink>.
                </p>
              </Accordion>
            </SubheaderContent>

            <TextElement>
              <h2>Development</h2>
            </TextElement>

            <SubheaderContent>
              <Accordion title="Where can I find developer resources?">
                <ul>
                  <li>
                    <SimpleLink url="https://docs.alephium.org">Start with documentation</SimpleLink>
                  </li>
                  <li>
                    <SimpleLink url="/roadmap">Explore the roadmap</SimpleLink>
                  </li>
                  <li>
                    <SimpleLink url="/grants">Learn about grants</SimpleLink>
                  </li>
                  <li>
                    <SimpleLink url="https://www.youtube.com/playlist?list=PL8q8n0BHJS1PWP7t8ABECYdOaPM-hJmjx">
                      Or go straight to tutorials
                    </SimpleLink>
                  </li>
                </ul>
              </Accordion>
              <Accordion title="Are there any dApps on Alephium?">
                <p>
                  Of course, explore our ecosystem in the <SimpleLink url="https://alph.land">AlphLand</SimpleLink>{' '}
                  directory.
                </p>
              </Accordion>
              <Accordion title="Why did Alephium choose to build its own virtual machine and smart contract language?">
                <p>
                  The stateful UTXO model on which Alephium is based is completely novel and is incompatible with
                  existing virtual machines such as EVM. This imposed the decision to create a new virtual machine
                  called Alphred, specifically designed to take advantage of sUTXO’s strengths.
                </p>
                <p>
                  Similarly to the EVM with Solidity, Alphred has a domain-specific language called Ralph. Ralph was
                  built specifically for Alephium’s blockchain to be extremely expressive and easy to use. It has been
                  specially tailored to be secure by design, leveraging the built-in features of the VM.
                </p>
                <p>
                  By creating its own VM and smart contract language, Alephium was able to propose a better alternative
                  and mitigate some of the known security issues of Solidity and EVM. In addition, development
                  experience was prioritized when designing the Alphred and Ralph, ensuring an easy start for
                  developers.
                </p>
              </Accordion>
            </SubheaderContent>

            <TextElement>
              <h2>Mining</h2>
            </TextElement>

            <SubheaderContent>
              <Accordion title="How many ALPH are mined per day?">
                <p>
                  Approximately 61,992 ALPH are mined daily, depending on the block reward, which adjusts dynamically.
                </p>
              </Accordion>
              <Accordion title="What mining software can I use?">
                <ul>
                  <li>
                    <SimpleLink url="https://www.bzminer.com/guides/how-to-mine-alephium">BZMiner</SimpleLink>
                  </li>
                  <li>
                    <SimpleLink url="https://github.com/Lolliedieb/lolMiner-releases">lolMiner</SimpleLink>
                  </li>
                  <li>
                    <SimpleLink url="https://github.com/doktor83/SRBMiner-Multi/releases">SRBMiner</SimpleLink>
                  </li>
                  <li>
                    <SimpleLink url="https://github.com/trexminer/T-Rex">T-Rex Miner</SimpleLink>
                  </li>
                </ul>
              </Accordion>
              <Accordion title="Why are mined rewards locked for 500 minutes?">
                <p>This prevents re-org attacks, similar to Bitcoin’s 1000-minute lock</p>
              </Accordion>
              <Accordion title="Where can I find more resources about Alephium mining?">
                <p>
                  More information and guides about mining can be found here. //leads to
                  https://docs.alephium.org/mining/
                </p>
              </Accordion>
            </SubheaderContent>

            <TextElement>
              <h2>Miscellaneous</h2>
            </TextElement>

            <SubheaderContent>
              <Accordion title="What is the meaning behind Alephium’s name?">
                <p>
                  Alephium derives from “Aleph”, a mathematical symbol representing the cardinality of infinite sets,
                  introduced by Georg Cantor. The logo is a stylized version of the Aleph letter.
                </p>
              </Accordion>
              <Accordion title="Where can I get the latest Alephium updates?">
                <p>Join our announcement channels:</p>
                <ul>
                  <li>
                    <SimpleLink url="https://discord.gg/XC5JaaDT7z">Discord</SimpleLink>
                  </li>
                  <li>
                    <SimpleLink url="https://t.me/alephiumgroup">Telegram</SimpleLink>
                  </li>
                  <li>
                    <SimpleLink url="https://x.com/alephium">X</SimpleLink>
                  </li>
                </ul>
              </Accordion>
              <Accordion title="Where is Alephium listed?">
                <p>Check CoinMarketCap and CoinGecko for updated exchange listings.</p>
              </Accordion>
            </SubheaderContent>

            <TextElement>
              <h2>Bounty Program</h2>
            </TextElement>

            <SubheaderContent>
              <Accordion title="What is the Alephium Bounty Program?">
                <p>
                  The Alephium Bounty Program is a community-driven initiative that rewards individuals for contributing
                  to the Alephium project. We believe in the power of open-source collaboration and recognize that
                  valuable contributions come from diverse sources. This program is our way of saying thank you and
                  fostering a thriving community. //”The Alephium Bounty Program” leads to bounty page
                </p>
              </Accordion>
              <Accordion title="Who can participate in the Alephium Bounty Program?">
                <p>
                  Anyone with the skills and passion to contribute to Alephium is welcome to participate! Whether you're
                  a developer, designer, writer, community manager, or simply an enthusiastic supporter, there's likely
                  a bounty for you.
                </p>
              </Accordion>
              <Accordion title="What kind of contributions are eligible for bounties?">
                <p>We value a wide range of contributions. Examples include:</p>
                <ul>
                  <li>
                    Development: Bug fixes, feature implementations, code improvements, integrations with other
                    projects.
                  </li>
                  <li>Documentation: Creating or improving documentation, tutorials, or guides.</li>
                  <li>
                    Content Creation: Writing blog posts, articles, creating videos, infographics, or other engaging
                    content about Alephium.
                  </li>
                  <li>Community Support: Helping other community members, answering questions, moderating forums.</li>
                  <li>Design: Creating logos, graphics, UI/UX improvements.</li>
                  <li>Testing: Thoroughly testing the Alephium platform and reporting bugs.</li>
                </ul>
              </Accordion>
              <Accordion title="Where can I find available bounties?">
                <p>
                  Available bounties will be listed on alephium.org/bounties. Each bounty will clearly describe the
                  requirements, deliverables, and the reward offered. //please add a direct url to the bounties page
                  once we have it
                </p>
              </Accordion>
              <Accordion title="How are bounty rewards determined?">
                <p>
                  Bounty rewards are determined based on the complexity, time commitment, and overall value of the
                  contribution. The reward amount will be clearly stated in each bounty description. Rewards are paid in
                  ALPH.
                </p>
              </Accordion>
              <Accordion title="How do I submit my work for a bounty?">
                <p>
                  The submission process will be outlined in each bounty description. Typically, this involves
                  submitting a pull request (for code contributions), a link to your work (for content creation), or a
                  detailed report (for bug reports).
                </p>
              </Accordion>
              <Accordion title="What happens after I submit my work?">
                <p>
                  Our team will review your submission to ensure it meets the bounty requirements. We may ask for
                  revisions or clarifications. Once your submission is approved, you will receive your reward.
                </p>
              </Accordion>
              <Accordion title="How long does it take to get paid after my submission is approved?">
                <p>
                  We aim to process payments as quickly as possible. You can expect to receive your reward within a
                  week.
                </p>
              </Accordion>
              <Accordion title="Can I work on multiple bounties at the same time?">
                <p>
                  Yes, you can work on multiple bounties simultaneously, as long as you have the capacity to deliver
                  quality work for each.
                </p>
              </Accordion>
              <Accordion title="Is there a limit to the number of bounties available?">
                <p>
                  There is no limit. We regularly add new bounties, so keep an eye on the bounty platform for new
                  opportunities.
                </p>
              </Accordion>
              <Accordion title="What if I have a question that isn't answered here?">
                <p>Please reach out to us on Discord or Telegram. We're happy to answer any questions you may have.</p>
              </Accordion>
            </SubheaderContent>

            <TextElement>
              <h2>Ambassador Program</h2>
            </TextElement>

            <SubheaderContent>
              <Accordion title="Who can become an Alephium Ambassador?">
                <p>
                  Anyone with a passion for blockchain and a desire to contribute to the Alephium ecosystem can apply.
                  No prior experience is required - just enthusiasm and a willingness to learn!
                </p>
              </Accordion>
              <Accordion title="What kind of support will I receive?">
                <p>
                  Ambassadors receive access to exclusive resources, guidance, and a dedicated support team to help them
                  succeed.
                </p>
              </Accordion>
              <Accordion title="How much time do I need to commit?">
                <p>The time commitment is flexible. You can contribute as much or as little as your schedule allows.</p>
              </Accordion>
              <Accordion title="How are ambassadors rewarded?">
                <p>
                  Ambassadors are rewarded with exclusive swag, ALPH coins, opportunities to attend events, and more.
                </p>
              </Accordion>
            </SubheaderContent>
          </SubpageSection>

          <SectionDivider />

          <SubpageSection>
            <TextElement isCentered>
              <h2>Still have questions?</h2>
              <p>Join our community for in-depth information.</p>
              <Button url="/discord">Join Discord</Button>
              <Button url="https://t.me/alephiumgroup">Join Telegram</Button>
            </TextElement>
          </SubpageSection>
        </>
      }
    />
  )
}

export default CustomPage
