import * as React from 'react';
import Link from 'next/link';
import QueryList from './queryList';

export default function QueryData() {
    return (
        <>
            <div className="py-10 mx-5 md:mx-0">
                <div className="max-w-6xl block mx-auto">
                    <h2 className="gradientFont text-center">
                        Transform any data fast
                    </h2>
                    <p className="text-green text-center max-w-2xl mx-auto pt-5 md:pt-10">The CTF provides a framework, base models, and data access facilities to make writing transformations easy</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 py-16">
                        <div className="whatItIsBg p-7 rounded-md mt-0 lg:mt-9">
                            <div className="flex">
                            <img src="/assets/lightbulb-icon.svg" alt="lightbulb icon" />
                            <h3 className="gradientFont text-3xl font-normal text-green pt-5">
                                What are transformations?
                            </h3>
                            </div>
                            <p className="text-xl font-normal text-white">
                                A transformation is code that ingests data, transform it, and outputs new data. Inputs can be provided by the developer, a user, or fetched from a database.
                            </p>
                            {/* <div className="flex pt-6">
                                <button
                                    type="button"
                                    className="mx-4 lg:mx-0 text-white border-2 border-transparent py-1 shadow-sm text-sm font-medium mt-3"
                                >
                                    <Link href="https://docs.credmark.com/cmf-model-guide/getting-started/installation-and-setup" target="_blank" rel="noreferrer">
                                        <p>Build Now →</p>
                                    </Link>
                                </button>
                            </div> */}
                        </div>
                        <div className="pl-0 md:pl-10 mt-10 md:mt-0">
                            <p className="text-green font-semibold text-3xl mb-5 lg:mb-10">Various transformations</p>
                            <QueryList description="CTF transformations have priority access to decoded, indexed historical blockchain data" />
                            <QueryList description="A simple transformations could return the most recently processed block" />
                            <QueryList description="A more complicated tranformation could take a token symbol and return its current price" />
                            <QueryList description="A sophisticated tranformation could take a wallet address and return the performance of its holdings" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
