import { useStaticQuery, graphql } from 'gatsby'
import Modal, { ModalProps } from '../../Modal'

const ModalTermsAndConditions = ({ isOpen, setIsOpen }: ModalProps) => {
  const { modal } = useStaticQuery(graphql`
    query {
      modal: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/modals/ambassadors-terms.md/" } }) {
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

export default ModalTermsAndConditions
