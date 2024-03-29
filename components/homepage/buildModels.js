import * as React from 'react';
import Link from 'next/link';


export default function BuildModels() {
    return (
        <>
            <div className="modelsBgColour">
                <div className="modelsBg">
                    <div className="pb-20 max-w-7xl block mx-auto">
                        <h1 className="mx-5 lg:mx-0 gradientFont pt-20 md:pt-72">Build your own transformations</h1>
                        <p className="text-white pb-16 mx-5 lg:mx-0">Use our RPC nodes, or your own. Use our decoded, indexed historical data. Use existing transformations. Use the most powerful transformation platform in DeFi to access and transform data.</p>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="mx-4">
                                <h3 className="text-green">Powerful Data</h3>
                                <p className="text-white">Curated for fast, easy access.</p>
                            </div>
                            <div className="mx-4">
                                <h3 className="text-green">Highly composable</h3>
                                <p className="text-white">Leverage existing transformations.</p>
                            </div>
                            <div className="mx-4">
                                <h3 className="text-green">Python</h3>
                                <p className="text-white">Write your models in Python. We’ve integrated all the data science libraries you need. And we support Jupyter Notebook.</p>
                            </div>
                        </div>
                        <div className="flex justify-center gap-6 flex-wrap lg:ml-3 pt-10">
                        <button
                                type="button"
                                className="mx-2 lg:mx-0 border-white border-2 mt-5 px-7 py-2 mb-10 shadow-sm text-sm font-bold"
                            >
                                <a 
                                target="_blank"
                                rel="noreferrer"
                                href="https://app.credmark.com/models"
                                >
                                    <p className="text-white">View methods</p>
                                </a>
                            </button>
                            <button
                                type="button"
                                className="mx-2 lg:mx-0 text-black bg-green mt-5 px-5 py-2 mb-10 shadow-sm text-sm font-bold"
                            >
                                <Link 
                                href="/credmark-model-framework"
                                >
                                    <p className="flex">Learn more<img className="pt-0.5 pl-2" alt="arrow right" src="../assets/arrow.svg" /></p>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap">
                    <div className="mx-5 lg:pl-20 lg:pt-40">
                        <h1 className="gradientFont">See our DeFi API in Action</h1>
                        <p className="text-white">Discover the potential of our DeFi API in our Terminal. Visualize some of our models and gain insight into popular DEXes and protocols like Uniswap, FRAX, Curve, Aave and more!</p>
                        <button
                            type="button"
                            className="mx-2 lg:mx-0 text-black bg-green mt-5 px-5 py-2 mb-10 shadow-sm text-sm font-bold"
                        >
                                <a href="https://app.credmark.com/terminal/dex/uniswap-v2" target="_blank" rel="noreferrer">
                                    <p>View the Terminal</p>
                                </a>
                        </button>
                    </div>
                    <div>
                        <img alt="arrow right" src="../assets/api-terminal.png" />
                    </div>
                </div>
            </div>
        </>
    );
}

