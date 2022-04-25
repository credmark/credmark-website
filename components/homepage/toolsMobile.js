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
                        <img className="rounded-t-md" alt="Credmark terminal" src="../assets/credmark-tool.gif" />
                        <div className="bg-white shadow-md rounded-b-md p-7 mb-14">
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
                </div>
                <div className="max-w-4xl block mx-auto pt-28">
                    <div className="flex flex-wrap justify-center mx-4">
                    <img className="rounded-t-md" alt="Credmark terminal" src="../assets/credmark-terminal.png" />
                        <div className="shadow-md rounded-b-md bg-white p-7 mb-14">
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
                </div>
            </div>
        </>
    );
}

