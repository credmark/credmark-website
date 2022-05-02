import Link from 'next/link'
import HeaderHome from "../layout/headerHome"
import Tools from "../homepage/tools"
import Subscribe from '../subscribe/subscribe'
import Footer from '../layout/footer'
import React, { useState } from "react";
import items from "../../styles/homeReportsData"
import WhatWeDo from '../homepage/whatWeDo'
import Community from '../homepage/community'
import TypeAnimation from 'react-type-animation';
import Nav from '../layout/nav'
import Stats from '../homepage/stats'
import ToolsMobile from '../homepage/toolsMobile'

export default function Homepage() {
    return (
        <>
            <div>
                <div className="bg-credmarkpurple w-screen" >
                    <Nav />
                    <h1 className="px-4 md:px-0 text-white text-5xl lg:text-7xl pt-40 md:pt-56 max-w-7xl block mx-auto leading-snug">
                        <TypeAnimation
                            cursor={true}
                            className="text-green text-5xl lg:text-7xl leading-snug"
                            sequence={[
                                'Reliable Data', 2000, 'Crowdsourced Insights', 2000, 'Battle-Tested Models', 2000,
                            ]}
                            wrapper="h2"
                            repeat={Infinity}
                        />
                        By the Community,<br />For Everyone</h1>
                    <div className="max-w-7xl block mx-auto">
                        <div className="flex flex-wrap pb-52 pt-6">
                            <button
                                type="button"
                                className="w-36 mx-2 mt-7 text-white bg-green mt-5 px-2 py-2 shadow-sm text-sm font-medium rounded-md"
                            >
                                <Link href="https://app.credmark.com/">
                                    <p>Get Started</p>
                                </Link>
                            </button>
                            <button
                                type="button"
                                className="w-36 mx-2 mt-7 text-white mt-5 px-2 py-2 shadow-sm text-sm font-medium rounded-md border-2 border-solid border-white hover:text-white hover:bg-credmarkpurple"
                            >
                                <Link href="https://docs.credmark.com/credmark/">
                                    <p className="text-white">How it Works</p>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Stats />
            <WhatWeDo />
            <Community />
            <div className="hidden lg:block">
                <Tools />
            </div>
            <div className="block lg:hidden">
                <ToolsMobile />
            </div>
            <div>
                <div className="py-16 lg:m-auto innerRoadmap">
                    <h3 className="mx-5 text-white text-center md:pt-28 roboto font-bold text-4xl pb-20">Credmark Roadmap</h3>
                    <img alt="Credmark product roadmap" className="hidden md:block m-auto max-w-2xl pb-28" src="/assets/credmark-roadmap.png" />
                    <img alt="Credmark product roadmap" className="block md:hidden px-4" src="/assets/mobile-roadmap.png" />
                </div>
            </div>
            <div>
                <div className="px-5 py-10 md:pt-28">
                    <strong>
                        <h2 className="pb-10 roboto max-w-7xl block m-auto font-extrabold text-center text-5xl md:text-4xl">
                            PARTNERS
                        </h2>
                    </strong>
                </div>
                <div className="max-w-4xl block m-auto">
                    <div className="grid grid-cols-1 m-auto block md:grid-cols-3 px-5 pb-0 md:pb-10">
                        <a href="https://dlab.vc/" target="_blank" rel="noreferrer"><img className="py-5 block mx-auto" width={150} src="../assets/dlab-logo.svg" alt="DLAB logo" /></a>
                        <a href="https://www.longhash.com/en" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-10" width={150} src="../assets/longhash-logo.svg" alt="Long Hash Ventures logo" /></a>
                        <a href="https://api3.org/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-10" width={150} src="../assets/API3-logo.svg" alt="API3 logo" /></a>
                    </div>
                    <div className="grid grid-cols-1 m-auto block md:grid-cols-4 px-5 pb-10 md:pb-20 md:px-0">
                        <a href="https://steadystate.finance/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={200} src="../assets/steady-state-logo.svg" alt="Steady State logo" /></a>
                        <a href="https://coinshift.xyz/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={150} src="../assets/Coinshift.svg" alt="Coinshift logo" /></a>
                        <a href="https://www.yield.app/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={150} src="../assets/yieldapp-logo.svg" alt="Yield App logo" /></a>
                        <a href="https://www.alchemist.wtf/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={180} src="../assets/alchemist.svg" alt="Alchemist logo" /></a>
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </>
    )
}

