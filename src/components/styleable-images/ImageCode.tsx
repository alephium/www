import { FC } from 'react'

import CodeImage from '../../images/code.svg'

interface ImageCodeProps {
  className?: string
}

const ImageCode: FC<ImageCodeProps> = (props) => <img {...props} src={CodeImage} alt="Code image" />

export default ImageCode
