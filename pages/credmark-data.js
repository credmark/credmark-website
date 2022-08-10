import Head from 'next/head'
import TryApi from '../components/homepage/tryApi'
import DataTrust from '../components/data/dataTrust'
import Subscribe from '../components/subscribe/subscribe'
import Footer from '../components/layout/footer'
import Nav from '../components/layout/nav'
import BlockchainCoverage from '../components/data/blockChainCoverage'


export default function DataPage() {
    return (
        <>
            <Head>
                <title>Data | CREDMARK</title>
                <meta content="Data | CREDMARK" property="og:title" key="og:title" />
                <meta name="description" content="Find out the answers to any of your Credmark related questions." />
                <meta property="og:image" content="https://credmark.com/assets/credmark-og-image.png" />
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

            <div className="bg-credmarkpurple heroBg w-screen" >
                <Nav />
                <DataTrust />
                <BlockchainCoverage />
                <div className="bg-white">
                <TryApi />
                </div>
                <Subscribe />
                <Footer />
            </div>

        </>
    )
}