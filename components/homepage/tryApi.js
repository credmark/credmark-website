import * as React from 'react';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const tiers = [
    {
        name: 'Raw Data',
        href: '/product',
        includedFeatures: [
            'If you’re a data scientist, business intelligence analyst, or just a lover of raw data, head over to the Snowflake Marketplace and start using our data sets.',
            'These data sets are constantly updated. They sit behind our APIs and our modeling platform. The best curated data in DeFi.',
        ],
    },
]


export default function TryApi() {
    const [enabled, setEnabled] = useState(false)

    return (
        <>
            <div className="mx-5 pt-20 pb-20 max-w-7xl block lg:mx-auto">
                
                <div>
                    <h1 className="gradientFont">Try our APIs</h1>
                    <p>Access institutional-grade historical and real-time blockchain data instantly.</p>
                </div>
                <div>
                    <div className="max-w-7xl mx-auto px-4 lg:px-0">
                        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
                            <div className="hApi relative border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-black">
                                <div className="px-6 pt-8">
                                    <h2 className="text-3xl leading-6 font-bold openSansMedium text-green text-center">Token API</h2>
                                    <p className="text-white pt-10 text-sm">Access granular token data made for deep analysis and dApps.</p>
                                </div>
                                <div className="pb-4 px-6">
                                    <ul className="tick">
                                        <li className="text-white text-sm whiteTick py-2 pl-1">Current and historical token prices</li>
                                        <li className="text-white text-sm whiteTick py-2 pl-1">DEX liquidity</li>
                                        <li className="text-white text-sm whiteTick py-2 pl-1">Holdings</li>
                                        <li className="text-white text-sm whiteTick py-2 pl-1">Token metadata</li>
                                    </ul>
                                    <Link
                                        href="/product/?tokenApi=true#learnMore"
                                    >
                                        <div className="cursor-pointer lg:absolute lg:inset-x-0 lg:bottom-0 mb-5 mx-4 block bg-green border py-2 text-sm font-semibold text-black shadow-lg text-center">
                                            Learn more
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="relative border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-black">
                                <div className="px-6 pt-8">
                                    <h2 className="text-3xl leading-6 font-bold openSansMedium text-green text-center">Portfolio API</h2>
                                    <p className="text-white pt-10 text-sm">Trace all wallet activity and manage your portfolio with integrated risk models</p>
                                </div>
                                <div className="pb-4 px-6">
                                    <ul className="tick">
                                        <li className="text-white text-sm whiteTick py-2 pl-1">Token price and balance</li>
                                        <li className="text-white text-sm whiteTick py-2 pl-1">Wallet activity</li>
                                        <li className="text-white text-sm whiteTick py-2 pl-1">Risk metrics</li>
                                    </ul>
                                    <Link
                                        href="/product/?portfolioApi=true#learnMore"
                                    >
                                        <div className="cursor-pointer lg:absolute lg:inset-x-0 lg:bottom-0 mb-5 mx-4 block bg-green border py-2 text-sm font-semibold text-black shadow-lg text-center">
                                            Learn more
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="relative border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-black">
                                <div className="px-6 pt-8">
                                    <h2 className="text-3xl leading-6 font-bold openSansMedium text-green text-center">DeFi API</h2>
                                    <p className="text-white pt-10 text-sm">The gateway to DeFi, purpose-built for quants, modelers and web3 builders.</p>
                                </div>
                                <div className="pb-4 px-6">
                                    <ul className="tick">
                                        <li className="text-white text-sm whiteTick py-2 pl-1">Access 150+ financial models with one endpoint</li>
                                        <li className="text-white text-sm whiteTick py-2 pl-1">Create your own models with web3’s most robust modeling platform</li>
                                        <li className="text-white text-sm whiteTick py-2 pl-1">Check out Credmark Terminal, powered by our DeFi API</li>
                                    </ul>
                                    <Link
                                        href="/product/?defiApi=true#learnMore"
                                    >
                                        <div className="cursor-pointer lg:absolute lg:inset-x-0 lg:bottom-0 mb-5 mx-4 block bg-green border py-2 text-sm font-semibold text-black shadow-lg text-center">
                                            Learn more
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="relative border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-black">
                                <div className="px-6 pt-8">
                                    <h2 className="text-3xl leading-6 font-bold openSansMedium text-green text-center">Raw data</h2>
                                    <p className="text-white pt-10 text-sm">Fetch the latest block or access historical blockchain data to monitor or trace any activity from the genesis block. Our data is accessible via the Snowflake Marketplace. We currently support:</p>
                                </div>
                                <div className="pb-4 px-6">
                                    <ul className="tick">
                                        <li className="text-white text-sm whiteTick py-2 pl-1">Ethereum</li>
                                        <li className="text-white text-sm whiteTick py-2 pl-1">Polygon</li>
                                    </ul>
                                    <Link
                                        href="/product/?rawData=true#learnMore"
                                    >
                                        <div className="cursor-pointer lg:absolute lg:inset-x-0 lg:bottom-0 mb-5 mx-4 block bg-green border py-2 text-sm font-semibold text-black shadow-lg text-center">

                                            Learn more
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

