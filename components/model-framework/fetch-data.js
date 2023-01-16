import * as React from 'react';
import Link from 'next/link';

export default function FetchData() {
    return (
        <>
            <div className="py-10">
                <div className="max-w-7xl block mx-auto">
                    <h2 className="gradientFont text-center">
                        Fetch Any Data in a few steps
                    </h2>
                    <div className="flex flex-wrap lg:flex-nowrap pt-10 justify-center">
                        <div className="whatItIsBg p-8 my-5 lg:my-0 mx-5 rounded-md shadow-sm cursor-pointer text-center">
                            <img className="mx-auto block" src="../assets/1.svg" alt="1" />
                            <p className="text-base font-normal text-green pt-5">
                                Create an API Key
                            </p>
                            <p className="text-base font-normal leading-7 text-white">
                                Get a 30-day free trial instantly after you sign up.
                            </p>
                            <button
                                type="button"
                                className="mx-4 lg:mx-0 text-white border-green border-2 px-2 py-1 shadow-sm text-sm font-medium mt-3"
                            >
                                <Link href="https://access.credmark.com/" target="_blank" rel="noreferrer">
                                    <p className="px-4 text-base">Sign up →</p>
                                </Link>
                            </button>
                        </div>
                        <div className="whatItIsBg p-8 my-5 lg:my-0 mx-5 rounded-md shadow-sm cursor-pointer text-center">
                            <img className="mx-auto block" src="../assets/2.svg" alt="2" />
                            <p className="text-base font-normal text-green pt-5">
                                Call the API
                            </p>
                            <p className="text-base font-normal leading-7 text-white">
                                Connect to the API to retrieve the data you need.
                            </p>
                            <button
                                type="button"
                                className="mx-4 lg:mx-0 text-white border-green border-2 px-2 py-1 shadow-sm text-sm font-medium mt-3"
                            >
                                <Link href="https://docs.credmark.com/cmf-model-guide/getting-started/installation-and-setup" target="_blank" rel="noreferrer">
                                    <p className="px-4 text-base">Set Up Now →</p>
                                </Link>
                            </button>
                        </div>
                        <div className="whatItIsBg p-8 my-5 lg:my-0 mx-5 rounded-md shadow-sm cursor-pointer text-center">
                            <img className="mx-auto block" src="../assets/3.svg" alt="3" />
                            <p className="text-base font-normal text-green pt-5">
                               Build new Models
                            </p>
                            <p className="text-base font-normal leading-7 text-white">
                                Fork the CMF repo. Write models.
                            </p>
                            <button
                                type="button"
                                className="mx-4 lg:mx-0 text-white border-green border-2 px-2 py-1 shadow-sm text-sm font-medium mt-3"
                            >
                                <Link href="https://docs.credmark.com/cmf-model-guide/how-to-access-models-and-data/how-to-get-api-access" target="_blank" rel="noreferrer">
                                    <p className="px-4 text-base">Learn How →</p>
                                </Link>
                            </button>
                        </div>
                        <div className="whatItIsBg p-8 my-5 lg:my-0 mx-5 rounded-md shadow-sm cursor-pointer text-center">
                            <img className="mx-auto block" src="../assets/4.svg" alt="4" />
                            <p className="text-base font-normal text-green pt-5">
                                You&apos;re Done!
                            </p>
                            <p className="text-base font-normal leading-7 text-white">
                                Use the DeFi API to call your models.
                            </p>
                            <button
                                type="button"
                                className="mx-4 lg:mx-0 text-white border-green border-2 px-2 py-1 shadow-sm text-sm font-medium mt-3"
                            >
                                <Link href="https://docs.credmark.com/cmf-model-guide/how-to-build-a-model/create-the-model-skeleton" target="_blank" rel="noreferrer">
                                    <p className="px-4 text-base">Quickstart →</p>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
