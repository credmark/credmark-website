import * as React from 'react';
import Link from 'next/link';

export default function InAction() {
    return (
        <>
            <div className="py-10 mx-5 md:mx-0">
                <div className="max-w-5xl block mx-auto">
                    <h2 className="gradientFont text-center">
                        See it in action
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 py-16">
                        <div>
                            <p className="text-3xl font-normal text-green pt-5">
                                Build Data Models Faster
                            </p>
                            <p className="text-2xl font-normal leading-7 text-white leading-relaxed">
                                The Credmark Model Framework abstracts away the complexity of coding Python in web3, enabling rapid development.
                            </p>
                            <div className="flex pt-6">
                                <button
                                    type="button"
                                    className="md:mx-4 lg:mx-0 text-white border-green border-2 px-2 py-1 shadow-sm text-sm font-medium mt-3"
                                >
                                    <Link href="https://docs.credmark.com/cmf-model-guide/getting-started/installation-and-setup" target="_blank" rel="noreferrer">
                                        <p>Build Now</p>
                                    </Link>
                                </button>
                                <button
                                    type="button"
                                    className="ml-0 md:ml-5 mx-4 lg:mx-0 text-white border-2 border-transparent px-2 py-1 shadow-sm text-sm font-medium mt-3"
                                >
                                    <Link href="https://gateway.credmark.com/api/?urls.primaryName=Credmark%20APIs" target="_blank" rel="noreferrer">
                                        <p>See Our Models →</p>
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div>
                            <img className="rounded-t-md width2x" alt="Credmark model framework" src="../assets/credmark-model-framework.gif" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}