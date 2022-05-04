import * as React from 'react';
import Link from 'next/link';
import List from '../homepage/list'


export default function ToolsMobile() {
    return (
        <>
            <div className="pt-20 pb-20 homepage-bg">
                <div>
                    <h3 className="text-center mx-4 flex justify-center text-4xl pb-20 text-black">Our Ground-Breaking Tools</h3>
                    <div className="flex flex-wrap justify-center mx-4">
                        <img className="rounded-t-md width2x" alt="Credmark terminal" src="../assets/credmark-tool.gif" />
                        <div className="bg-white shadow-md rounded-b-md w-full p-7 mb-14">
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
                <div className="pt-28">
                    <div className="flex flex-wrap justify-center mx-4">
                    <img className="rounded-t-md width2x" alt="Credmark terminal" src="../assets/credmark-terminal.png" />
                        <div className="shadow-md rounded-b-md bg-white w-full p-7 mb-14">
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
                </div>
            </div>
        </>
    );
}

