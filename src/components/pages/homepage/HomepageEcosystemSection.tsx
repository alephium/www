import Button from '../../Button'
import Placeholder from '../../customPageComponents/Placeholder'
import SideBySide from '../../customPageComponents/SideBySide'
import SubheaderContent from '../../customPageComponents/SubheaderContent'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'

const HomepageEcosystemSection = () => (
  <SubpageSection>
    <TextElement isCentered>
      <h2>
        Built on Alephium.
        <br />
        Built to last.
      </h2>
      <p>
        Alephium is home to pioneers, combining <strong>strong technology and a bustling community</strong> to bring the{' '}
        <strong>next generation of decentralized applications to life</strong>.
      </p>
    </TextElement>

    <SubheaderContent>
      <SideBySide>
        <TextElement>
          <h3>Elexium Finance</h3>
          <p>A liquidity arena</p>
        </TextElement>
        <Placeholder height="200px" width="100%" />
      </SideBySide>
      <SideBySide>
        <TextElement>
          <h3>Elexium Finance</h3>
          <p>A liquidity arena</p>
        </TextElement>
        <Placeholder height="200px" width="100%" />
      </SideBySide>
      <SideBySide>
        <TextElement>
          <h3>Elexium Finance</h3>
          <p>A liquidity arena.</p>
        </TextElement>
        <Placeholder height="200px" width="100%" />
      </SideBySide>
      <SideBySide>
        <TextElement>
          <h3>AlphBanX</h3>
          <p>A next-generation form of stable currency. </p>
        </TextElement>
        <Placeholder height="200px" width="100%" />
      </SideBySide>
      <SideBySide>
        <TextElement>
          <h3>Linx OTC</h3>
          <p>Escrow-free OTC trades and secure peer-to-peer loans.</p>
        </TextElement>
        <Placeholder height="200px" width="100%" />
      </SideBySide>
      <SideBySide>
        <TextElement>
          <h3>Alphaga</h3>
          <p>Decentralized NFT Marketplace.</p>
        </TextElement>
        <Placeholder height="200px" width="100%" />
      </SideBySide>
      <SideBySide>
        <TextElement>
          <h3>Ayin</h3>
          <p>Decentralized Exchange.</p>
        </TextElement>
        <Placeholder height="200px" width="100%" />
      </SideBySide>
      <SideBySide>
        <TextElement>
          <h3>Deadrare</h3>
          <p>NFT Marketplace.</p>
        </TextElement>
        <Placeholder height="200px" width="100%" />
      </SideBySide>
    </SubheaderContent>

    <TextElement isCentered>
      <Button url="https://alph.land">Explore ecosystem</Button>
    </TextElement>
  </SubpageSection>
)

export default HomepageEcosystemSection
