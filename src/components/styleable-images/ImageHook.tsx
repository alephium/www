import { FC } from 'react'

import HookImage from '../../images/hook.svg'

interface ImageHookProps {
  className?: string
}

const ImageHook: FC<ImageHookProps> = (props) => <img {...props} src={HookImage} alt="Hook image" />

export default ImageHook
