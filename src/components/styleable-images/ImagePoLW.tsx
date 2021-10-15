import { FC } from 'react'

import PoLWImage from '../../images/polw-background.svg'

interface ImagePoLWProps {
  className?: string
}

const ImagePoLW: FC<ImagePoLWProps> = (props) => <img {...props} src={PoLWImage} alt="PoLW image" />

export default ImagePoLW
