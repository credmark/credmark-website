import Head from 'next/head'
import Subscribe from '../components/subscribe/subscribe'
import Footer from '../components/layout/footer'
import CFM from '../components/pages/credmark-model-framework'


export default function CMFPage() {
    return (
        <>
            <Head>
                <title>Data | CREDMARK</title>
                <meta content="Data | CREDMARK" property="og:title" key="og:title" />
                <meta name="description" content="Find out the answers to any of your Credmark related questions." />
                <meta property="og:image" content="https://credmark.com/assets/credmark-og-image.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <CFM />
                <Subscribe />
                <Footer />
            </div>

        </>
    )
}