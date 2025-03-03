import { IGatsbyImageData } from 'gatsby-plugin-image'
import { FC } from 'react'
import styled from 'styled-components'
import ResponsiveImage from './ResponsiveImage'
import SimpleLink from './SimpleLink'

export interface TeamMemberProps {
  name: string
  role: string
  image?: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  externalImageURL?: string
  url: string
  className?: string
}

const TeamMember: FC<TeamMemberProps> = ({ name, role, externalImageURL, image, url, className }) => (
  <TeamMemberContainer className={className}>
    {externalImageURL ? (
      <Image src={externalImageURL} alt={name} decoding="async" loading="lazy" />
    ) : (
      image && <ResponsiveImage image={{ src: image, altText: name }} />
    )}
    <TeamMemberName text={name} url={url} />
    <TeamMemberRole>{role}</TeamMemberRole>
  </TeamMemberContainer>
)

const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  padding: 20px;
  border-radius: 22px;
`

const TeamMemberName = styled(SimpleLink)`
  font-weight: 600;
  margin-top: var(--spacing-1);
`

const TeamMemberRole = styled.div`
  font-size: var(--fontSize-14);
  line-height: var(--lineHeight-22);
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: var(--spacing-2);
`

export default TeamMember
