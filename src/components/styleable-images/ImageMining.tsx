import { FC } from 'react'

import MiningImage from '../../images/mining.svg'

interface ImageMiningProps {
  className?: string
}

const ImageMining: FC<ImageMiningProps> = (props) => <img {...props} src={MiningImage} alt="Mining image" />

export default ImageMining
