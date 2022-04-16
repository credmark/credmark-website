import * as React from 'react';
import Link from 'next/link';
import List from '../homepage/list'


export default function Tools() {
    return (
        <>
            <div className="pt-20 pb-20 md:py-40 homepage-bg">
                <div className="max-w-6xl block mx-auto">
                    <h3 className="flex justify-center text-4xl pb-20">Our Groundbreaking Tools</h3>
                    <div className="flex flex-wrap">
                        <img alt="Credmark terminal" src="../assets/credmark-tool.gif" />
                        <div className="box-shadow bg-white rounded-md p-7 max-w-md max-h-96 my-14">
                            <p className="font-bold text-2xl">API Gateway</p>
                            <p className="font-light text-xl pb-7">High Integrity Risk and Data Models</p>
                            <List
                                img="/assets/data-aggregation.svg"
                                title="Fine-tuned data aggregation and normalization for 1st, 2nd and 3rd order Data" />
                            <List
                                img="/assets/historical-data.svg"
                                title="Complete historical data" />
                            <List
                                img="/assets/risk-models.svg"
                                title="Direct query of output from risk models" />
                            <Link href="/blog" rel="noreferrer">
                                <button
                                    type="button"
                                    className="mt-7 text-credmarkpurple font-semibold mt-5 inline-flex items-center px-10 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green"
                                >
                                    <p className="font-light text-base">
                                        <span><img className="float-left pr-3.5" src="/assets/lock.svg" alt="lock" width={30} />Get Access</span>
                                    </p>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap pt-20 pb-16">
                        <div className="bg-white rounded-md p-7 max-w-md max-h-96 my-14 absolute">
                            <p className="font-bold text-2xl">Credmark Terminal</p>
                            <p className="font-light text-xl pb-7">Visualize DeFi analytics with intuitive graphs</p>
                            <List
                                img="/assets/analytics.svg"
                                title="Visualized crypto analytics" />
                            <List
                                img="/assets/market-risk.svg"
                                title="Market data & risk metrics for various protocols" />
                            <List
                                img="/assets/historic-data.svg"
                                title="Historic data up to 90 days" />
                            <List
                                img="/assets/export.svg"
                                title="Export data to CSV" />
                            <Link href="/blog" rel="noreferrer">
                                <button
                                    type="button"
                                    className="mt-7 text-credmarkpurple font-semibold mt-5 inline-flex items-center px-10 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green"
                                >
                                    <p className="font-light text-base">
                                        <span><img className="float-left pr-3.5" src="/assets/lock.svg" alt="lock" width={30} />Get Access</span>
                                    </p>
                                </button>
                            </Link>
                        </div>
                        <div>
                        <img className="max-w-2xl riskTerminalTool" alt="Credmark terminal" src="../assets/credmark-terminal.png" />
                        </div>
                    </div>
                </div>
           
                <div className="block mx-auto max-w-5xl">
                    <p className="font-light text-3xl flex justify-center">Coming soon...</p>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <div className="bg-white rounded-md p-7 max-w-md max-h-96 my-14">
                                <p className="font-bold text-2xl">Model Development</p>
                                <p className="font-light text-xl pb-7">Lorem ipsum dolor sit amet</p>
                                <List
                                    img="/assets/analytics.svg"
                                    title="Visualized crypto analytics" />
                                <List
                                    img="/assets/market-risk.svg"
                                    title="Market data & risk metrics for various protocols" />
                                <List
                                    img="/assets/historic-data.svg"
                                    title="Historic data up to 90 days" />
                                <List
                                    img="/assets/export.svg"
                                    title="Export data to CSV" />
                                <button
                                    type="button"
                                    className="mt-7 text-credmarkpurple font-semibold mt-5 inline-flex items-center px-10 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500"
                                >
                                    <p className="font-light text-base">
                                        Coming Soon...
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white rounded-md p-7 max-w-md max-h-96 my-14">
                                <p className="font-bold text-2xl">Model Validation</p>
                                <p className="font-light text-xl pb-7">Lorem ipsum dolor sit amet</p>
                                <List
                                    img="/assets/analytics.svg"
                                    title="Visualized crypto analytics" />
                                <List
                                    img="/assets/market-risk.svg"
                                    title="Market data & risk metrics for various protocols" />
                                <List
                                    img="/assets/historic-data.svg"
                                    title="Historic data up to 90 days" />
                                <List
                                    img="/assets/export.svg"
                                    title="Export data to CSV" />
                                <button
                                    type="button"
                                    className="mt-7 text-credmarkpurple font-semibold mt-5 inline-flex items-center px-10 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500"
                                >
                                    <p className="font-light text-base">
                                        Coming Soon...
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

