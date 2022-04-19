import * as React from 'react';
import Link from 'next/link';

const Subscribe = () => {
    return (
        <>
            <div className="bg-black py-10 md:py-20">
                <div className="max-w-8xl block m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 px-5">
                        <div className="pb-15 max-w-xl block mx-auto">
                            <h4 className="text-white text-3xl pb-5 pt-0">Learn more about Credmark</h4>
                            <div className="flex flex-wrap">
                            <Link href="/blog" rel="noreferrer">
                            <button
                                type="button"
                                className="text-white font-semibold mt-5 inline-flex items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green mx-4"
                            >
                                Our Data
                            </button>
                            </Link>
                            <Link href="/blog" rel="noreferrer">
                            <button
                                type="button"
                                className="text-white font-semibold mt-5 inline-flex items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green mx-4"
                            >
                                Blog
                            </button>
                            </Link>
                            <Link href="/media" rel="noreferrer">
                            <button
                                type="button"
                                className="text-white font-semibold mt-5 inline-flex items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green mx-4"
                            >
                                Media
                            </button>
                            </Link>
                            <Link href="/media" rel="noreferrer">
                            <button
                                type="button"
                                className="border-2 border-white text-white font-semibold mt-5 inline-flex items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md mx-4"
                            >
                                FAQ
                            </button>
                            </Link>
                            </div>
                        </div>
                        <div className="ml-15">
                            <p className="text-white font-light text-center md:text-left text-base">Sign up for our Newsletter for the latest partnership, community updates and more</p>
                            <div className="flex justify-center md:text-left md:block">
                            </div>
                            <Link href="https://credmark.us19.list-manage.com/subscribe?u=b6dfe393113892a064b435044&id=c295a3edd2" rel="noreferrer">
                            <button
                                type="button"
                                className="text-white font-semibold mt-5 inline-flex items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green"
                            >
                                Sign-up
                                <img width={40} className="float-right pt-0.5 pl-5" alt="arrow right" src="../assets/arrow.svg" />
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Subscribe;