import * as React from 'react';
import Link from 'next/link';

const Subscribe = () => {
    return (
        <>
            <div className="bg-black py-10 md:py-20 block md:hidden">
                <div className="max-w-7xl block m-auto">
                    <div className="px-5 pb-15">
                        <div className="pb-10">
                            <p className="text-white font-bold text-3xl">Sign up for our Newsletter for the latest partnership, community updates and more</p>
                            <div className="flex justify-center md:text-left md:block">
                            </div>
                            <Link href="https://credmark.us19.list-manage.com/subscribe?u=b6dfe393113892a064b435044&id=c295a3edd2" rel="noreferrer">
                            <button
                                type="button"
                                className="flex justify-center w-full text-white font-semibold mt-5 items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green"
                            >
                                Sign-up
                                <img className="pt-0.5 pl-2" alt="arrow right" src="../assets/arrow.svg" />
                            </button>
                            </Link>
                        </div>
                            <h4 className="text-white text-3xl pb-2.5">Learn more about Credmark</h4>
                            <div className="flex flex-wrap md:space-x-4">
                            <Link href="/blog" rel="noreferrer">
                            <button
                                type="button"
                                className="flex justify-center w-full border-2 border-white text-white font-semibold mt-5 items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md"
                            >
                                Blog
                            </button>
                            </Link>
                            <Link href="/media" rel="noreferrer">
                            <button
                                type="button"
                                className="flex justify-center w-full border-2 border-white text-white font-semibold mt-5 items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md"
                            >
                                Media
                            </button>
                            </Link>
                            <Link href="/faq" rel="noreferrer">
                            <button
                                type="button"
                                className="flex justify-center w-full text-center border-2 border-white text-white font-semibold mt-5 items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md"
                            >
                                FAQ
                            </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black py-10 md:py-20 hidden md:block">
                <div className="max-w-7xl block m-auto">
                    <div className="px-5 pb-15">
                        <div className="pb-10 max-w-3xl">
                            <p className="text-white font-bold text-3xl">Sign up for our Newsletter for the latest partnership, community updates and more</p>
                            <div className="flex justify-center md:text-left md:block">
                            </div>
                            <Link href="https://credmark.us19.list-manage.com/subscribe?u=b6dfe393113892a064b435044&id=c295a3edd2" rel="noreferrer">
                            <button
                                type="button"
                                className="flex justify-center text-white font-semibold mt-5 items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green"
                            >
                                Sign-up
                                <img className="pt-0.5 pl-2" alt="arrow right" src="../assets/arrow.svg" />
                            </button>
                            </Link>
                        </div>
                            <h4 className="text-white text-3xl pb-2.5">Learn more about Credmark</h4>
                            <div className="flex flex-wrap md:space-x-4">
                            <Link href="/blog" rel="noreferrer">
                            <button
                                type="button"
                                className="flex justify-center border-2 border-white text-white font-semibold mt-5 items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md"
                            >
                                Blog
                            </button>
                            </Link>
                            <Link href="/media" rel="noreferrer">
                            <button
                                type="button"
                                className="flex justify-center border-2 border-white text-white font-semibold mt-5 items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md"
                            >
                                Media
                            </button>
                            </Link>
                            <Link href="/faq" rel="noreferrer">
                            <button
                                type="button"
                                className="flex justify-center text-center border-2 border-white text-white font-semibold mt-5 items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md"
                            >
                                FAQ
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