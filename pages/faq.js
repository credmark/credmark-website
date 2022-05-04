import FAQ from '../components/pages/faq'
import Head from 'next/head'


export default function FAQPage() {
    return (
        <>
            <Head>
                <title>FAQ | CREDMARK</title>
                <meta content="FAQ | Credmark" property="og:title" key="og:title" />
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

            <div className="nav">
                <FAQ />
            </div>

        </>
    )
}