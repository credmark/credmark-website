import { CheckIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Link from 'next/link'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function PortfolioApi() {
    const [enabled, setEnabled] = useState(false)
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <>
            <div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4 sm:space-y-0 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 py-16">
                        <div className="bg-white p-4 lg:p-24 border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 shadow-lg">
                            <div>
                                <h2 className="openSansMedium leading-6 text-credmarkpurple text-2xl lg:text-5xl pb-3 pt-10 lg:pt-0">Portfolio API</h2>
                                <p className="text-base font-bold">You’re dealing with crypto portfolios? You need to show your users what they own, how much it’s worth today, how much it was worth, and how risky the portfolio is? You’ve come to the right place. We’ll give you fast, easy access to the portfolio data your users want.</p>
                                <p className="text-base font-bold">But not today.</p>
                                <p className="text-base font-bold">This API is still under development. If this is something you’re going to need, get in touch so that we can make sure we include the data you want. Also, you might want to be part of our private beta.</p>
                            </div>
                            <div>
                                <p className="uppercase text-credmarkpurple text-3xl pt-10 pb-3 openSansMedium">What you get</p>
                                <p className="text-base">
                                    We’re still working on this. Our internal wish list is very long. When we first publish, you’ll be able to:
                                </p>
                                <ul>
                                    <li className="text-base">
                                        price a portfolio,
                                    </li>
                                    <li className="text-base">
                                        retrieve portfolio activity (cashflow, transactions), and
                                    </li>
                                    <li className="text-base">
                                        retrieve basic risk metrics (VaR and Sharpe ratio ).
                                    </li>
                                </ul>
                                <p className="text-base">
                                    You could, of course, price the portfolio by making a lot of calls to the Token API, but that could be very costly. If you need the prices of many tokens, or you need prices across a long series of blocks, you’ll definitely want to use this API. In fact, you won’t even have to send us a list of tokens. Send us a list of wallet addresses and we’ll figure out what’s there.
                                </p>
                                <p className="text-base">
                                    Tokens flow in and out of wallets. You could use a Web3 API to get all that information, but it’s complicated. The Portfolio API makes it easy.
                                </p>
                                <p className="text-base">
                                    Traditional finance is very good at managing risk. DeFi isn’t. That’s why we built Credmark. Our DeFi API gives you direct access to all of the financial models built on our platform. Some of those compute risk associated with portfolios. Instead of forcing you to become a DeFi financial modeling expert, we’re going to make the best models available to you through this API.
                                </p>
                            </div>
                            <div>
                                <p className="uppercase text-credmarkpurple text-3xl pt-10 pb-3 openSansMedium">Who needs it?</p>
                                <p className="text-base">
                                    Anyone who needs to display users’ portfolio information. Sometimes it’s a lot, like transaction details, and sometimes it’s a little, like the portfolio’s value in USD.
                                </p>
                                <p className="text-base">Some common use cases include:</p>
                                <div>
                                    <p className="py-5 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />a lender needing to understand a borrower’s financial situation,</span></p>
                                    <p className="py-5 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />a treasury manager needing to track positions over time,</span></p>
                                    <p className="py-5 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />a wallet needing to show current and past state, and</span></p>
                                    <p className="py-5 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />a portfolio aggregator needing to roll up data from multiple wallets.</span></p>
                                </div>
                            </div>
                            
                            <div className="rounded-md applicationsBg mt-16 py-5 lg:py-20 p-5">
                                <p className="openSansMedium uppercase text-white text-center font-bold text-3xl pb-2 lg:pb-8">Interact with the Portfolio API</p>
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
