import { FC } from 'react'

import SmartContractImage from '../../images/smart-contract.svg'

interface ImageSmartContractProps {
  className?: string
}

const ImageSmartContract: FC<ImageSmartContractProps> = (props) => (
  <img {...props} src={SmartContractImage} alt="Smart contract image" />
)

export default ImageSmartContract
