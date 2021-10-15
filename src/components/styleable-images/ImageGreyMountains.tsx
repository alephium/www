import { FC } from 'react'

import GreyMountainsImage from '../../images/grey-mountains.svg'

interface ImageGreyMountainsProps {
  className?: string
}

const ImageGreyMountains: FC<ImageGreyMountainsProps> = (props) => (
  <img {...props} src={GreyMountainsImage} alt="Grey mountains image" />
)

export default ImageGreyMountains
