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
                        <div className="bg-bggray p-4 lg:p-24 border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 shadow-lg">
                            <div>
                                <h2 className="openSansMedium leading-6 text-credmarkpurple text-2xl lg:text-5xl pb-3 pt-10 lg:pt-0">Raw Data</h2>
                                <p className="text-base openSansMedium">This is a new initiative. We hope you find it useful.</p>
                                <p className="text-base">Underpinning all of our software is an incredible collection of blockchain data, over 15 terabytes of data.</p>
                                <p className="text-base">We have organized <span className="openSansMedium">every byte of the Ethereum blockchain into a database</span> that is easily searchable. We call this dataset Ethereum Core. </p>
                                <p className="text-base">In addition we have decoded the inputs and outputs of every validated smart contract and made that data easily searchable. This is a big deal. This data is stored on chain as binary blobs, which makes it 100% useless in its native state. Thanks to some clever automation, we decode and index all of this data so that our platform developers can use it. We call this dataset Ethereum Smart Contract.</p>
                                <p className="text-base">Lots more datasets just like these are coming soon.</p>
                                <p className="text-base">Because we use Snowflake, and Snowflake has a Marketplace that allows us to publish datasets, we’ve done just that.</p>
                                <p className="text-base openSansMedium pt-5">This is where you can find them:</p>
                            </div>
                            <div className="px-4 lg:px-0">
                                <div className="mt-4 overflow-x-auto sm:-mx-6">
                                    <table className="min-w-full border-1 border-bggray">
                                        <thead className="bg-credmarkpurple">
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 border-1 border-b-linepurple border-bggray">
                                                    Dataset
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-white sm:table-cell border-1 border-b-linepurple border-bggray"
                                                >
                                                    Where to find it
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-white lg:table-cell border-1 border-b-linepurple border-bggray"
                                                >
                                                    Price (per month)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="border-1 border-b-linepurple border-bggray">
                                            {rawData.map((rawData) => (
                                                <tr key={rawData}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 border-1 border-b-linepurple border-bggray">
                                                        {rawData.documentation}
                                                    </td>
                                                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell border-1 border-b-linepurple border-bggray">
                                                        <a href={rawData.documentationLink} target="_blank" rel="noreferrer">
                                                            {rawData.documentationLink}
                                                        </a>
                                                    </td>
                                                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell border-1 border-b-linepurple border-bggray">
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
                                <div className="grid grid-cols-1 lg:grid-cols-2 border-1 border-y-credmarkpurple border-bggray mt-5">
                                <span className="flex pb-3 border-1 lg:border-r-credmarkpurple border-bggray lg:pl-5"><img src="/assets/ethereum-core.svg" alt="tick" width={80} /><p className="text-lg lg:text-3xl text-credmarkpurple py-14 pl-3 lg:pl-5">Ethereum Core</p></span>
                                <span className="flex pb-3 lg:pl-5"><img src="/assets/ethereum-smart-contract.svg" alt="tick" width={80} /><p className="text-lg lg:text-3xl text-credmarkpurple py-14 pl-3 lg:pl-5">Ethereum Smart Contract</p></span>
                                </div>
                                <p className="uppercase text-credmarkpurple text-3xl pt-10 pb-3 openSansMedium">Who needs it?</p>
                                <p className="text-base">We do, of course, since we’ve built the company on this data. We know there are a lot of other use cases that will emerge in the future. We can’t imagine what they’ll all be, but so many people have been asking us for direct access to our database (a lot from the BI community) that we came to the conclusion that it was important to <span className="openSansMedium">make the data available.</span>
                                </p>
                                <p className="text-base">We’ve just released our first two data sets and are curious to see how they are used. The current pricing is introductory. Anyone who signs up now will pay that price for life. Once we figure out what these data sets are worth to our customers, we’ll adjust the price accordingly.
                                </p>
                                <p className="text-base"><span className="openSansMedium">If you’re a data analyst, quant, or data scientist working in crypto and find yourself needing to dig into DeFi, start here.</span> Besides getting curated, reliable data (Have we mentioned that Credmark depends on it?), you’ll be getting an incredible deal. In exchange we’d like to ask you to talk to us about what you’re doing so that we can improve things, and maybe even get a bit of marketing juice from a testimonial.
                                </p>


                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="rounded-md applicationsBg mt-16 py-5 lg:py-16 p-5 mx-2">
                                        <p className="max-w-sm mx-auto openSansMedium uppercase text-white text-center font-bold text-3xl pb-2 lg:pb-8">Start using the Token API</p>
                                        <p className="text-center pb-8">30 day free trial if you’re unsure or start building immediately!</p>
                                        <div className="flex justify-center">
                                            <button
                                                type="button"
                                                className="mx-2 lg:mx-0 text-black bg-green px-5 py-2 mb-10 shadow rounded-md"
                                            >
                                                <Link href="https://access.credmark.com/" target="_blank" rel="noreferrer">
                                                    <p className="text-base">Sign up</p>
                                                </Link>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="rounded-md communityBoxBg mt-16 py-5 lg:py-16 p-5 mx-2">
                                        <p className="max-w-sm mx-auto openSansMedium uppercase text-credmarkpurple text-center font-bold text-3xl pb-2 lg:pb-8">Build with the community</p>
                                        <p className="text-center pb-8">Join our vibrant community of developers and modelers. Build faster together.</p>
                                        <div className="flex justify-center">
                                            <button
                                                type="button"
                                                className="mx-2 lg:mx-0 text-black bg-green px-5 py-2 mb-10 shadow rounded-md"
                                            >
                                                <Link href="https://discord.com/invite/3dSfMqP3d4" target="_blank" rel="noreferrer">
                                                    <p className="text-base">Join now</p>
                                                </Link>
                                            </button>
                                        </div>
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
