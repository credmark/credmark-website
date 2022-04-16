import Link from 'next/link'
import HeaderHome from "../layout/headerHome"
import Tools from "../homepage/tools"
import Subscribe from '../subscribe/subscribe'
import Footer from '../layout/footer'
import React, { useState } from "react";
import items from "../../styles/homeReportsData"
import WhatWeDo from '../homepage/whatWeDo'
import Community from '../homepage/community'

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
                <div class="canvasContainer"><canvas class="dots">Your browser does not support canvas.</canvas></div>
                <h1 class="text"><span id="changeText">Reliable Data</span><br />From a Transparent,<br />Decentralized Community</h1>
            </div>
            <WhatWeDo />
            <Community />
            <Tools />
            <div className="roadmap">
                <div className="py-16 mx-5 lg:m-auto innerRoadmap">
                    <h3 className="text-white text-center md:pt-28 roboto font-bold text-4xl pb-20">Credmark Roadmap</h3>
                    <img alt="Credmark product roadmap" className="hidden md:block m-auto max-w-2xl pb-28" src="/assets/credmark-roadmap.png" />
                    <img alt="Credmark product roadmap" className="block md:hidden m-auto pb-14 px-2" src="/assets/mobile-roadmap.png" />
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

