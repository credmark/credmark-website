import * as React from 'react';
import Link from 'next/link';


export default function BuildModels() {
    return (
        <>
            <div className="modelsBgColour">
                <div className="modelsBg">
                <div className="pb-20 max-w-7xl block mx-auto">
                    <h1 className="mx-5 lg:mx-0 font-gradient text-white text-center pt-20 md:pt-72 pb-10">Full Blockchain Coverage</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="mx-4">
                            <h3 className="text-green">Flexible Data</h3>
                            <p className="text-white">Tailor the data to your needs by simply adjusting the inputs</p>
                        </div>
                        <div className="mx-4">
                            <h3 className="text-green">Highly composable</h3>
                            <p className="text-white">Build on top of the data or flexibly deploy it in various environments</p>
                        </div>
                        <div className="mx-4">
                            <h3 className="text-green">Support python</h3>
                            <p className="text-white">Start building with a few lines of code using Jupiter Notebook</p>
                        </div>
                    </div>
                    <div className="flex justify-center pt-10">
                    <button
                        type="button"
                        className="mx-2 lg:mx-0 text-black bg-green mt-5 px-5 py-2 mb-10 shadow-sm text-sm font-bold"
                    >
                        <Link href="https://developer-docs.credmark.com/en/latest/usage.html">
                            <p>Start building</p>
                        </Link>
                    </button>
                    </div>
                </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap">
                    <div className="mx-5 lg:pl-20 lg:pt-40">
                        <h1 className="text-white">See our API in action</h1>
                        <p className="text-white">Discover the potential of our API in the Credmark Terminal. Visualize the models in action and glean insights from popular DEXs and protocols like Uniswap, FRAX, Curve, Aave and more!</p>
                        <button
                        type="button"
                        className="mx-2 lg:mx-0 text-black bg-green mt-5 px-5 py-2 mb-10 shadow-sm text-sm font-bold"
                    >
                        <Link href="https://app.credmark.com/">
                            <p>View the Terminal</p>
                        </Link>
                    </button>
                    </div>
                    <div className="md:ml-5">
                            <img alt="arrow right" src="../assets/api-terminal.png" />
                        </div>
                </div>
            </div>
        </>
    );
}

