import Link from 'next/link'
import HeaderHome from "../layout/headerHome"
import Subscribe from '../subscribe/subscribe'
import Footer from '../layout/footer'
import React, { useState } from "react";
import items from "../../styles/homeReportsData"

const allCategories = ['All', ...items.map(item => item.category)];

export default function Homepage() {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState([allCategories]);

    const filter = (button) => {

        if (button === 'All') {
            setMenuItem(items);
            return;
        }

        const filteredData = items.filter(item => item.category === button);
        setMenuItem(filteredData)
    }

    return (
        <>
            <div>
                <HeaderHome
                    title="MANAGE DEFI RISK"
                    description="A risk ecosystem powered by reliable data, original research, and an engaged community reducing risk for everyone."
                    url="#what-is-credmark" />
                <div className="swirls">
                    <img src="/assets/swirls-transparent.png" alt="colored swirls" />
                </div>
            </div>
            <div>
            </div>
            <div className="whatIsBg">
                <div className="max-w-7xl block m-auto">
                    <div className="px-5">
                        <div className="text-center">
                            <h3 id="what-is-credmark" className="roboto font-extrabold text-5xl md:text-4xl pt-10">
                                WHAT IS CREDMARK?
                            </h3>

                        </div>
                        <div className="max-w-4xl pb-7 block m-auto">
                            <p className="pt-5 text-center text-base">Credmark is a community-driven project that connects data providers, risk modelers and DeFi users.</p>
                            <p className="text-center text-base">Our community curates crypto data, develop risk management tools, and publish industry leading research.</p>
                        </div>
                        <div className="max-w-4xl block m-auto pb-16">
                            <img alt="What is Credmark graph" className="hidden md:flex block m-auto" src="/assets/what-is-credmark.png" />
                            <img alt="What is Credmark graph" className="flex md:hidden block m-auto" src="/assets/what-is-credmark-mobile.png" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-7xl block m-auto">
                        <div className="px-5">
                            <div className="grid grid-cols-1 lg:grid-cols-3 pt-16 px-5 md:px-20">
                                <div className="col-span-1 md:px-10 md:pt-10">
                                    <h3 className="roboto text-center font-semibold text-3xl pb-5">Driving credibility backed with mathematical formulas and complete data</h3>
                                    <div className="border-b-1 border-lightpurple block m-auto md:m-auto space-x-5 md:space-x-20 w-16" />
                                    <p className="text-center text-lightpurple pt-5 font-semibold pb-10">Access data, build risk applications and de-risk your DeFi experience in one ecosystem.</p>
                                </div>
                                <div className="col-span-2 pl-10">
                                    <img alt="How Credmark Works" className="hidden md:flex block m-auto" src="/assets/how-credmark-works.png" />
                                </div>
                                <div className="max-w-4xl block m-auto pb-16">
                                    <img alt="How Credmark Works" className="flex md:hidden block m-auto" src="/assets/how-it-works-mobile.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="riskPlatform">
                <div className="riskEncyclopedia rounded-xl max-w-7xl block py-16 mx-5 lg:m-auto">
                    <h3 id="what-is-credmark" className="roboto uppercase text-center text-white font-extrabold text-4xl px-5">
                        Risk platform
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 pt-14 px-10 md:px-20 block m-auto max-w-6xl">
                        <div className="lg:pt-10">
                            <p className="credmark text-2xl py-5 text-base text-white">Risk Terminal</p>
                            <p className="text-base text-white lg:pr-20">Visualize risk levels across different protocols with intuitive graphs to stay informed on solvency and liquidity risks.</p>
                            <a href="https://app.credmark.com/" target="_blank" rel="noreferrer">
                                <button
                                    type="button"
                                    className="transform hover:scale-110 px-5 uppercase mt-5 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white border-2 border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    APP
                                </button>
                            </a>
                        </div>
                        <div>
                            <a href="https://app.credmark.com/" target="_blank" rel="noreferrer"><img alt="Credmark Risk Terminal" className="mt-10 lg:my-0 md:h-96" src="/assets/risk-terminal-two.png" /></a>
                        </div>
                    </div>
                </div>
                <div className="py-24 lg:py-48">
                    <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-20 block m-auto max-w-6xl">
                        <div className="order-2 lg:order-1">
                            <img alt="Staking CMK token" className="pt-10" src="/assets/cmktoken.svg" />
                        </div>
                        <div className="pl-5 md:pl-10 order-1 lg:order-2">
                            <img alt="Staking CMK token" className="float-left mr-5" src="/assets/cmklogo.svg" /><p className="credmark text-2xl text-base">$CMK Token</p>
                            <p className="text-base pt-5">Use your $CMK to access the Credmark Risk Terminal. How? Easy. Stake your $CMK to get $xCMK. You $xCMK is your key to the Terminal. And, by the way, while your $CMK is staked, you’ll be earning interest. Win, win.</p>
                            <div className="flex">
                                <a href="https://app.sushi.com/swap" target="_blank" rel="noreferrer">
                                    <button
                                        type="button"
                                        className="uppercase mr-5 transform hover:scale-110 mt-5 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-credmarkpurple"
                                    >
                                        Buy CMK
                                    </button>
                                </a>
                                <a href="https://app.credmark.com/?stake=true" target="_blank" rel="noreferrer">
                                    <button
                                        type="button"
                                        className="uppercase mr-5 transform hover:scale-110 mt-5 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-credmarkpurple"
                                    >
                                        Stake CMK
                                    </button>
                                </a>
                            </div>
                            <a href="https://docs.credmark.com/credmark-faq/staking" target="blank" rel="noreferrer"><p className="text-center md:text-left text-sm float-left pt-5">How to stake $CMK<img width={35} className="float-right pt-1 pl-4" alt="arrow right" src="../assets/arrow-right-2.svg" /></p></a>
                        </div>
                    </div>
                </div>
                <div className="riskLibrary rounded-xl max-w-7xl block py-16 mx-5 lg:m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:py-10 px-5 md:px-20 block m-auto max-w-6xl">
                        <div>
                            <p className="credmark text-2xl text-white py-5 text-base md:pt-10">Risk Library</p>
                            <p className="text-white pt-5 text-base">Discover the industry standards for DeFi risks — learn how it is  assessed and metricized to safeguard your assets.</p>
                            <a href="https://docs.credmark.com/credmark-risk-library/" target="_blank" rel="noreferrer">
                                <button
                                    type="button"
                                    className="border-2 border-white uppercase my-5 inline-flex items-center px-7 py-2 mb-10 shadow-sm text-sm font-medium rounded-md text-white hover:bg-white hover:text-credmarkpurple"
                                >
                                    Open library
                                </button>
                            </a>
                        </div>
                        <div>
                            <a href="https://docs.credmark.com/credmark-risk-library/" target="_blank" rel="noreferrer"><img alt="Credmark Risk Library" src="/assets/risk-library.svg" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="roadmap py-24 rounded-xl ">
                <div className="rounded-xl max-w-7xl block py-16 mx-5 lg:m-auto innerRoadmap">
                    <h3 className="text-white text-center pt-14 md:pt-28 roboto font-bold text-4xl uppercase pb-20">Credmark Roadmap</h3>
                    <img alt="How Credmark Works" className="hidden md:block m-auto max-w-2xl pb-28" src="/assets/Roadmap.png" />
                    <img alt="How Credmark Works" className="block md:hidden m-auto pb-14 px-2" src="/assets/mobile-roadmap.png" />
                </div>
            </div>
            <div>
                <div className="px-5 py-10 md:pt-20 md:pb-10">
                    <strong>
                        <h2 className="roboto max-w-7xl block m-auto font-extrabold text-center text-5xl md:text-4xl">
                            PARTNERS
                        </h2>
                    </strong>
                </div>
                <div className="max-w-4xl block m-auto">
                    <div className="grid grid-cols-1 m-auto block md:grid-cols-3 px-5 pb-0 md:pb-10">
                        <a href="https://dlab.vc/" target="_blank" rel="noreferrer"><img className="py-5" width={150} src="../assets/dlab-logo.svg" alt="DLAB logo" /></a>
                        <a href="https://www.longhash.com/en" target="_blank" rel="noreferrer"><img className="py-5 md:py-10" width={150} src="../assets/longhash-logo.svg" alt="Long Hash Ventures logo" /></a>
                        <a href="https://api3.org/" target="_blank" rel="noreferrer"><img className="py-5 md:py-10" width={150} src="../assets/API3-logo.svg" alt="API3 logo" /></a>
                    </div>
                    <div className="grid grid-cols-1 m-auto block md:grid-cols-4 px-5 pb-10 md:pb-20 md:px-0">
                        <a href="https://steadystate.finance/" target="_blank" rel="noreferrer"><img className="py-5" width={200} src="../assets/steady-state-logo.svg" alt="Steady State logo" /></a>
                        <a href="https://coinshift.xyz/" target="_blank" rel="noreferrer"><img className="py-5" width={150} src="../assets/Coinshift.svg" alt="Coinshift logo" /></a>
                        <a href="https://www.yield.app/" target="_blank" rel="noreferrer"><img className="py-5" width={150} src="../assets/yieldapp-logo.svg" alt="Yield App logo" /></a>
                        <a href="https://www.alchemist.wtf/" target="_blank" rel="noreferrer"><img className="py-5" width={180} src="../assets/alchemist.svg" alt="Alchemist logo" /></a>
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </>
    )
}

