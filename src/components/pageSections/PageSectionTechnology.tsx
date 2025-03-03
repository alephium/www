import { ComponentProps } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../../styles/global-style'

import PageSectionContainer from '../PageSectionContainer'
import SectionTextHeader from '../SectionTextHeader'
import Columns from '../Columns/Columns'
import Column from '../Columns/Column'
import SectionTextTeaser from '../SectionTextTeaser'

import BlockflowFrontImageSrc from '../../images/blockflow-front.svg'
import BlockflowBackImageSrc from '../../images/blockflow-back.svg'
import PoLWFrontImageSrc from '../../images/polw-front.svg'
import PoLWBackImageSrc from '../../images/polw-back.svg'
import SmartContractFrontImageSrc from '../../images/smart-contract-front.svg'
import SmartContractBackImageSrc from '../../images/smart-contract-back.svg'
import VmsImageFrontSrc from '../../images/vms-front.svg'
import VmsImageBackSrc from '../../images/vms-back.svg'
import StackImage from '../../images/svgs/stack.svg'
import LeafImage from '../../images/svgs/leaf.svg'
import VmDotsImage from '../../images/svgs/vm-dots.svg'
import IllustrationColumn from '../Columns/IllustrationColumn'
import { useRefScrollProgress } from '../../hooks/useRefScrollProgress'
import ParallaxWrapper from '../ParallaxWrapper'
import { graphql } from 'gatsby'
import { notEmpty } from '../../utils/misc'

export const query = graphql`
  fragment PageSectionTechnology on MarkdownRemarkFrontmatterPageSectionTechContent {
    titleRows
    subtitleRows
    sections {
      type
      ...SectionTextTeaser
    }
  }
`

const PageSectionTechnology = (content: Queries.PageSectionTechnologyFragment) => {
  const [gradientRef] = useRefScrollProgress()

  const columnsProps: Omit<ComponentProps<typeof Columns>, 'children'> = {
    gap: '4.5rem',
    animateEntry: true
  }

  return (
    <SectionContainer ref={gradientRef}>
      {content?.titleRows && content?.subtitleRows && (
        <SectionTextHeader
          titleRows={content.titleRows.filter(notEmpty)}
          subtitleRows={content.subtitleRows.filter(notEmpty)}
          centered
          bigSubtitle
        />
      )}
      {content?.sections?.filter(notEmpty).map((section) => (
        <TechSection key={section.title}>
          <PageSectionContainer>
            <Columns {...columnsProps}>
              {section.type === 'blockflow' ? (
                <IllustrationColumn>
                  <ParallaxImage src={BlockflowBackImageSrc} speed={5} shouldRotate targetedRotation={10} />
                  <ParallaxImage src={BlockflowFrontImageSrc} speed={3} shouldRotate targetedRotation={10} />
                </IllustrationColumn>
              ) : section.type === 'smart-contract' ? (
                <IllustrationColumn>
                  <ParallaxImage src={SmartContractBackImageSrc} speed={-9} style={{ x: -50, opacity: 0.2 }} />
                  <ParallaxImage src={SmartContractBackImageSrc} speed={-7} style={{ x: -40, opacity: 0.4 }} />
                  <ParallaxImage src={SmartContractBackImageSrc} speed={-5} style={{ x: -30, opacity: 0.6 }} />
                  <ParallaxImage src={SmartContractBackImageSrc} speed={-3} style={{ x: -20, opacity: 0.8 }} />
                  <ParallaxImage src={SmartContractBackImageSrc} speed={-1} style={{ x: -10, opacity: 1 }} />
                  <ParallaxImage src={SmartContractFrontImageSrc} speed={-1} />
                </IllustrationColumn>
              ) : null}
              <Column vertialCenter>
                <SectionTextTeaser
                  {...section}
                  IconComponent={
                    section.type === 'blockflow'
                      ? StackImage
                      : section.type === 'polw'
                      ? LeafImage
                      : section.type === 'smart-contract'
                      ? StackImage
                      : VmDotsImage
                  }
                  trackingName={`technology-section:${section.type}`}
                />
              </Column>
              {section.type === 'polw' ? (
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
              ) : section.type === 'vms' ? (
                <IllustrationColumn>
                  <ParallaxImage src={VmsImageBackSrc} speed={-5} />
                  <ParallaxImage src={VmsImageFrontSrc} speed={2} />
                </IllustrationColumn>
              ) : null}
            </Columns>
          </PageSectionContainer>
        </TechSection>
      ))}
    </SectionContainer>
  )
}

export default PageSectionTechnology

const SectionContainer = styled.section`
  position: relative;
`

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

const TechSection = styled.div`
  background-color: ${({ theme }) => theme.bgTertiary};
  padding: var(--spacing-8) 0;
  position: relative;
  overflow: hidden;

  @media ${deviceBreakPoints.mobile} {
    padding: var(--spacing-5) 0 var(--spacing-14);
  }
`
