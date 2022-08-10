import * as React from 'react';
import Link from 'next/link';


export default function DataTrust() {
    return (
        <>
            <div className="bgData">
                <div className="mx-5 pt-20 pb-20 max-w-7xl block lg:mx-auto">
                    <h1 className="text-center text-green">Do you trust your data?</h1>
                   
                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto block">
                        <div>
                        <div className="flex justify-center lg:pt-16">
                            <img className="pt-2 pb-5 h-80 w-80" alt="Credmark API call" src="../assets/blurry-data.png" />
                        </div>
                            <p className="uppercase text-white text-center text-2xl openSansMedium">Most blockchain data</p>
                            <ul className="text-white">
                                <li>Lack of data visibility and transparency</li>
                                <li>Low speed and high latency</li>
                                <li>Unresponsive and missing data</li>
                                <li>Does not cover both state and ledger data</li>
                            </ul>
                        </div>
                        <div>
                        <div className="flex justify-center lg:pt-16">
                            <img className="pt-2 h-80 w-80" alt="Credmark API call output" src="../assets/credmark-data.png" />
                            </div>
                            <p className="uppercase text-white text-center text-2xl openSansMedium">Credmark&apos;s data</p>
                            <ul className="text-white">
                                <li>Data is cached for rapid queries</li>
                                <li>Data is cached for rapid queries</li>
                                <li>Covers state and ledger data</li>
                                <li>Can view decoded ABIs of verified contracts</li>
                                <li>Highly customizable and composable</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

