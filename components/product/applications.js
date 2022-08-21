import { useState } from 'react'
import DefiApi from './defiApi';
import PortfolioApi from './portfolioApi';
import RawData from './rawData';
import TokenApi from './tokenApi';
import Subscribe from '../subscribe/subscribe';
import Footer from '../layout/footer';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Applications = () => {
    const [activeTab, setActiveTab] = useState("tokenApi");
    //  Functions to handle Tab Switching
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tokenApi");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("portfolioApi");
    };
    const handleTab3 = () => {
        // update the state to tab2
        setActiveTab("defiApi");
    };
    const handleTab4 = () => {
        // update the state to tab2
        setActiveTab("rawData");
    };
    return (
        <div id="learnMore" className="bg-purple-500">
            <p className="uppercase text-green text-center font-bold">Don't know what to get?</p>
            <h1 className="tracking-tight font-bold gradientFont text-center pb-5 lg:pb-11">Discover the applications</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 max-w-6xl block mx-auto">
                <div
                    className={activeTab === "tokenApi" ? "active" : ""}
                    onClick={handleTab1}
                >
                    <div className={activeTab === "tokenApi" ? "cursor-pointer py-4 px-6 border-b-2 border-green min-h-full" : "cursor-pointer py-4 px-6 border-b-2 border-white min-h-full"}>
                        <h2 className={activeTab === "tokenApi" ? "openSansMedium text-xl font-bold text-green text-center" : "openSansMedium text-xl font-bold text-white text-center"}>Token API</h2>
                    </div>
                </div>
                <div
                    className={activeTab === "portfolioApi" ? "active" : ""}
                    onClick={handleTab2}
                >
                    <div className={activeTab === "portfolioApi" ? "cursor-pointer py-4 px-6 border-b-2 border-green min-h-full" : "cursor-pointer py-4 px-6 border-b-2 border-white min-h-full"}>
                        <h2 className={activeTab === "portfolioApi" ? "openSansMedium text-xl font-bold text-green text-center" : "openSansMedium text-xl font-bold text-white text-center"}>Portfolio API</h2>
                    </div>
                </div>
                <div
                    className={activeTab === "defiApi" ? "active" : ""}
                    onClick={handleTab3}
                >
                    <div className={activeTab === "defiApi" ? "cursor-pointer py-4 px-6 border-b-2 border-green min-h-full" : "cursor-pointer py-4 px-6 border-b-2 border-white  min-h-full"}>
                        <h2 className={activeTab === "defiApi" ? "openSansMedium text-xl font-bold text-green text-center" : "openSansMedium text-xl font-bold text-white text-center"}>Token API</h2>
                    </div>
                </div>
                <div
                    className={activeTab === "rawData" ? "active" : ""}
                    onClick={handleTab4}
                >
                    <div className={activeTab === "rawData" ? "cursor-pointer py-4 px-6 border-b-2 border-green min-h-full" : "cursor-pointer py-4 px-6 border-b-2 border-white min-h-full"}>
                        <h2 className={activeTab === "rawData" ? "openSansMedium text-xl font-bold text-green text-center" : "openSansMedium text-xl font-bold text-white text-center"}>Raw Data</h2>
                    </div>
                </div>
            </div>

            <div className="outlet">
                {activeTab === "tokenApi" ? <TokenApi /> : ""}
                {activeTab === "rawData" ? <RawData /> : ""}
                {activeTab === "defiApi" ? <DefiApi /> : ""}
                {activeTab === "portfolioApi" ? <PortfolioApi /> : ""}
            </div>
            <div className="px-4 lg:px-0">
            <h1 className="tracking-tight font-bold gradientFont text-center pb-5 lg:pb-0">What we support</h1>
            <div className="flex flex-wrap justify-between max-w-xl mx-auto pb-20">
                <div>
                    <img className="block mx-auto h-24" src="/assets/etheruem.svg" alt="etheruem logo" />
                    <p className="text-green text-center bungee">Ethereum</p>
                </div>
                <div>
                    <img className="block mx-auto h-24 w-20" src="/assets/polygon-logo.svg" alt="polygon logo" />
                    <p className="text-green text-center bungee">Polygon</p>
                </div>
                <div>
                    <img className="block mx-auto h-24 w-20" src="/assets/avalanche.svg" alt="avalanche logo" />
                    <p className="text-green text-center bungee">Avalanche</p>
                </div>

            </div>
            </div>
            <div className="bg-white py-10 md:py-28">
                <div className="px-5">
                    <h2 className="text-black max-w-7xl block m-auto font-extrabold text-center">
                        TRUSTED BY
                    </h2>
                </div>

                <div className="max-w-4xl block m-auto">
                    <div className="grid grid-cols-1 m-auto block md:grid-cols-3 px-5 pb-0 md:pb-10">
                        <a href="https://dlab.vc/" target="_blank" rel="noreferrer"><img className="py-5 block mx-auto" width={150} src="../assets/dlab-logo.svg" alt="DLAB logo" /></a>
                        <a href="https://www.longhash.com/en" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-10" width={150} src="../assets/longhash-logo.svg" alt="Long Hash Ventures logo" /></a>
                        <a href="https://api3.org/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-10" width={150} src="../assets/API3-logo.svg" alt="API3 logo" /></a>
                    </div>
                    <div className="grid grid-cols-1 m-auto block md:grid-cols-4 px-5 md:px-0">
                        <a href="https://steadystate.finance/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={200} src="../assets/steady-state-logo.svg" alt="Steady State logo" /></a>
                        <a href="https://coinshift.xyz/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={150} src="../assets/Coinshift.svg" alt="Coinshift logo" /></a>
                        <a href="https://www.yield.app/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={150} src="../assets/yieldapp-logo.svg" alt="Yield App logo" /></a>
                        <a href="https://www.alchemist.wtf/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={180} src="../assets/alchemist.svg" alt="Alchemist logo" /></a>
                    </div>
                </div>
            </div>

            <Subscribe />
            <Footer />
        </div>
    );
};
export default Applications;