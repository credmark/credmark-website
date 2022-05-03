import * as React from 'react';
import Link from 'next/link';
import List from '../homepage/list'


export default function Tools() {
    return (
        <>
            <div className="pt-20 pb-20 md:py-40 homepage-bg">
                <div className="max-w-6xl block mx-auto">
                    <h3 className="flex justify-center text-4xl pb-20 text-black">Our Ground-Breaking Tools</h3>
                    <div className="flex flex-wrap justify-center">
                        <img alt="Credmark terminal" src="../assets/credmark-tool.gif" />
                        <div className="box-shadow bg-white rounded-md p-7 max-w-md max-h-96 my-14">
                            <p className="font-bold text-2xl">Credmark Model Framework</p>
                            <p className="font-light text-xl pb-7">Rapid Prototyping and Deployment</p>
                            <List
                                img="/assets/data-aggregation.svg"
                                title="Abstracts away the complexity of web3 coding" />
                            <List
                                img="/assets/historical-data.svg"
                                title="Complete real-time and historical data" />
                            <List
                                img="/assets/risk-models.svg"
                                title="Model search engine with example scripts to start immediately" />
                            <Link href="https://github.com/credmark/credmark-models-py/blob/main/README.md" rel="noreferrer">
                                <button
                                    type="button"
                                    className="mt-7 text-credmarkpurple font-semibold mt-5 inline-flex items-center px-10 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green"
                                >
                                    <p className="font-light text-base">
                                        Get Access
                                    </p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl block mx-auto pt-28">
                    <div className="flex flex-wrap justify-center">
                        <div className="bg-white rounded-md p-7 max-w-md max-h-96 my-14 absolute boxMargin">
                            <p className="font-bold text-2xl">Credmark Terminal</p>
                            <p className="font-light text-xl pb-7">Visualize DeFi analytics with intuitive graphs</p>
                            <List
                                img="/assets/crypto-data.svg"
                                title="Visualized crypto analytics" />
                            <List
                                img="/assets/risk-metrics.svg"
                                title="Market data & risk metrics for various protocols" />
                            <List
                                img="/assets/historic-data.svg"
                                title="Historic data up to 90 days" />
                             <List
                                img="/assets/export-csv.svg"
                                title="Export data to CSV" />
                            <Link href="https://app.credmark.com/terminal" rel="noreferrer">
                                <button
                                    type="button"
                                    className="mt-7 text-credmarkpurple font-semibold mt-5 inline-flex items-center px-10 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green"
                                >
                                    <p className="font-light text-base">
                                        <span>Get Access</span>
                                    </p>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <img className="max-w-2xl riskTerminalToolTwo" alt="Credmark terminal" src="../assets/credmark-terminal.png" />
                </div>
            </div>
        </>
    );
}

