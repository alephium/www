import { graphql, useStaticQuery } from 'gatsby'
import { FC } from 'react'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'
import Modal, { ModalProps } from './Modal'
import TeamMember, { TeamMemberProps } from './TeamMember'

const ModalAboutUs: FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const { teamData } = useStaticQuery(graphql`
    query {
      teamData: allTeamYaml {
        edges {
          node {
            name
            role
            image {
              childImageSharp {
                gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO])
              }
            }
          }
        }
      }
    }
  `)

  const members = teamData.edges.map((edge: { node: TeamMemberProps }) => edge.node)

  return (
    <Modal title="Team" isOpen={isOpen} setIsOpen={setIsOpen}>
      <TeamList>
        {members.map((teamMember: TeamMemberProps) => (
          <TeamMember key={teamMember.name} {...teamMember} />
        ))}
      </TeamList>
    </Modal>
  )
}
const TeamList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-4);

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default ModalAboutUs
