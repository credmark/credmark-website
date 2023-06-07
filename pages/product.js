import Head from 'next/head'
import ProductHero from '../components/product/hero'
import Applications from '../components/product/applications'

export default function ProductPage() {
    return (
    <>
      <Head>
        <title>Product | CREDMARK</title>
        <meta content="Product | Credmark" property="og:title" key="og:title" />
        <meta name="description" content="Check out our product" />
        <meta property="og:image" content="https://credmark.com/assets/credmark-og-image.png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="productBg">
        <ProductHero />
        <Applications />
      </div>
    </>
  )
}
