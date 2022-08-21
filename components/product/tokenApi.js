import { CheckIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Link from 'next/link'

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
                        <div className="bg-white p-4 lg:p-24 border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 shadow-lg">
                            <div>
                                <h2 className="openSansMedium leading-6 text-credmarkpurple text-2xl lg:text-5xl pb-3 pt-10 lg:pt-0">Token API</h2>
                                <p className="texl-lg font-bold">Easy access to current and historical token price data.</p>
                            </div>
                            <div className="grid lg:grid-cols-2 pb-20">
                                <div className="lg:mr-5">
                                    <p className="text-2xl text-lightpurple font-bold pt-9">Prices</p>
                                    <p className="text-base">Our basic “price” function returns the actual DeFi price of tokens. It is derived from aggregate DEX activity. For exotic tokens that are not traded on DEXes, we rely on an oracle that reports prices from centralized exchanges. This price function is the one most likely to return a result.</p>
                                    <p className="text-base">If your needs are more specific, you can explicitly request a DeFi price or an oracle price. A DeFi price is a liquidity weighted average price across DEXes.</p>
                                    <p className="text-base">If your needs are even narrower, you can request a price from a specific DEX. This is power user territory.</p>
                                </div>


                                <div className="lg:ml-5">
                                    <p className="text-2xl text-lightpurple font-bold pt-9">Liquidity</p>
                                    <p className="text-base">
                                        Sometimes you need to know where a token is or was best traded. Or maybe you just want to understand liquidity patterns over time.</p>
                                    <p className="text-base">Our “liquidity” functions will measure liquidity from many angles, the slippage of an intended trade, the available amount of a particular token on a DEX at any point in time, and the liquidity distribution of a concentrated liquidity DEX pool.</p>
                                </div>

                                <div className="lg:pr-5">
                                    <p className="text-2xl text-lightpurple font-bold pt-9">Holdings</p>
                                    <p className="text-base">
                                        How concentrated are token holding? How many wallets hold them? What addresses hold the most tokens? How many of those holdings are in liquidity pools? We are asked these questions all the time. They are easily answered by calling the right models on our platform, but these endpoints answer the most common questions.
                                    </p>
                                </div>

                                <div className="lg:pl-5">
                                    <p className="text-2xl text-lightpurple font-bold pt-9">Metadata</p>
                                    <p className="text-base">
                                        Price, liquidity, and concentration are important enough to merit their own functions, but tokens have other attributes that could be of interest including:
                                    </p>
                                    <ul>
                                        <li className="text-base">
                                            contract address,
                                        </li>
                                        <li className="text-base">
                                            number of decimals,
                                        </li>
                                        <li className="text-base">
                                            current supply,
                                        </li>
                                        <li className="text-base">
                                            etc,
                                        </li>
                                    </ul>
                                    <p className="text-base">
                                    This information can be accessed via a series of endpoints we’ve grouped under a “metadata” umbrella.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h4 className="uppercase text-credmarkpurple text-3xl pb-3">Who needs it?</h4>
                                <p>Who doesn’t. Tokens make the DeFi world go round.</p>
                                <div className="flex flex-wrap lg:flex-nowrap">
                                    <p className="py-5 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />Building a wallet? You need prices.</span></p>
                                    <p className="py-5 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />Building a trading platform? You need liquidity information.</span></p>
                                    <p className="py-5 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />Building any kind of DeFi dashboard? You’re probably going to need token metadata.</span></p>                            
                                    </div>
                                <p className="text-base">It’s free for 30 days. Try it, and tell us what you think.</p>
                            </div>
                            <div className="rounded-md applicationsBg mt-16 py-5 lg:py-20 p-5">
                                <p className="openSansMedium uppercase text-white text-center font-bold text-3xl pb-2 lg:pb-8">Interact with the Token API</p>
                                <p className="text-center pb-8">We have a 30 day trial if you’re unsure or start building immediately!</p>
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
                                    We’re a global community of modelers. Join us and engage with other members building models using our API.
                                </p>
                                <div className="flex justify-center mt-8 mb-8 lg:mb-0">
                                    <button
                                        type="button"
                                        className="mx-2 lg:mx-0 text-black border-2 border-green px-5 py-2 shadow-sm text-sm font-bold"
                                    >
                                        <Link href="https://developer-docs.credmark.com/en/latest/usage.html">
                                            <p>Join Now</p>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
