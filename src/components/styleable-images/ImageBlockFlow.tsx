import { FC } from 'react'

import BlockFlowImage from '../../images/blockflow.svg'

interface ImageBlockFlowProps {
  className?: string
}

const ImageBlockFlow: FC<ImageBlockFlowProps> = (props) => <img {...props} src={BlockFlowImage} alt="BlockFlow image" />

export default ImageBlockFlow
