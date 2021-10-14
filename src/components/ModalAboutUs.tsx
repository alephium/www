import { useStaticQuery, graphql } from 'gatsby'
import { FC } from 'react'

import Modal, { ModalProps } from './Modal'

const ModalAboutUs: FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const { modal } = useStaticQuery(graphql`
    query {
      modal: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/modals/about-us.md/" } }) {
        nodes {
          frontmatter {
            title
          }
          html
        }
      }
    }
  `)

  const data = modal.nodes[0]

  return (
    <Modal title={data.frontmatter.title} isOpen={isOpen} setIsOpen={setIsOpen}>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </Modal>
  )
}

export default ModalAboutUs
