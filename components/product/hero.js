import Nav from "../layout/nav"
import Link from 'next/link'


export default function ProductHero() {

    return (

        <div className="bg-credmarkpurple productHeroBg w-screen" >
            <div className="py-2 stickyCta text-center relative">
                <div>
                    <Link href="#learnMore" rel="noreferrer"><p className="text-white text-base flex justify-center flex-wrap"><span className="float-left pr-3">
                    The only source of DeFi prices: our Token API. Simple. Powerful. Try it.</span><img className="hover:animate-pulse" src="../assets/arrow-white.svg" alt="Right arrow" /></p></Link>
                </div>
            </div>
            <div className="bg-credmarkpurple heroBg w-screen" ></div>
            <Nav />
            <div className="max-w-6xl block mx-auto">
                <h1 className="px-4 md:px-0 text-green pt-10 md:pt-32 leading-snug pb-3 text-center">
                    Access
                    <br />
                    Simple. Powerful. Blockchain Data
                </h1>
                <p className="px-4 md:px-0 text-white block mx-auto leading-snug text-center">
                    We do the heavy lifting so you can build and ship
                </p>
                <div className="flex justify-center flex-wrap pb-14 lg:pb-96 pt-6">
                    <button
                        type="button"
                        className="w-36 mx-2 text-white heroButton mt-5 px-2 py-2 shadow-sm text-sm font-medium"
                    >
                        <Link href="#learnMore">
                            <p>Learn more</p>
                        </Link>
                    </button>
                    <button
                        type="button"
                        className="w-36 mx-2 text-white border-2 border-white mt-5 px-2 py-2 shadow-sm text-sm font-medium"
                    >
                        <Link href="#pricing">
                            <p>See pricing</p>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}