import { FC } from 'react'

import BirdsImage from '../../images/birds.svg'

interface ImageBirdsProps {
  className?: string
}

const ImageBirds: FC<ImageBirdsProps> = (props) => <img {...props} src={BirdsImage} alt="Birds image" />

export default ImageBirds
