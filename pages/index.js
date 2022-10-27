import Head from 'next/head'
import Link from 'next/link'
import Subscribe from '../components/subscribe/subscribe'
import Footer from '../components/layout/footer'
import React, { useState } from "react";
import Nav from '../components/layout/nav'
import TryApi from '../components/homepage/tryApi'
import BuildModels from '../components/homepage/buildModels'


export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>CREDMARK</title>
        <meta content="Credmark" property="og:title" key="og:title" />
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

      <div className="py-2 stickyCta text-center relative">
        <div>
          <Link href="/product?tokenApi=true#learnMore" rel="noreferrer"><p className="text-white text-base flex justify-center flex-wrap"><span className="float-left pr-3">
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
              <dd className="text-4xl text-green py-2 bungee">10.5<span className="text-3xl"> TB</span></dd>
            </div>
            <div className="flex flex-col text-center statBorder">
              <dt className="mt-2 text-xs leading-6 text-white courier">Number of models</dt>
              <dd className="text-4xl text-green py-2 bungee">114</dd>
            </div>
            <div className="flex flex-col text-center">
              <dt className="mt-2 text-xs leading-6 text-white courier">API calls</dt>
              <dd className="text-4xl text-green py-2 bungee">2<span className="text-3xl"> billion</span></dd>
            </div>
          </dl>
        </div>
      </div>
      <TryApi />
      <BuildModels />
      <div>
        <div className="px-5 py-10 md:pt-28">
          <h2 className="text-black max-w-7xl block m-auto font-extrabold text-center">
            TRUSTED BY
          </h2>
        </div>
        <div className="max-w-4xl block m-auto">
          <div className="grid grid-cols-1 m-auto block md:grid-cols-4 px-5 pb-0 md:pb-10">
          <a href="https://coinshift.xyz/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={150} src="../assets/Coinshift.svg" alt="Coinshift logo" /></a>
          <a href="https://www.yield.app/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={130} src="../assets/yieldapp-logo.svg" alt="Yield App logo" /></a>
          <a href="https://picante.io/" target="_blank" rel="noreferrer"><img className="block mx-auto py-7" width={150} src="../assets/picante-logo.svg" alt="Picante logo" /></a>
          <a href="https://exponent.cx/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={170} src="../assets/exponent.jpeg" alt="Exponent logo" /></a>
          </div>
          <div className="max-w-5xl block m-auto grid grid-cols-1 m-auto block md:grid-cols-5 px-5 pb-10 md:pb-20 md:px-0">
          <a href="https://dlab.vc/" target="_blank" rel="noreferrer"><img className="py-5 block mx-auto" width={130} src="../assets/dlab-logo.svg" alt="DLAB logo" /></a>
            <a href="https://www.longhash.com/en" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-10" width={150} src="../assets/longhash-logo.svg" alt="Long Hash Ventures logo" /></a>
            <a href="https://api3.org/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-10" width={130} src="../assets/API3-logo.svg" alt="API3 logo" /></a>
            <a href="https://irulast.com/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-10" width={130} src="../assets/irulast-logo.svg" alt="Irulast logo" /></a>
            <a href="https://docs.debtdao.finance/overview/what-is-debt-dao" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-8" width={140} src="../assets/debt-dao-logo.png" alt="Irulast logo" /></a>
          </div>
        </div>
      </div>
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