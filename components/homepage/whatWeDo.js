import * as React from 'react';
import WhatWeDoTiles from './WhatWeDoTiles';


export default function WhatWeDo() {
    return (
        <>
            <div className="pt-20 pb-20 md:py-28 homepage-bg">
                <div className="max-w-7xl block mx-auto">
                    <h4 className="px-4 md:px-0 max-w-4xl block mx-auto text-3xl pb-10 md:pb-20 text-center text-black font-light leading-10">Credmark is a financial modeling platform powered by reliable on-chain data.  Validated models are readily composable making rapid app development simple.</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <WhatWeDoTiles
                            title="Reliable Data"
                            text="Our community of Data Curators collect validated state and ledger data, indexed to allow rapid, seamless access for $CMK token holders"
                            cta="Learn more"
                        />
                        <div className="bg-white p-8 my-5 md:my-0 mx-5 rounded-md shadow-sm cursor-pointer">
                            <h3 className="font-bold text-black text-3xl">
                                Original Research
                            </h3>
                            <p className="text-base font-normal leading-7 pt-3">
                                Our Risk Contributors produce research for various protocols and DeFi modeling best practices, giving you the insights you need to build reliable DeFi models.
                            </p>
                            <div className="buttonTextHover">
                                <button
                                    type="button"
                                    className="mt-7 text-credmarkpurple mt-5 inline-flex items-center px-10 py-2 shadow-sm text-sm font-medium rounded-md border-2 border-solid border-credmarkpurple hover:text-white hover:bg-credmarkpurple"
                                >
                                    <a href="https://docs.credmark.com/credmark-wiki/" target="_blank" rel="noreferrer">
                                        <p className="hover:text-white inline-flex">Credmark Wiki</p>
                                        <img className="float-right pt-2 pl-2" alt="arrow right" src="../assets/arrow.svg" />
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="bg-white p-8 my-5 md:my-0 mx-5 rounded-md shadow-sm bg-green cursor-pointer">
                            <h3 className="font-bold text-credmarkpurple text-3xl">
                                Battle-Tested Models
                            </h3>
                            <p className="text-base font-normal leading-7 pt-3 text-credmarkpurple">
                                Our community of Model Contributors leverage on-chain state and ledger data to build analysis tools designed for risk-adjusted-returns
                            </p>
                            <div className="buttonTextHover">
                                <button
                                    type="button"
                                    className="mt-7 mt-5 inline-flex items-center px-10 py-2 shadow-sm text-sm font-medium rounded-md bg-credmarkpurple"
                                >
                                    <a href="https://docs.credmark.com/credmark-wiki/" target="_blank" rel="noreferrer">
                                        <p className="text-white inline-flex">Get started</p>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

