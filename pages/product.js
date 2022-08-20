import Head from 'next/head'
import ProductHero from '../components/product/hero'
import PricingPlan from '../components/product/pricingPlan'
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
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>

      <div className="productBg">
        <ProductHero />
        <PricingPlan />
        <Applications />
      </div>
    </>
  )
}
