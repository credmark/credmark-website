import Head from 'next/head'
import Homepage from '../components/pages/homepage'
import Link from 'next/link'
import HeaderHome from "../components/layout/headerHome"
import Tools from "../components/homepage/tools"
import Subscribe from '../components/subscribe/subscribe'
import Footer from '../components/layout/footer'
import React, { useState } from "react";
import items from "../styles/homeReportsData"
import WhatWeDo from '../components/homepage/whatWeDo'
import Community from '../components/homepage/community'
import TypeAnimation from 'react-type-animation';
import Nav from '../components/layout/nav'
import ToolsMobile from '../components/homepage/toolsMobile'

import DotAnimation from "../components/layout/dotsHeader"

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

      <div className="py-2 bg-black text-center relative">
        <div>
          <a href="https://github.com/credmark/credmark-models-py/blob/main/README.md" target="_blank" rel="noreferrer"><p className="text-white text-base flex justify-center flex-wrap courier"><span className="float-left pr-3">The Credmark Model Framework is now in Open Beta! | Start building DeFi models in python with reliable crypto data</span><img className="hover:animate-pulse" src="../assets/arrow-white.svg" alt="Right arrow" /></p></a>
        </div>
      </div>
      <div className="bg-credmarkpurple heroBg w-screen" >
        <Nav />
        <h1 className="px-4 md:px-0 text-green text-5xl lg:text-7xl pt-10 md:pt-24 max-w-7xl block mx-auto leading-snug pb-3">
          ON-CHAIN DATA WITH 
          <br/>
          VERIFIABLE TRANSPARENCY</h1>
          <p className="px-4 md:px-0 text-white text-xl max-w-7xl block mx-auto leading-snug">
            The only source of blockchain data that provides visible traceability and <br/> granular context so you can develop Apps and build models with confidence.
          </p>
        <div className="max-w-7xl block mx-auto">
          <div className="flex flex-wrap pb-52 pt-6">
            <button
              type="button"
              className="w-36 mx-2 lg:mx-0 text-white heroButton mt-5 px-2 py-2 shadow-sm text-sm font-medium"
            >
              <Link href="https://app.credmark.com/">
                <p>Start building</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="py-5 bg-black">
        <div className="bg-black">
          <dl className="rounded-lg bg-black shadow-lg sm:grid sm:grid-cols-3">
            <div className="flex flex-col text-center statBorder">
              <dt className="mt-2 text-xs leading-6 text-white courier">Model contributors</dt>
              <dd className="text-4xl text-green py-2 bungee">17</dd>
            </div>
            <div className="flex flex-col text-center statBorder">
              <dt className="mt-2 text-xs leading-6 text-white courier">Number of models</dt>
              <dd className="text-4xl text-green py-2 bungee">114</dd>
            </div>
            <div className="flex flex-col text-center">
              <dt className="mt-2 text-xs leading-6 text-white courier">Total commits</dt>
              <dd className="text-4xl text-green py-2 bungee">819</dd>
            </div>
          </dl>
        </div>
      </div>
      <WhatWeDo />
      <Community />
      <div className="hidden lg:block">
        <Tools />
      </div>
      <div className="block lg:hidden">
        <ToolsMobile />
      </div>
      <div>
        <div className="px-5 py-10 md:pt-28">
          <strong>
            <h2 className="pb-10 roboto max-w-7xl block m-auto font-extrabold text-center text-5xl md:text-4xl">
              PARTNERS
            </h2>
          </strong>
        </div>
        <div className="max-w-4xl block m-auto">
          <div className="grid grid-cols-1 m-auto block md:grid-cols-3 px-5 pb-0 md:pb-10">
            <a href="https://dlab.vc/" target="_blank" rel="noreferrer"><img className="py-5 block mx-auto" width={150} src="../assets/dlab-logo.svg" alt="DLAB logo" /></a>
            <a href="https://www.longhash.com/en" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-10" width={150} src="../assets/longhash-logo.svg" alt="Long Hash Ventures logo" /></a>
            <a href="https://api3.org/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-10" width={150} src="../assets/API3-logo.svg" alt="API3 logo" /></a>
          </div>
          <div className="grid grid-cols-1 m-auto block md:grid-cols-4 px-5 pb-10 md:pb-20 md:px-0">
            <a href="https://steadystate.finance/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={200} src="../assets/steady-state-logo.svg" alt="Steady State logo" /></a>
            <a href="https://coinshift.xyz/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={150} src="../assets/Coinshift.svg" alt="Coinshift logo" /></a>
            <a href="https://www.yield.app/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={150} src="../assets/yieldapp-logo.svg" alt="Yield App logo" /></a>
            <a href="https://www.alchemist.wtf/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={180} src="../assets/alchemist.svg" alt="Alchemist logo" /></a>
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
