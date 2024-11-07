import Head from "next/head";
import Link from "next/link";
import Subscribe from "../components/subscribe/subscribe";
import Footer from "../components/layout/footer";
import React from "react";
import Nav from "../components/layout/nav";
import TryApi from "../components/homepage/tryApi";
import BuildModels from "../components/homepage/buildModels";
import TrustedBy from "../components/global/trusted-by";
import AvailableOn from "../components/layout/availableOn";
import Testimonials from "../components/product/testimonials";

export default function Home({ data }) {
  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>Credmark - DeFi Transformations</title>
        <meta
          name="description"
          content="Credmark is a world-class crypto modelling platform. It provides access to on-chain and off-chain data via an intuitive development framework in Python."
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://credmark.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Credmark - DeFi Transformations" />
        <meta
          property="og:description"
          content="Credmark is a world-class crypto modelling platform. It provides access to on-chain and off-chain data via an intuitive development framework in Python."
        />
        <meta
          property="og:image"
          content="https://credmark.com/assets/credmark-og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="credmark.com" />
        <meta property="twitter:url" content="https://credmark.com" />
        <meta name="twitter:title" content="Credmark - DeFi Transformations" />
        <meta
          name="twitter:description"
          content="Credmark is a world-class crypto modelling platform. It provides access to on-chain and off-chain data via an intuitive development framework in Python."
        />
        <meta
          name="twitter:image"
          content="https://credmark.com/assets/credmark-og-image.png"
        />

        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Credmark" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="py-2 stickyCta text-center relative">
        <div>
          <Link href="/product?tokenApi=true#learnMore" rel="noreferrer">
            <p className="text-white text-base flex justify-center flex-wrap cursor-pointer">
              <span className="float-left pr-3">
                The only source of DeFi prices: our Token API. Simple. Powerful.
                Try it.
              </span>
              <img
                className="hover:animate-pulse"
                src="../assets/arrow-white.svg"
                alt="Right arrow"
              />
            </p>
          </Link>
        </div>
      </div>
      <div className="bg-credmarkpurple heroBg w-screen">
        <Nav />
        <div className="max-w-7xl block mx-auto">
          <h1 className="px-4 md:px-0 text-green pt-10 md:pt-24 leading-snug pb-3">
            DeFi Transformations
            <br />
            Build. Access.
          </h1>
          <p className="px-4 md:px-0 text-white block mx-auto leading-snug">
            We curate blockchain data for developers. We keep it simple. We give
            you power.
          </p>
          <ul>
            <li className="text-white">Raw data for explorers.</li>
            <li className="text-white">Simple APIs for developers.</li>
            <li className="text-white">
              A transformation platform for quants.
            </li>
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
              <dt className="mt-2 text-xs leading-6 text-white courier">
                Raw data
              </dt>
              <dd className="text-4xl text-green py-2 bungee">
                40<span className="text-3xl"> TB</span>
              </dd>
            </div>
            <div className="flex flex-col text-center statBorder">
              <dt className="mt-2 text-xs leading-6 text-white courier">
                Number of models
              </dt>
              <dd className="text-4xl text-green py-2 bungee">400</dd>
            </div>
            <div className="flex flex-col text-center">
              <dt className="mt-2 text-xs leading-6 text-white courier">
                API calls
              </dt>
              <dd className="text-4xl text-green py-2 bungee">
                4<span className="text-3xl"> billion</span>
              </dd>
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
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://gateway.credmark.com/v0/models/cmk/data?token=CMK&limit=1"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
