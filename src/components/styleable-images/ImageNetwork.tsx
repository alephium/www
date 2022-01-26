import NetworkImage from '../../images/network.svg'

interface ImageNetworkProps extends React.HTMLProps<HTMLImageElement> {
  crossOrigin?: '' | 'anonymous' | 'use-credentials' | undefined
  className?: string
}

const ImageNetwork = (props: ImageNetworkProps) => <img {...props} src={NetworkImage} alt="Network image" />

export default ImageNetwork
