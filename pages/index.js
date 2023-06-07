import Head from 'next/head'
import Link from 'next/link'
import Subscribe from '../components/subscribe/subscribe'
import Footer from '../components/layout/footer'
import React from "react";
import Nav from '../components/layout/nav'
import TryApi from '../components/homepage/tryApi'
import BuildModels from '../components/homepage/buildModels'
import TrustedBy from '../components/global/trusted-by';
import AvailableOn from '../components/layout/availableOn';
import Testimonials from '../components/product/testimonials';


export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Credmark - Where DeFi Builds Financial Models</title>
        <meta content="Credmark - Where DeFi Builds Financial Models" property="og:title" key="og:title" />
        <meta property="og:image" content="https://credmark.com/assets/credmark-og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-2 stickyCta text-center relative">
        <div>
          <Link href="/product?tokenApi=true#learnMore" rel="noreferrer"><p className="text-white text-base flex justify-center flex-wrap cursor-pointer"><span className="float-left pr-3">
            The only source of DeFi prices: our Token API. Simple. Powerful. Try it.</span><img className="hover:animate-pulse" src="../assets/arrow-white.svg" alt="Right arrow" /></p></Link>
        </div>
      </div>
      <div className="bg-credmarkpurple heroBg w-screen" >
        <Nav />
        <div className="max-w-7xl block mx-auto">
          <h1 className="px-4 md:px-0 text-green pt-10 md:pt-24 leading-snug pb-3">
            Simple. Powerful.
            <br />
            Accessible Blockchain Data</h1>
          <p className="px-4 md:px-0 text-white block mx-auto leading-snug">
            We curate blockchain data for developers. We keep it simple. We give you power.
          </p>
          <ul>
            <li className="text-white">Raw data for explorers.</li>
            <li className="text-white">Simple APIs for developers.</li>
            <li className="text-white">A modeling platform for quants.</li>
          </ul>
          <div className="flex flex-wrap pb-52 pt-6">
            <button
              type="button"
              className="w-36 mx-4 lg:mx-0 text-white heroButton px-2 py-2 shadow-sm text-sm font-medium"
            >
              <Link href="/product/?tokenApi=true">
                <p>Learn More</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="py-5 bg-black">
        <div className="bg-black">
          <dl className="rounded-lg bg-black shadow-lg sm:grid sm:grid-cols-3">
            <div className="flex flex-col text-center statBorder">
              <dt className="mt-2 text-xs leading-6 text-white courier">Raw data</dt>
              <dd className="text-4xl text-green py-2 bungee">25<span className="text-3xl"> TB</span></dd>
            </div>
            <div className="flex flex-col text-center statBorder">
              <dt className="mt-2 text-xs leading-6 text-white courier">Number of models</dt>
              <dd className="text-4xl text-green py-2 bungee">280</dd>
            </div>
            <div className="flex flex-col text-center">
              <dt className="mt-2 text-xs leading-6 text-white courier">API calls</dt>
              <dd className="text-4xl text-green py-2 bungee">2<span className="text-3xl"> billion</span></dd>
            </div>
          </dl>
        </div>
        <AvailableOn />
      </div>
     
      <TryApi />
      <BuildModels />
      <TrustedBy />
      <Testimonials />
      <Subscribe />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://gateway.credmark.com/v0/models/cmk/data?token=CMK&limit=1")
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}