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
            </Head>

            <div className="nav">
                <FAQ />
            </div>

        </>
    )
}