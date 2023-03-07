import Link from 'next/link'
import React from "react";
import Nav from '../layout/nav'
import WhatItIs from '../model-framework/what-it-is';
import FetchData from '../model-framework/fetch-data';
import InAction from '../model-framework/inAction';
import QueryData from '../model-framework/queryAnyData';
import TrustedBy from '../global/trusted-by';
import AvailableOn from '../layout/availableOn';

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
                <AvailableOn />
            </div>
            <TrustedBy />
        </>
    )
}

