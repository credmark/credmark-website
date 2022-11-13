import { CheckIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Link from 'next/link'

const people = [
    { documentation: 'Token API', documentationLink: 'https://gateway.credmark.com/api/#/Token%20API', image: '/assets/documentation-api.svg' },
    { documentation: 'Token concepts', documentationLink: 'https://docs.credmark.com/token-api-concepts/basics/introduction', image: '/assets/documentation-api.svg' },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TokenApi() {
    const [enabled, setEnabled] = useState(false)
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <>
            <div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4 sm:space-y-0 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 py-16">
                        <div className="bg-bggray p-4 lg:p-24 border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 shadow-lg">
                            <div>
                                <h2 className="openSansMedium leading-6 text-credmarkpurple text-2xl lg:text-5xl pb-3 pt-10 lg:pt-0">Token API</h2>
                                <p className="texl-lg">Easy access to current and historical token prices, liquidity, holdings, and token metadata.</p>
                            </div>
                            <div className="grid lg:grid-cols-2 pb-20">
                                <div className="lg:mr-5">
                                    <span className="flex pt-9 pb-3"><img className="mr-4" src="/assets/token-api-prices.svg" alt="tick" width={120} /><p className="text-2xl text-lightpurple font-bold pt-10 openSansMedium">Prices</p></span>
                                    <p className="text-base">Our basic “price” function <span className="openSansMedium">returns the actual DeFi price of tokens.</span> It is derived from aggregate DEX activity. For exotic tokens that are not traded on DEXes, we rely on an oracle that reports prices from <span className="openSansMedium">centralized exchanges.</span> This price function is the one most likely to return a result.</p>
                                    <p className="text-base">If your needs are more specific, you can explicitly request a DeFi price or an oracle price. A DeFi price is a liquidity weighted average price across DEXes.</p>
                                    <p className="text-base">If your needs are even narrower, you can <span className="openSansMedium">request a price from a specific DEX. This is power user territory.</span></p>
                                </div>


                                <div className="lg:ml-5">
                                    <span className="flex pt-9 pb-3"><img className="mr-4" src="/assets/token-api-liquidity.svg" alt="tick" width={120} /><p className="text-2xl text-lightpurple font-bold pt-10"><span className="openSansMedium">Liquidity</span></p></span>
                                    <p className="text-base">
                                        Sometimes you need to know <span className="openSansMedium">where a token is or was best traded.</span> Or maybe you just want to understand <span className="openSansMedium">liquidity patterns over time.</span></p>
                                    <p className="text-base">Our “liquidity” functions will <span className="openSansMedium">measure liquidity from many angles,</span> the slippage of an intended trade, the available amount of a particular token on a DEX at any point in time, and the liquidity distribution of a concentrated liquidity DEX pool.</p>
                                </div>

                                <div className="lg:pr-5">
                                    <span className="flex pt-9 pb-3"><img className="mr-4" src="/assets/token-api-holdings.svg" alt="tick" width={120} /><p className="text-2xl text-lightpurple font-bold pt-10"><span className="openSansMedium">Holdings</span></p></span>
                                    <p className="text-base">
                                        <span className="openSansMedium">How concentrated</span> are token holding? <span className="openSansMedium">How many wallets</span> hold them? What addresses hold the <span className="openSansMedium">most tokens</span>? How many of those holdings are in <span className="openSansMedium">liquidity pools</span>? We are asked these questions all the time. They are easily answered by calling the right models on our platform, but these endpoints answer the most common questions.
                                    </p>
                                </div>

                                <div className="lg:pl-5">
                                    <span className="flex pt-9 pb-3"><img className="mr-4" src="/assets/token-api-metadata.svg" alt="tick" width={120} /><p className="text-2xl text-lightpurple font-bold pt-10"><span className="openSansMedium">Metadata</span></p></span>
                                    <p className="text-base">
                                        <span className="openSansMedium">Price, liquidity, and concentration</span> are important enough to merit their own functions, but tokens have other attributes that could be of interest including:
                                    </p>
                                    <ul>
                                        <li className="text-base openSansMedium">
                                            token name, symbol, and logo
                                        </li>
                                        <li className="text-base openSansMedium">
                                            number of decimals, and
                                        </li>
                                        <li className="text-base openSansMedium">
                                        creation block.
                                        </li>
                                    </ul>
                                    <p className="text-base">
                                    This information can be accessed via a series of endpoints we’ve grouped under a “metadata” umbrella.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h4 className="uppercase text-credmarkpurple text-3xl pb-3">Who needs it?</h4>
                                <p className="pb-6">Who doesn’t. Tokens make the DeFi world go round.</p>
                                <div>
                                    <p className="py-3 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />Building a wallet? You need prices.</span></p>
                                    <p className="py-3 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />Building a trading platform? You need liquidity information.</span></p>
                                    <p className="py-3 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />Building any kind of DeFi dashboard? You’re probably going to need token metadata.</span></p>
                                </div>
                            </div>
                            <div>
                                <span className="flex pt-9 pb-3"><img className="mr-4" src="/assets/documentation.svg" alt="tick" width={120} /><p className="text-2xl text-lightpurple font-bold pt-10"><span className="openSansMedium">Documentation</span></p></span>
                                <div>
                                    <div className="-mx-4 mt-4 overflow-x-auto sm:-mx-6 md:mx-0">
                                        <table className="min-w-full">
                                            <tbody>
                                                {people.map((person) => (
                                                    <tr key={person}>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-credmarkpurple sm:pl-6 border-1 border-b-linepurple border-bggray">
                                                            <span><img className="float-left mr-4" src={person.image} alt="tick" width={26} />{person.documentation}</span>
                                                        </td>
                                                        <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-extralightgray text-right sm:table-cell border-1 border-b-linepurple border-bggray">
                                                            <a href={person.documentationLink} target="_blank" rel="noreferrer">{person.documentationLink} </a>
                                                        </td>

                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
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
        </>
    )
}
