import { CheckIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import Link from 'next/link'

const people = [
    { documentation: 'DeFi API Concepts', documentationLink: 'https://docs.credmark.com/defi-api-concepts/basics/introduction', image: '/assets/documentation-api.svg' },
    { documentation: 'DeFi API reference', documentationLink: 'https://gateway.credmark.com/api/#/DeFi%20API', image: '/assets/documentation-api.svg' },
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
                        <div className="bg-bggray p-4 lg:p-24 border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 shadow-lg">
                            <div>
                                <h2 className="openSansMedium leading-6 text-credmarkpurple text-2xl lg:text-5xl pb-3 pt-10 lg:pt-0">DeFi API</h2>
                                <p className="text-base font-bold"><span className="openSansMedium">Warning: this is expert territory</span>. If you want access to all our data – i.e., <span className="openSansMedium">every bit that’s ever been written to the Ethereum chain</span> – as well as the output of <span className="openSansMedium">sophisticated financial models</span>, you’re in the right spot. It’s a steep hill to climb, but once you do you’ll be able to do things you can’t do with any other tool in DeFi.</p>
                            </div>
                            <div>
                                <p className="uppercase text-credmarkpurple text-3xl pt-10 pb-3 openSansMedium">What you get</p>
                                <div className="grid grid-cols-1 lg:grid-cols-2 pb-20">
                                    <div className="lg:mr-10">
                                        <span className="flex pt-9 pb-3"><img className="mr-4" src="/assets/defi-api.svg" alt="tick" width={120} /><p className="text-2xl text-lightpurple font-bold pt-10 openSansMedium">An API to the Credmark Platform</p></span>
                                        <p className="text-base">
                                            The Credmark platform has been in beta since February. Since then over 150 models have been deployed into production. Thanks to the DeFi API, a developer can call any model and use the output in applications. These models can be simple or complex. Examples include:
                                        </p>
                                        <div>
                                            <ul>
                                                <li className="text-base openSansMedium">
                                                    the token holdings of an account,
                                                </li>
                                                <li className="text-base openSansMedium">
                                                    the balances of tokens in a DEX pool for the last 24 hours, or even
                                                </li>
                                                <li className="text-base openSansMedium">
                                                    the impermanent loss from market movements.
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-base">
                                            The API includes functions to retrieve metadata about deployed models. More importantly, it includes the run_model endpoint which runs any model deployed on the platform. <a className="openSansMedium text-credmarkpurple" href="https://gateway.credmark.com/api/" target="_blank" rel="noreferrer">API documentation can be found here.</a>
                                        </p>
                                    </div>

                                    <div>
                                        <span className="flex pt-9 pb-3"><img className="mr-4" src="/assets/defi-models.svg" alt="tick" width={120} /><p className="text-2xl text-lightpurple font-bold pt-10 openSansMedium">Bespoke models</p></span>
                                        <p className="text-base">
                                            You’ll find <span className="openSansMedium">lots of pre-built models</span>, but what if you can’t find the one you need? You’ll have to build it, or find someone to build it for you.
                                        </p>

                                        <p className="text-base">
                                            You’ll find <span className="openSansMedium">all the documentation you need</span> to get started building models<a className="openSansMedium" href="https://developer-docs.credmark.com/en/latest/usage.html" target="_blank" rel="noreferrer"> here</a>. To learn about the models that have already been deployed, go <a href="https://gateway.credmark.com/model-docs" target="_blank" rel="noreferrer" className="openSansMedium"> here.</a>
                                        </p>
                                        <p className="text-base">If you need to find someone, get in touch with us.</p>
                                    </div>

                                    <div className="lg:mr-10">
                                        <span className="flex pt-9 pb-3"><img className="mr-4" src="/assets/documentation.svg" alt="tick" width={120} /><p className="text-2xl text-lightpurple font-bold pt-10"><span className="openSansMedium">Documentation</span></p></span>
                                        <div className="px-4 lg:px-0">
                                            <div className="-mx-4 mt-4 overflow-x-auto sm:-mx-6 md:mx-0">
                                                <table className="min-w-full">
                                                    <tbody>
                                                        {people.map((person) => (
                                                            <tr key={person}>
                                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-credmarkpurple sm:pl-6 border-1 border-b-linepurple border-bggray">
                                                                    <a href={person.documentationLink} target="_blank" rel="noreferrer"><span><img className="float-left mr-4" src={person.image} alt="tick" width={26} />{person.documentation}</span></a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <span className="flex pt-9 pb-3"><img className="mr-4" src="/assets/defi-api.svg" alt="tick" width={120} /><p className="text-2xl text-lightpurple font-bold pt-10 openSansMedium">Examples</p></span>
                                        <p className="text-base">
                                            People are doing some pretty incredible things with our models. To showcase what’s possible we’ve built and deployed the<a href="https://app.credmark.com/" target="_blank" className="openSansMedium" rel="noreferrer"> Credmark Terminal.</a> Every chart is powered by a production model you can use. 🤯
                                        </p>
                                        <p className="text-base">
                                            We’ve even embedded some Power BI dashboards (e.g., <a href="https://app.credmark.com/terminal/stablecoin/frax-stats" target="_blank" className="openSansMedium" rel="noreferrer">Credmark Stablecoin Stats</a>) to show how BI tools can be used to build interactive dashboards using the API.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="uppercase text-credmarkpurple text-3xl pt-10 pb-3 openSansMedium">Who needs it?</p>
                                <p className="text-base">
                                    That’s a very good question! We are constantly surprised by the projects that pick up the DeFi API and build useful models to run through it.
                                </p>
                                <p className="text-base pt-3 pb-10 openSansMedium">Here are some examples:</p>
                                <div className="grid grid-cols-1 lg:grid-cols-3">
                                    <div>
                                        <p className="py-3 pr-3.5 text-base">
                                            <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />Underwriting</span></p>
                                        <p className="py-3 pr-3.5 text-base">
                                            <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />DeFi dashboards</span></p>
                                    </div>
                                    <div>
                                        <p className="py-3 pr-3.5 text-base">
                                            <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />Risk management</span></p>
                                        <p className="py-3 pr-3.5 text-base">
                                            <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />Pricing</span></p>
                                    </div>
                                    <div>
                                        <p className="py-3 pr-3.5 text-base">
                                            <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />Insurance premiums</span></p>
                                        <p className="py-3 pr-3.5 text-base">
                                            <span><img className="float-left mr-4" src="/assets/checkedCircle.svg" alt="tick" width={26} />Liquidity mining</span></p>
                                    </div>
                                </div>
                            <p className="text-base pt-5 lg:pt-14">Fact is, a lot of projects need to build on top of blockchain data. Not just raw blockchain data but also smart contract data and curated data sets. No other platform provides seamless access to historical and state data from an environment that supports Python tooling familiar to every analyst, quant, and data scientist on the planet. No other platform then wraps all this power into an API that any developer can use. </p>
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
