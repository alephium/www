import { useEffect } from 'react'

const BanxaCallback = () => {
  useEffect(() => window.location.replace('/onramp-callback'), [])

  return null
}

export default BanxaCallback
