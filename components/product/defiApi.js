import { CheckIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Link from 'next/link'

const people = [
    { documentation: 'API', documentationLink: 'https://gateway.credmark.com/api',},
    { documentation: 'Building Models - How to', documentationLink: 'https://developer-docs.credmark.com/en/latest/usage.html',},
    { documentation: 'Deployed models', documentationLink: 'https://gateway.credmark.com/model-docs',},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DefiApi() {
    const [enabled, setEnabled] = useState(false)
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <>
            <div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4 sm:space-y-0 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 py-16">
                        <div className="bg-white p-4 lg:p-24 border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 shadow-lg">
                            <div>
                                <h2 className="openSansMedium leading-6 text-credmarkpurple text-2xl lg:text-5xl pb-3 pt-10 lg:pt-0">DeFi API</h2>
                                <p className="text-base font-bold"><span className="openSansMedium">Warning:</span> this is expert territory. If you want access to all our data – i.e., every bit that’s ever been written to the Ethereum chain – as well as the output of sophisticated financial models, you’re in the right spot. It’s a steep hill to climb, but once you do you’ll be able to do things you can’t do with any other tool in DeFi.</p>
                            </div>
                            <div>
                                <p className="uppercase text-credmarkpurple text-3xl pt-10 pb-3 openSansMedium">What you get</p>
                                <p className="openSansMedium">An API to the Credmark Platform</p>
                                <p className="text-base">
                                    The Credmark platform has been in beta since February. Since then over 150 models have been deployed into production. Thanks to the DeFi API, a developer can call any model and use the output in applications. These models can be simple or complex. Examples include:
                                </p>
                                <div>
                                    <p className="py-3 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />the token holdings of an account,</span></p>
                                    <p className="py-3 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />the balances of tokens in a DEX pool for the last 24 hours, or even</span></p>
                                    <p className="py-3 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />the impermanent loss from market movements.</span></p>
                                </div>
                                <p className="text-base">
                                    The API includes functions to retrieve metadata about deployed models. More importantly, it includes the run_model endpoint which runs any model deployed on the platform.
                                </p>
                                <p className="text-base">
                                    API documentation can be found <a className="openSansMedium" href="https://gateway.credmark.com/api/" target="_blank" rel="noreferrer">here</a>
                                </p>

                                <p className="openSansMedium pt-5">Bespoke Models</p>
                                <p className="text-base">
                                    You’ll find lots of pre-built models, but what if you can’t find the one you need? You’ll have to build it, or find someone to build it for you.
                                </p>

                                <p className="text-base">
                                    You’ll find all the documentation you need to get started building models<a className="openSansMedium" href="https://developer-docs.credmark.com/en/latest/usage.html" target="_blank" rel="noreferrer"> here</a>. To learn about the models that have already been deployed, go <a href="https://gateway.credmark.com/model-docs" target="_blank" className="openSansMedium"> here.</a>
                                </p>
                                <p className="text-base">If you need to find someone, get in touch with us.</p>

                                <p className="openSansMedium pt-5">Examples</p>
                                <p className="text-base">
                                    People are doing some pretty incredible things with our models. To showcase what’s possible we’ve built and deployed the<a href="https://app.credmark.com/" target="_blank" className="openSansMedium" rel="noreferrer"> Credmark Terminal.</a> Every chart is powered by a production model you can use. 🤯
                                </p>
                                <p className="text-base">
                                    We’ve even embedded some Power BI dashboards (e.g., <a href="https://app.credmark.com/terminal/stablecoin/frax-stats" target="_blank" className="openSansMedium">https://app.credmark.com/terminal/stablecoin/frax-stats</a>) to show how BI tools can be used to build interactive dashboards using the API.
                                </p>

                                <p className="openSansMedium pt-5">Documentation</p>
                                <div>
                                    <div className="-mx-4 mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-300">
                                           
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                {people.map((person) => (
                                                    <tr key={person}>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                            {person.documentation}
                                                        </td>
                                                        <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                                                            <a href={person.documentationLink} target="_blank" rel="noreferrer">{person.documentationLink} </a>
                                                        </td>
                                                        
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="uppercase text-credmarkpurple text-3xl pt-10 pb-3 openSansMedium">Who needs it?</p>
                                <p className="text-base">
                                That’s a very good question! We are constantly surprised by the projects that pick up the DeFi API and build useful models to run through it.
                                </p>
                                <p className="text-base pt-3">Here are some examples:</p>
                                <div>
                                    <p className="py-3 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />Underwriting</span></p>
                                    <p className="py-3 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />DeFi dashboards</span></p>
                                    <p className="py-3 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />Risk management</span></p>
                                    <p className="py-3 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />Pricing</span></p>
                                        <p className="py-3 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />Insurance premiums</span></p>
                                        <p className="py-3 pr-3.5 text-base">
                                        <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />Liquidity mining</span></p>
                                </div>
                                <p className="text-base">Fact is, a lot of projects need to build on top of blockchain data. Not just raw blockchain data but also smart contract data and curated data sets. No other platform provides seamless access to historical and state data from an environment that supports Python tooling familiar to every analyst, quant, and data scientist on the planet. No other platform then wraps all this power into an API that any developer can use. </p>
                            </div>

                            <div className="rounded-md applicationsBg mt-16 py-5 lg:py-20 p-5">
                                <p className="openSansMedium uppercase text-white text-center font-bold text-3xl pb-2 lg:pb-8">Interact with the DeFi API</p>
                                <p className="text-center pb-8">We have a 30 day trial if you’re unsure or start building immediately!</p>
                                <div className="flex justify-center">
                                    <button
                                        type="button"
                                        className="mx-2 lg:mx-0 text-black bg-green px-5 py-2 mb-10 shadow-sm text-sm font-bold"
                                    >
                                        <Link href="https://developer-docs.credmark.com/en/latest/usage.html" target="_blank" rel="noreferrer">
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
                                        <Link href="https://developer-docs.credmark.com/en/latest/usage.html" target="_blank" rel="noreferrer">
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
