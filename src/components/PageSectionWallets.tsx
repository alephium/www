import styled from 'styled-components'

export interface PageSectionWalletsContentType {
  title: string
  subtitle: string
  description: string
  wallets: {
    title: string
    description: string
    actions: {
      title: string
      link: string
      color: string
      iconUrl?: string
    }[]
  }[]
}

interface PageSectionTechnologyProps {
  className?: string
  content: PageSectionWalletsContentType
}

const PageSectionWallets = ({ content }: PageSectionTechnologyProps) => {
  console.log('yo')
  return <SectionWrapper>{content.title}</SectionWrapper>
}

export default PageSectionWallets

const SectionWrapper = styled.section`
  padding-top: var(--spacing-16);
  background-color: ${({ theme }) => theme.bgTertiary};
`
