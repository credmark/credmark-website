import { CheckIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Link from 'next/link'

const rawData = [
    { documentation: 'Etheruem Core', documentationLink: 'https://www.snowflake.com/datasets/credmark-labs-ethereum-core/', price: 'Free', },
    { documentation: 'Ethereum Smart Contract (coming soon)', documentationLink: 'https://www.snowflake.com/datasets/credmark-labs-ethereum-core/', price: '$500', },
    { documentation: 'Polygon Smart Contract (coming soon)', documentationLink: 'https://www.snowflake.com/datasets/credmark-labs-ethereum-core/', price: 'TBD', },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function RawData() {
    const [enabled, setEnabled] = useState(false)
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <>
            <div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4 sm:space-y-0 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 py-16">
                        <div className="bg-white p-4 lg:p-24 border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 shadow-lg">
                            <div>
                                <h2 className="openSansMedium leading-6 text-credmarkpurple text-2xl lg:text-5xl pb-3 pt-10 lg:pt-0">Raw Data</h2>
                                <p className="text-base">This is a new initiative. We hope you find it useful.</p>
                                <p className="text-base">Underpinning all of our software is an incredible collection of blockchain data, over 15 terabytes of data.</p>
                                <p className="text-base">We have organized every byte of the Ethereum blockchain into a database that is easily searchable. We call this dataset Ethereum Core. </p>
                                <p className="text-base">In addition we have decoded the inputs and outputs of every validated smart contract and made that data easily searchable. This is a big deal. This data is stored on chain as binary blobs, which makes it 100% useless in its native state. Thanks to some clever automation, we decode and index all of this data so that our platform developers can use it. We call this dataset Ethereum Smart Contract.</p>
                                <p className="text-base">Lots more datasets just like these are coming soon.</p>
                                <p className="text-base">Because we use Snowflake, and Snowflake has a Marketplace that allows us to publish datasets, we’ve done just that.</p>
                                <p className="text-base pt-5">This is where you can find them:</p>
                            </div>
                            <div className="px-4 lg:px-0">
                                <div className="mt-4 overflow-x-auto shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                    Dataset
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                                                >
                                                    Where to find it
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                                >
                                                    Price (per month)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {rawData.map((rawData) => (
                                                <tr key={rawData}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                        {rawData.documentation}
                                                    </td>
                                                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                                                        <a href={rawData.documentationLink} target="_blank" rel="noreferrer">
                                                            {rawData.documentationLink} 
                                                        </a>
                                                    </td>
                                                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                                                        {rawData.price}
                                                    </td>

                                                </tr>
                                            ))}
                                                <tr>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                        Polygon Core (coming soon)
                                                    </td>
                                                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                                                            Coming Soon                                                
                                                    </td>
                                                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">
                                                        Free
                                                    </td>

                                                </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div>
                                <p className="uppercase text-credmarkpurple text-3xl pt-10 pb-3 openSansMedium">What you get</p>
                                <p className="text-base">
                                    Data sets that auto-update every block. Really. That’s what’s so cool about the Snowflake setup. Every time we update our dataset, yours is updated as well. It’s magic.</p>
                                <p className="openSansMedium">Ethereum Core</p>
                                <p className="openSansMedium">Ethereum Smart Contract</p>

                                <p className="uppercase text-credmarkpurple text-3xl pt-10 pb-3 openSansMedium">Who needs it?</p>
                                    <p className="text-base">We do, of course, since we’ve built the company on this data. We know there are a lot of other use cases that will emerge in the future. We can’t imagine what they’ll all be, but so many people have been asking us for direct access to our database (a lot from the BI community) that we came to the conclusion that it was important to make the data available.
                                    </p>
                                    <p className="text-base">We’ve just released our first two data sets and are curious to see how they are used. The current pricing is introductory. Anyone who signs up now will pay that price for life. Once we figure out what these data sets are worth to our customers, we’ll adjust the price accordingly. 
                                    </p>
                                    <p className="text-base">If you’re a data analyst, quant, or data scientist working in crypto and find yourself needing to dig into DeFi, start here. Besides getting curated, reliable data (Have we mentioned that Credmark depends on it?), you’ll be getting an incredible deal. In exchange we’d like to ask you to talk to us about what you’re doing so that we can improve things, and maybe even get a bit of marketing juice from a testimonial. 
                                    </p>
                                <div className="rounded-md applicationsBg mt-16 py-5 lg:py-20 p-5">
                                    <p className="openSansMedium uppercase text-white text-center font-bold text-3xl pb-2 lg:pb-8">Start using the Snowflake free trial</p>
                                    <p className="text-center pb-8">30 day free trial if you’re unsure or start building immediately!</p>
                                    <div className="flex justify-center">
                                        <button
                                            type="button"
                                            className="mx-2 lg:mx-0 text-black bg-green px-5 py-2 mb-10 shadow-sm text-sm font-bold"
                                        >
                                            <Link href="https://developer-docs.credmark.com/en/latest/usage.html">
                                                <p>Sign up</p>
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                                <div className="pt-5 lg:pt-16">
                                    <h4 className="uppercase text-credmarkpurple text-3xl pb-3 text-center">Build with the community</h4>
                                    <p className="text-center max-w-2xl mx-auto">
                                        Join our vibrant community of developers and modelers. Build faster together.
                                    </p>
                                    <div className="flex justify-center mt-8 mb-8 lg:mb-0">
                                        <button
                                            type="button"
                                            className="mx-2 lg:mx-0 text-black border-2 border-green px-5 py-2 shadow-sm text-sm font-bold"
                                        >
                                            <Link href="https://discord.com/invite/3dSfMqP3d4">
                                                <p>Join Now</p>
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
