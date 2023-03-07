import { useState } from 'react'
import DefiApi from './defiApi';
import PortfolioApi from './portfolioApi';
import RawData from './rawData';
import TokenApi from './tokenApi';
import Subscribe from '../subscribe/subscribe';
import Footer from '../layout/footer';
import { useRouter } from "next/router";
import Link from "next/link";
import TrustedBy from '../global/trusted-by';
import AvailableOn from '../layout/availableOn';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Tab = ({ href, isSelected, title }) => (
    <Link href={href}>
        <div className={isSelected ? "text-center  cursor-pointer py-4 px-6 border-b-2 border-green min-h-full" : "text-center cursor-pointer py-4 px-6 border-b-2 border-white min-h-full"}>
            <a className={isSelected ? "text-center cursor-pointer openSansMedium text-xl font-bold text-green text-center" : "text-center  cursor-pointer openSansMedium text-xl font-bold text-white text-center"}>
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
                    <Tab href="/product/?portfolioApi=true#learnMore" title="Portfolio API" isSelected={isTabFourSelected} />
                    <Tab href="/product/?defiApi=true#learnMore" title="DeFi API" isSelected={isTabThreeSelected} />
                    <Tab href="/product/?rawData=true#learnMore" title="Raw Data " isSelected={isTabTwoSelected} />
                </div>

                <div className="outlet">
                    {!!query.tokenApi ? <TokenApi /> : ""}
                    {!!query.rawData ? <RawData /> : ""}
                    {!!query.defiApi ? <DefiApi /> : ""}
                    {!!query.portfolioApi ? <PortfolioApi /> : ""}
                </div>

               <AvailableOn />
               <TrustedBy />
            </div>
            <Subscribe />
            <Footer />
        </>
    );
};
export default Applications;