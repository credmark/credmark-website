import Link from 'next/link'
import Subscribe from '../subscribe/subscribe'
import Footer from '../layout/footer'
import React from "react";
import Nav from '../layout/nav'
import WhatItIs from '../model-framework/what-it-is';
import FetchData from '../model-framework/fetch-data';
import InAction from '../model-framework/inAction';
import QueryData from '../model-framework/queryAnyData';

export default function CFM() {
    return (
        <>
            <div className="bg-credmarkpurple cmfBg w-screen" >
                <Nav />
                <div className="cmfHeroBg">
                    <div className="max-w-7xl block mx-auto">
                        <h1 className="px-4 md:px-0 text-green pt-10 md:pt-24 leading-snug pb-3">
                            Build any crypto <br /> data Model</h1>
                        <p className="px-4 md:px-0 text-white leading-snug max-w-xl">
                            The Credmark Model Framework (CMF) is an open source Python framework for quants, data scientists, and web3 developers to create their own crypto data and expose it via API.
                        </p>
                        <div className="flex flex-wrap pb-16 md:pb-28 pt-6">
                            <button
                                type="button"
                                className="mx-4 lg:mx-0 text-white heroButton px-2 py-2 shadow-sm text-sm font-medium"
                            >
                                <Link href="https://docs.credmark.com/cmf-model-guide/" target="_blank" rel="noreferrer">
                                    <p>Develop Faster Now →</p>
                                </Link>
                            </button>
                            <button
                                type="button"
                                className="mx-4 lg:mx-0 text-white px-2 py-2 shadow-sm text-sm font-medium lg:ml-5"
                            >
                                <Link href="https://developer-docs.credmark.com/en/latest/index.html" target="_blank" rel="noreferrer">
                                    <p>Read Docs →</p>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <img className="block mx-auto mb-10" src="/assets/dropdown-button-icon.svg" alt="dropdown button" />
                </div>
                <WhatItIs />
                <QueryData />
                <FetchData />
                <InAction />
            </div>
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
                        <a href="https://docs.debtdao.finance/overview/what-is-debt-dao" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-8" width={80} src="../assets/debt-dao-logo.png" alt="Debt dao logo" /></a>
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </>
    )
}
