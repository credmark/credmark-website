import * as React from 'react';
import Nav from './nav';
import Link from "next/link";



const CareerHeader = (props) => {
    return (
        <>
            <div className="py-2 stickyCta text-center relative">
                <div>
                    <Link href="/product?tokenApi=true#learnMore" rel="noreferrer"><p className="text-white text-base flex justify-center flex-wrap"><span className="float-left pr-3">
                        The only source of DeFi prices: our Token API. Simple. Powerful. Try it.</span><img className="hover:animate-pulse" src="../assets/arrow-white.svg" alt="Right arrow" /></p></Link>                
                </div>
            </div>
            <div className="bg-credmarkpurple heroBg w-screen">

            </div>
            <div className="header-bg">

                <Nav />
                <div className="max-w-6xl px-5 block m-auto">
                    <strong><h1 className="leading-normal text-white font-bold pt-20 md:pt-36 pb-5">{props.title}</h1></strong>
                    <p className="text-white text-3xl font-light max-w-3xl leading-10">{props.description}</p>
                    <p className="text-white text-3xl font-light max-w-3xl pb-20 md:pb-32 leading-10">{props.descriptionTwo}</p>
                </div>
            </div>
        </>
    );
}

export default CareerHeader;
