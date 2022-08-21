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
        name: 'Portfolio API',
        href: '#learnMore',
        includedFeatures: ['Give us any number of wallet addresses and we’ll tell you what’s in them.'],
    },
    {
        name: 'Defi API',
        href: '#learnMore',
        includedFeatures: [
            'Experts only!',
            'Run any model on our platform. Over 100 already available.',
            'Can’t find what you want? Build it yourself, or commission an expert to do it for you. ',
            'This API gives you access to the most powerful modeling platform in DeFi.',
            'Want to see what you could build? Check out our Terminal, powered by our DeFi API.',
        ],
    },
    {
        name: 'Raw Data',
        href: '#learnMore',
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
                    <h1 className="gradientFont">Try our API</h1>
                    <p>Access institutional grade historical and real-time blockchain data instantly.</p>
                </div>
                <div>
                    <div className="max-w-7xl mx-auto px-4 lg:px-0">
                        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
                            <div className="relative border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-black">
                                <div className="px-6 pt-8 pb-3">
                                    <h2 className="text-3xl leading-6 font-bold openSansMedium text-green text-center">Token API</h2>
                                </div>
                                <div>
                                    <ul>
                                        <li className="text-white text-sm py-2">Current and historical token prices.</li>
                                        <li className="text-white text-sm py-2">DEX liquidity.</li>
                                        <li className="text-white text-sm py-2">Token metadata.</li>
                                    </ul>
                                    <a
                                        href="/product"
                                        className="absolute inset-x-0 bottom-0 mb-5 mx-4 block bg-green border border-gray-800 py-2 text-sm font-semibold text-black shadow-lg text-center"
                                    >
                                        Learn more
                                    </a>
                                </div>
                            </div>
                            {tiers.map((tier) => (
                                <div key={tier.name} className="relative border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-black">
                                    <div className="px-6 pt-8 pb-3">
                                        <h2 className="text-3xl leading-6 font-bold openSansMedium text-green text-center">{tier.name}</h2>
                                    </div>
                                    <div className="pb-4 px-6">
                                        <ul role="list" className="mt-6 mb-14 space-y-4 p-0">
                                            {tier.includedFeatures.map((feature) => (
                                                <li key={feature} className="flex space-x-3">
                                                    <span className="text-sm text-white">{feature}</span>
                                                </li>

                                            ))}
                                        </ul>
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

