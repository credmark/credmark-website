import * as React from 'react';
import Link from 'next/link';


export default function BlockchainCoverage() {
    return (
        <>
            <div className="bg-black">
                <div className="mx-5 pt-20 pb-20 max-w-7xl block lg:mx-auto">
                    <h1 className="text-center text-green">Full Blockchain Coverage</h1>
                    <p className="text-center text-white">
                    Credmark data offers complete blockchain coverage and is purpose built for financial and data modeling.
                    </p>
                   
                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto block">
                        <div>
                        <div className="flex pt-10">
                            <img alt="Credmark API call" src="../assets/polygon.svg" />
                        </div>
    
                        </div>
                        <div className="lg:pt-40 lg:pl-40">
                            <div className="stateDataBg p-5">
                            <p className="uppercase text-white text-2xl openSansMedium">State data</p>
                            <p className="text-white">
                                Query the state of the blockchain anytime without the hassle of aggregating historical events.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

