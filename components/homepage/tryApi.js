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
        name: 'DeFi API',
        href: '/produc',
        includedFeatures: [
            'Experts only!',
            'Run any model on our platform. Over 100 already available.',
            'Can’t find what you want? Build it yourself, or commission an expert to do it for you. ',
            'This API gives you access to the most powerful modeling platform in DeFi.',
        ],
        ctaLink: [
            'Want to see what you could build? Check out our Terminal. It’s 100% powered by our DeFi API.',
        ]
    },
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
                                    <p className="text-white pt-10 text-sm">Everything you wanted to know about tokens but were afraid to ask.</p>
                                </div>
                                <div className="pb-4 px-6">
                                    <ul>
                                        <li className="text-white text-sm py-1">Current and historical token prices</li>
                                        <li className="text-white text-sm py-1">DEX liquidity</li>
                                        <li className="text-white text-sm py-1">Holdings</li>
                                        <li className="text-white text-sm py-1">Token metadata</li>
                                    </ul>
                                    <div className="lg:absolute lg:inset-x-0 lg:bottom-0 mb-5 mx-4 block bg-green border py-2 text-sm font-semibold text-black shadow-lg text-center">
                                    <Link
                                        href="/product"
                                    >
                                        Learn more
                                    </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="relative border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-black">
                                <div className="px-6 pt-8">
                                    <h2 className="text-3xl leading-6 font-bold openSansMedium text-green text-center">Portfolio API</h2>
                                    <p className="text-white pt-10 text-sm">Give us any number of wallet addresses and we’ll tell you what’s in them.</p>
                                </div>
                                <div className="pb-4 px-6">
                                    <ul>
                                        <li className="text-white text-sm py-1">Prices</li>
                                        <li className="text-white text-sm py-1">Activity</li>
                                        <li className="text-white text-sm py-1">Risk metrics</li>
                                    </ul>
                                    <p className="text-white pt-2 text-sm px-6 pb-5">Coming soon.</p>
                                    <div className="lg:absolute lg:inset-x-0 lg:bottom-0 mb-5 mx-4 block bg-green border py-2 text-sm font-semibold text-black shadow-lg text-center">
                                    <Link
                                        href="/product"
                                    >
                                        Learn more
                                    </Link>
                                    </div>
                                </div>
                            </div>

                            {tiers.map((tier) => (
                                <div key={tier.name} className="hApi relative border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-black">
                                    <div className="px-6 pt-8 pb-3">
                                        <h2 className="text-3xl leading-6 font-bold openSansMedium text-green text-center">{tier.name}</h2>
                                    </div>
                                    <div className="pb-4 px-6">
                                        <ul role="list" className="mt-6 space-y-4 p-0">
                                            {tier.includedFeatures.map((feature) => (
                                                <li key={feature} className="flex space-x-3">
                                                    <span className="text-sm text-white">{feature}</span>
                                                </li>

                                            ))}
                                        </ul>
                                        <p><a href="https://app.credmark.com/" target="_blank" rel="noreferrer" className="text-white text-sm mb-20 pb-5">{tier.ctaLink}</a></p>
                                        <a
                                            href={tier.href}
                                            className="lg:absolute lg:inset-x-0 lg:bottom-0 mb-5 mx-4 block bg-green border border-gray-800 py-2 text-sm font-semibold text-black shadow-lg text-center"
                                        >
                                            Learn more
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

