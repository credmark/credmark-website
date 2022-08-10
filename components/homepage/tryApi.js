import * as React from 'react';
import Link from 'next/link';


export default function TryApi() {
    return (
        <>
            <div className="mx-5 pt-20 pb-20 max-w-7xl block lg:mx-auto">
                <div>
                    <h1 className="font-gradient">Try our API</h1>
                    <p>Our API is your gateway to the highest quality financial data, designed with verifiable integrity and transparency.</p>
                    <button
                        type="button"
                        className="mx-2 lg:mx-0 text-white heroButton mt-5 px-5 py-2 mb-10 shadow-sm text-sm font-medium"
                    >
                        <Link href="/credmark-data">
                            <p>Learn more about our data</p>
                        </Link>
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="md:mr-5">
                            <img className="pt-2 pb-5" alt="Credmark API call" src="../assets/api-call.png" />
                        </div>
                        <div className="md:ml-5">
                            <img className="pt-2" alt="Credmark API call output" src="../assets/output.png" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

