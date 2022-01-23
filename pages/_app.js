import '../styles/globals.css'
import * as gtag from '../lib/gtag'
import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    hotjar.initialize(2794251, 6)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
