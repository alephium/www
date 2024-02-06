import { FC } from 'react'
import styled from 'styled-components'
import SimpleLink from './SimpleLink'

export interface TeamMemberProps {
  name: string
  role: string
  image: string
  url: string
  className?: string
}

const TeamMember: FC<TeamMemberProps> = ({ name, role, image, url, className }) => (
  <TeamMemberContainer className={className}>
    <Image src={image} alt={name} decoding="async" loading="lazy" />
    <TeamMemberName text={name} url={url} newTab />
    <TeamMemberRole>{role}</TeamMemberRole>
  </TeamMemberContainer>
)

const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
