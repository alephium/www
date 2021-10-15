import { FC } from 'react'

import YellowMountainsImage from '../../images/yellow-mountains.svg'

interface ImageYellowMountainsProps {
  className?: string
}

const ImageYellowMountains: FC<ImageYellowMountainsProps> = (props) => (
  <img {...props} src={YellowMountainsImage} alt="Yellow mountains image" />
)

export default ImageYellowMountains
