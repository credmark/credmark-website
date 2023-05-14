import Nav from "../layout/nav"
import Link from 'next/link'


export default function PricingHero() {

    return (

        <div className="w-screen" >
            <div className="py-2 stickyCta text-center relative">
                <div>
                    <Link href="#learnMore" rel="noreferrer"><p className="text-white text-base flex justify-center flex-wrap"><span className="float-left pr-3">
                    The only source of DeFi prices: our Token API. Simple. Powerful. Try it.</span><img className="hover:animate-pulse" src="../assets/arrow-white.svg" alt="Right arrow" /></p></Link>
                </div>
            </div>
            <div className="bg-credmarkpurple heroBg w-screen" ></div>
            <Nav />
        </div>
    )
}