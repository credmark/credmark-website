import * as React from 'react';


export default function Community() {
    return (
        <>
            <div className="py-20 md:py-28 communityBg">
                <div className="max-w-4xl block mx-auto px-4 md:p-0">
                    <h4 className="text-white max-w-5xl block mx-auto text-5xl pb-2 text-center font-medium leading-normal md:leading-10 pt-44">A Global, Decentralized Community</h4>
                    <p className="text-white text-center text-2xl font-light">Credmark is a decentralized project that connects model creators, validators, data consumers and protocol govenors.  Our community participates in governance, provides research, and develops models.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 block mx-auto max-w-xl pb-44">
                    <button
                        type="button"
                        className="mx-2 mt-7 text-white bg-green mt-5 px-10 py-2 shadow-sm text-sm font-medium rounded-md"
                    >
                        <a href="/careers">
                            <p>Join us</p>
                        </a>
                    </button>
                    <button
                        type="button"
                        className="mx-2 mt-7 text-white mt-5 px-10 py-2 shadow-sm text-sm font-medium rounded-md border-2 border-solid border-white hover:text-white hover:bg-credmarkpurple"
                    >
                        <a href="/contributors">
                            <p className="text-white">Our Contributors</p>
                        </a>
                    </button>
                    </div>
                </div>
            </div>
        </>
    );
}

