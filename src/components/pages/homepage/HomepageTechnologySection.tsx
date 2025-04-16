import styled from 'styled-components'

import BlockflowBackImageSrc from '../../../images/blockflow-back.svg'
import BlockflowFrontImageSrc from '../../../images/blockflow-front.svg'
import PoLWBackImageSrc from '../../../images/polw-back.svg'
import PoLWFrontImageSrc from '../../../images/polw-front.svg'
import SmartContractBackImageSrc from '../../../images/smart-contract-back.svg'
import SmartContractFrontImageSrc from '../../../images/smart-contract-front.svg'
import VmsImageBackSrc from '../../../images/vms-back.svg'
import VmsImageFrontSrc from '../../../images/vms-front.svg'
import Button from '../../Button'
import IllustrationColumn from '../../Columns/IllustrationColumn'
import SideBySide from '../../customPageComponents/SideBySide'
import SubheaderContent from '../../customPageComponents/SubheaderContent'
import SubpageSection from '../../customPageComponents/SubpageSection'
import TextElement from '../../customPageComponents/TextElement'
import ParallaxWrapper from '../../ParallaxWrapper'

const HomepageTechnologySection = () => (
  <SubpageSection>
    <SubpageSection>
      <TextElement isCentered>
        <h2>
          Built to Last.
          <br />
          Designed to Scale.
        </h2>
        <p>Code is law, but security is everything.</p>
      </TextElement>

      <SubheaderContent>
        <SideBySide>
          <IllustrationColumn>
            <ParallaxImage src={BlockflowBackImageSrc} speed={5} shouldRotate targetedRotation={10} />
            <ParallaxImage src={BlockflowFrontImageSrc} speed={3} shouldRotate targetedRotation={10} />
          </IllustrationColumn>

          <TextElement isBodySmall>
            <h3>Scalable & Sharded</h3>
            <p>
              Alephium is built on a novel sharding algorithm called BlockFlow. It leverages a stateful UTXO model and
              DAG data structure to deliver efficient and practical sharding. This enables Alephium to natively support
              over 10,000 transactions per second while preserving a seamless 'single-chain' user experience.
            </p>
            <Button url="https://github.com/alephium/white-paper/blob/master/alephium.pdf">White paper</Button>
          </TextElement>
        </SideBySide>
        <SideBySide reverseOnMobile>
          <TextElement isBodySmall>
            <h3>Efficiency in Energy Consumption</h3>
            <p>
              Alephium's Proof Of Less Work is a consistent and robust consensus mechanism designed to achieve
              decentralization while reducing the energy consumption by over 87% compared to classic Proof of Work.
            </p>
            <Button url="https://github.com/alephium/white-paper/blob/master/polw.pdf">PoLW white paper</Button>
          </TextElement>

          <IllustrationColumn>
            <ParallaxImage src={PoLWBackImageSrc} speed={0} />
            <ParallaxImage
              src={PoLWFrontImageSrc}
              speed={5}
              shouldZoom
              targetedScale={2}
              shouldChangeOpacity
              targetedOpacity={-0.2}
            />
            <ParallaxImage
              src={PoLWFrontImageSrc}
              speed={-5}
              shouldZoom
              targetedScale={2}
              shouldChangeOpacity
              targetedOpacity={-0.2}
            />
          </IllustrationColumn>
        </SideBySide>
        <SideBySide>
          <IllustrationColumn>
            <ParallaxImage src={SmartContractBackImageSrc} speed={-9} style={{ x: -50, opacity: 0.2 }} />
            <ParallaxImage src={SmartContractBackImageSrc} speed={-7} style={{ x: -40, opacity: 0.4 }} />
            <ParallaxImage src={SmartContractBackImageSrc} speed={-5} style={{ x: -30, opacity: 0.6 }} />
            <ParallaxImage src={SmartContractBackImageSrc} speed={-3} style={{ x: -20, opacity: 0.8 }} />
            <ParallaxImage src={SmartContractBackImageSrc} speed={-1} style={{ x: -10, opacity: 1 }} />
            <ParallaxImage src={SmartContractFrontImageSrc} speed={-1} />
          </IllustrationColumn>

          <TextElement isBodySmall>
            <h3>Programmable & Secure</h3>
            <p>
              Alephium's stateful UTXO model combines the advantages of the UTXO and account models. It supports mutable
              states, like those found in Ethereum, for smart contracts while leveraging the security benefits of the
              UTXO model for asset.
            </p>
            <Button url="https://docs.alephium.org/dapps">Guide</Button>
          </TextElement>
        </SideBySide>
        <SideBySide reverseOnMobile>
          <TextElement isBodySmall>
            <h3>Unique Virtual Machine & Programming Language</h3>
            <p>
              Alephium enhances developer experience and security with its Virtual Machine, SDK, and
              performance-optimized programming language. Its MEV-aware design and built-in security measures eliminate
              common attack vectors, such as reentrancy attacks, unlimited authorization and flash loans. Alephium
              allows developers to focus on what matters and opens new possibilities for smart contracts, dApps and
              tokens.
            </p>
            <Button url="https://docs.alephium.org/dapps">Resources</Button>
          </TextElement>

          <IllustrationColumn>
            <ParallaxImage src={VmsImageBackSrc} speed={-5} />
            <ParallaxImage src={VmsImageFrontSrc} speed={2} />
          </IllustrationColumn>
        </SideBySide>
      </SubheaderContent>
    </SubpageSection>
  </SubpageSection>
)

export default HomepageTechnologySection

const ParallaxImage = styled(ParallaxWrapper)<{ src: string }>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
