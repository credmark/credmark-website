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
                                <p className="texl-lg font-bold">The Token API is what you need to access everything token related</p>
                            </div>
                            <div className="grid lg:grid-cols-4 lg:space-x-4 pb-20">
                                <div>
                                    <p className="text-2xl text-lightpurple font-bold pt-9">Prices</p>
                                    <p className="text-base">Fetch the actual DeFi token
                                        prices derived from aggregate
                                        DEX activity or acess our
                                        external oracle for tokens
                                        traded on centralized exchanges.</p>
                                </div>

                                <div>
                                    <p className="text-2xl text-lightpurple font-bold pt-9">Liquidity</p>
                                    <p className="text-base">
                                        Discover where tokens are traded, the best prices, or analyze the liquidity patterns. Our liquidity function will show available liquidity for any token on DEXs at any given time.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl text-lightpurple font-bold pt-9">Concentration</p>
                                    <p className="text-base">
                                        Glean insights on token concentration across no. of wallets, the addresses, and know the exact distribution of those holdings in liquidity pools.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl text-lightpurple font-bold pt-9">Metadata</p>
                                    <p className="text-base">
                                        Simple access to contract address, number of decimals,
                                        or even current supply.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h4 className="uppercase text-credmarkpurple text-3xl pb-3">Not sure what to build?</h4>
                                <p>There are dozens of use cases but we can only list so many.
                                    <br />
                                    Check out the examples below</p>
                                <div className="pt-3 flex">
                                    <p className="pr-3.5 text-base">
                                        <span><img className="float-left mr-2" src="/assets/checkedCircle.svg" alt="tick" width={26} />Wallet or dApps</span></p>
                                    <p className="pr-3.5 text-base">
                                        <span><img className="float-left mr-2" src="/assets/checkedCircle.svg" alt="tick" width={26} />Trading Platform</span></p>
                                    <p className="pr-3.5 text-base">
                                        <span><img className="float-left mr-2" src="/assets/checkedCircle.svg" alt="tick" width={26} />DeFi dashboard</span></p>                            </div>
                            </div>
                            <div className="rounded-md applicationsBg mt-16 py-5 lg:py-20 p-5">
                                <p className="uppercase text-white text-center font-bold text-3xl pb-2 lg:pb-8">Interact with the Token API</p>
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
