import * as React from 'react';


export default function Stats() {
    return (
        <>
            <div className="py-5 bg-black">
                <div className="bg-black">
                    <dl className="rounded-lg bg-black shadow-lg sm:grid sm:grid-cols-6">
                        <div className="flex flex-col text-center statBorder">
                            <dt className="mt-2 text-xs leading-6 text-white courier">Token Price</dt>
                            <dd className="text-2xl text-white py-2">$0.2192</dd>
                            <dt className="mt-2 text-xs leading-6 text-white courier">03/04/22 15:23:00 GMT</dt>
                        </div>
                        <div className="flex flex-col text-center statBorder">
                            <dt className="mt-2 text-xs leading-6 text-white courier">Market Cap</dt>
                            <dd className="text-2xl text-white py-2">$0.2192</dd>
                            <dt className="mt-2 text-xs leading-6 text-white courier">03/04/22 15:23:00 GMT</dt>
                        </div>
                        <div className="flex flex-col text-center statBorder">
                            <dt className="mt-2 text-xs leading-6 text-white courier">Circulating Supply</dt>
                            <dd className="text-2xl text-white py-2">$0.2192</dd>
                            <dt className="mt-2 text-xs leading-6 text-white courier">03/04/22 15:23:00 GMT</dt>
                        </div>
                        <div className="flex flex-col text-center statBorder">
                            <dt className="mt-2 text-xs leading-6 text-white courier">Amount Staked</dt>
                            <dd className="text-2xl text-white py-2">$0.2192</dd>
                            <dt className="mt-2 text-xs leading-6 text-white courier">03/04/22 15:23:00 GMT</dt>
                        </div>
                        <div className="flex flex-col text-center statBorder">
                            <dt className="mt-2 text-xs leading-6 text-white courier">Staking APR</dt>
                            <dd className="text-2xl text-white py-2">$0.2192</dd>
                            <dt className="mt-2 text-xs leading-6 text-white courier">03/04/22 15:23:00 GMT</dt>
                        </div>
                        <div className="flex flex-col text-center">
                            <dt className="text-xs leading-6 text-white courier mx-2">Earn interest while accessing our groudbreaking tools</dt>
                            <div className="mx-auto block">
                            <button
                                type="button"
                                className="text-white text-sm font-medium inline-flex pt-5"
                            >
                                Get started
                                <img className="float-right pt-0.5 pl-2" alt="arrow right" src="../assets/arrow-white.svg" />
                            </button>
                        </div>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    );
}

