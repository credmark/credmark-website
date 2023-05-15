import Head from 'next/head'
import PricingPlan from '../components/product/pricingPlan'
import PricingHero from '../components/pricing/hero'
import TrustedBy from '../components/global/trusted-by'
import Testimonials from '../components/product/testimonials'
import Footer from '../components/layout/footer'
import MultiChainSupport from '../components/pricing/multiChainSupport'

export default function PricingPage() {
    return (
    <>
      <Head>
        <title>Pricing | CREDMARK</title>
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

      <div className="heroBg">
        <PricingHero />
        <PricingPlan />
        <MultiChainSupport />
        <TrustedBy />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}
