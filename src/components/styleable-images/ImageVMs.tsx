import { FC } from 'react'

import VMsImage from '../../images/vms.svg'

interface ImageVMsProps {
  className?: string
}

const ImageVMs: FC<ImageVMsProps> = (props) => <img {...props} src={VMsImage} alt="VMs image" />

export default ImageVMs
