import Head from 'next/head'
import Footer from '../components/layout/footer'
import Contact from '../components/pages/contact'


export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact Us | CREDMARK</title>
                <meta content="Contact Us | CREDMARK" property="og:title" key="og:title" />
                <meta name="description" content="Find out the answers to any of your Credmark related questions." />
                <meta property="og:image" content="https://credmark.com/assets/credmark-og-image.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Contact />
                <Footer />
            </div>

        </>
    )
}