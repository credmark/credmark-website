import { useState } from 'react'
import DefiApi from './defiApi';
import PortfolioApi from './portfolioApi';
import RawData from './rawData';
import TokenApi from './tokenApi';
import Subscribe from '../subscribe/subscribe';
import Footer from '../layout/footer';
import { useRouter } from "next/router";
import Link from "next/link";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Tab = ({ href, isSelected, title }) => (
    <Link href={href}>
        <div className={isSelected ? "cursor-pointer py-4 px-6 border-b-2 border-green min-h-full" : "cursor-pointer py-4 px-6 border-b-2 border-white min-h-full"}>
            <a className={isSelected ? "cursor-pointer openSansMedium text-xl font-bold text-green text-center" : "cursor-pointer openSansMedium text-xl font-bold text-white text-center"}>
                {title}
            </a>
        </div>
    </Link>
)

const Applications = () => {
    const { query } = useRouter();

    const isTabOneSelected = !!query.tokenApi;
    const isTabTwoSelected = !!query.rawData;
    const isTabThreeSelected = !!query.defiApi;
    const isTabFourSelected = !!query.portfolioApi;

    return (
        <>
            <div id="learnMore" className="bg-purple-500">
                <h1 className="tracking-tight font-bold gradientFont text-center pb-5 lg:pb-11">Product descriptions</h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 max-w-6xl block mx-auto">
                    <Tab href="/product/?tokenApi=true#learnMore" title="Token API" isSelected={isTabOneSelected} />
                    <Tab href="/product/?rawData=true#learnMore" title="Raw Data " isSelected={isTabTwoSelected} />
                    <Tab href="/product/?defiApi=true#learnMore" title="DeFi API" isSelected={isTabThreeSelected} />
                    <Tab href="/product/?portfolioApi=true#learnMore" title="Portfolio API" isSelected={isTabFourSelected} />
                </div>

                <div className="outlet">
                    {!!query.tokenApi ? <TokenApi /> : ""}
                    {!!query.rawData ? <RawData /> : ""}
                    {!!query.defiApi ? <DefiApi /> : ""}
                    {!!query.portfolioApi ? <PortfolioApi /> : ""}
                </div>

                <div className="px-4 lg:px-0">
                    <h1 className="tracking-tight font-bold gradientFont text-center pb-5 lg:pb-0">Chains we support</h1>
                    <div className="grid grid-cols-1 lg:flex flex-wrap justify-between max-w-2xl mx-auto pb-20">
                        <div>
                            <img className="block mx-auto h-24" src="/assets/etheruem.svg" alt="etheruem logo" />
                            <p className="text-green text-center bungee">Ethereum</p>
                        </div>
                        <div>
                            <img className="block mx-auto h-24 w-20 pt-10 lg:pt-0" src="/assets/polygon-logo.svg" alt="polygon logo" />
                            <p className="text-green text-center bungee">Polygon <br /> (coming soon)</p>
                        </div>
                        <div>
                            <div className="w-16 block mx-auto">
                                <img className="block mx-auto w-48 pt-10 lg:pt-6" width={150} src="/assets/binance.svg" alt="binance logo" />
                            </div>
                            <p className="text-green text-center bungee">BSC <br /> (coming soon)</p>
                        </div>

                    </div>
                </div>
                <div className="bg-white">
                    <div className="px-5 py-10 md:pt-28">
                        <h2 className="text-black max-w-7xl block m-auto font-extrabold text-center">
                            TRUSTED BY
                        </h2>
                    </div>
                    <div className="max-w-4xl block m-auto">
                        <div className="grid grid-cols-1 m-auto block md:grid-cols-4 px-5 pb-0 md:pb-10">
                            <a href="https://coinshift.xyz/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={150} src="../assets/Coinshift.svg" alt="Coinshift logo" /></a>
                            <a href="https://www.yield.app/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={130} src="../assets/yieldapp-logo.svg" alt="Yield App logo" /></a>
                            <a href="https://picante.io/" target="_blank" rel="noreferrer"><img className="block mx-auto py-7" width={150} src="../assets/picante-logo.svg" alt="Picante logo" /></a>
                            <a href="https://exponent.cx/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5" width={170} src="../assets/exponent.jpeg" alt="Exponent logo" /></a>
                        </div>
                        <div className="max-w-2xl block m-auto grid grid-cols-1 m-auto block md:grid-cols-3 px-5 pb-10 md:pb-20 md:px-0">
                            <a href="https://dlab.vc/" target="_blank" rel="noreferrer"><img className="py-5 block mx-auto" width={130} src="../assets/dlab-logo.svg" alt="DLAB logo" /></a>
                            <a href="https://www.longhash.com/en" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-10" width={150} src="../assets/longhash-logo.svg" alt="Long Hash Ventures logo" /></a>
                            <a href="https://api3.org/" target="_blank" rel="noreferrer"><img className="block mx-auto py-5 md:py-10" width={130} src="../assets/API3-logo.svg" alt="API3 logo" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </>
    );
};
export default Applications;