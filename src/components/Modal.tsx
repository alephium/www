import React, { FC } from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'

import TextSnippet from './TextSnippet'
import CloseIcon from '../images/svgs/close-line.svg'

ReactModal.setAppElement('#___gatsby')

export interface ModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  title?: string
  className?: string
}

let Modal: FC<ModalProps> = ({ isOpen, setIsOpen, title, children, className }) => (
  <ReactModal
    isOpen={isOpen}
    contentLabel={`${title} modal`}
    shouldCloseOnOverlayClick={true}
    onRequestClose={() => setIsOpen(false)}
    portalClassName={className}
    className="modal"
    overlayClassName="overlay"
  >
    <div className="close" onClick={() => setIsOpen(false)} role="button">
      <CloseIcon />
    </div>
    <div className="content">
      <TextSnippet title={title}>{children}</TextSnippet>
    </div>
  </ReactModal>
)

Modal = styled(Modal)`
  .modal {
    background-color: ${({ theme }) => theme.bgPrimary};
    border-radius: var(--radius);
    border: 1px solid ${({ theme }) => theme.separator};
    height: 80%;
    max-width: calc(var(--page-width) * 0.8);
    padding: var(--spacing-5) var(--spacing-8);
    box-sizing: border-box;
    position: relative;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .content {
    overflow: scroll;
    height: 100%;
  }

  p {
    color: ${({ theme }) => theme.textTertiary};
  }

  .close {
    position: absolute;
    left: 1rem;
    padding-top: 3px;
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }

    svg {
      width: 2rem;
      height: 2rem;
      fill: ${({ theme }) => theme.textPrimary};
    }
  }
`

export default Modal
