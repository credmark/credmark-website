import * as React from 'react';

export default function WhatWeDo() {
    return (
        <>
            <div className="pt-20 pb-20 md:py-28 homepage-bg">
                <div className="max-w-7xl block mx-auto">
                    <h4 className="px-4 md:px-0 max-w-4xl block mx-auto text-3xl pb-10 md:pb-20 text-center text-black font-light leading-10">Credmark is a financial modeling platform powered by reliable on-chain data. Validated models are readily composable making rapid prototyping simple.</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="bg-white p-8 my-5 lg:my-0 mx-5 rounded-md shadow-sm cursor-pointer">
                            <h3 className="font-bold text-black text-3xl">
                                Reliable Data
                            </h3>
                            <p className="text-base font-normal leading-7 pt-3 hover:text-credmarkpurple">
                            Complete on-chain data coverage with verifiable state and ledger data used to power financial models, DeFi analytics, and dApps
                            </p>
                        </div>
                        <div className="bg-white p-8 my-5 lg:my-0 mx-5 rounded-md shadow-sm cursor-pointer">
                            <h3 className="font-bold text-black text-3xl">
                                Crowdsourced Insights
                            </h3>
                            <p className="text-base font-normal leading-7 pt-3 pb-7">
                            Collective research and insights designed to help modelers understand DeFi protocols and build models with best practices
                            </p>
                            <div className="buttonTextHover">
                                <button
                                    type="button"
                                    className="mt-7 text-credmarkpurple mt-5 inline-flex items-center px-10 py-2 shadow-sm text-sm font-medium rounded-md border-2 border-solid border-credmarkpurple"
                                >
                                    <a href="https://docs.credmark.com/credmark-wiki/" target="_blank" rel="noreferrer">
                                        <p className="inline-flex">Credmark Wiki</p>
                                        <img className="float-right pt-2 pl-2" alt="arrow right" src="../assets/arrow.svg" />
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="bg-white p-8 my-5 lg:my-0 mx-5 rounded-md shadow-sm bg-green cursor-pointer">
                            <h3 className="font-bold text-credmarkpurple text-3xl">
                                Battle-Tested Models
                            </h3>
                            <p className="text-base font-normal leading-7 pt-3 text-credmarkpurple">
                            All models undergo quality assessment to ensure the model performs as stated and validated so it can be listed for the community’s use
                            </p>
                            <div className="buttonTextHover">
                                <button
                                    type="button"
                                    className="mt-7 mt-5 inline-flex items-center px-10 py-2 shadow-sm text-sm font-medium rounded-md bg-credmarkpurple"
                                >
                                    <a href="https://gateway.credmark.com/api/?urls.primaryName=Credmark%20Models" target="_blank" rel="noreferrer">
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

