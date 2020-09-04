import { useState, useEffect } from 'react'

const useLocation = () => {
  const [pathname, setPathname] = useState('/')

  const locationPath =
    typeof window !== 'undefined' ? window.location.pathname : ''

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [locationPath])

  return pathname
}

export default useLocation
