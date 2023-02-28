import * as React from 'react';
import Link from 'next/link';

const Subscribe = () => {
    return (
        <>
            <div className="bg-black py-10 md:py-20 block md:hidden">
                <div className="max-w-7xl">
                    <div className="px-5 pb-15">
                        <div className="pb-10">
                            <p className="text-white font-bold text-3xl">Sign up for our newsletter for the latest product updates, partnerships, and more.</p>
                            <div className="flex justify-center md:text-left md:block">
                            </div>
                            <Link href="https://credmark.us19.list-manage.com/subscribe?u=b6dfe393113892a064b435044&id=c295a3edd2" rel="noreferrer">
                                <button
                                    type="button"
                                    className="workSans flex justify-center w-full text-white font-semibold mt-5 items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green"
                                >
                                    Sign-up
                                    <img className="pt-0.5 pl-2" alt="arrow right" src="../assets/arrow.svg" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black py-10 md:py-20 hidden md:block">
                <div className="max-w-7xl block m-auto">
                    <div className="px-5 pb-15 text-center">
                            <h1 className="text-green">Ready to get started?</h1>
                            <div className="flex justify-center">
                            <Link href="/contact-us" rel="noreferrer">
                                    <button
                                        type="button"
                                        className="font-bold mx-2 workSans flex justify-center text-white font-semibold mt-5 items-center px-8 py-2 shadow-sm text-sm font-medium text-credmarkpurple bg-green"
                                    >
                                        Contact us
                                    </button>
                                </Link>
                                <Link href="https://credmark.us19.list-manage.com/subscribe?u=b6dfe393113892a064b435044&id=c295a3edd2" rel="noreferrer">
                                    <button
                                        type="button"
                                        className="font-bold mx-2 workSans flex justify-center text-white font-semibold mt-5 items-center px-8 py-2 shadow-sm text-sm font-medium bg-credmarkpurple"
                                    >
                                        Sign-up
                                        <img className="pt-0.5 pl-2" alt="arrow right" src="../assets/arrow-white.svg" />
                                    </button>
                                </Link>
                            </div>
                            <h3 className="text-white pt-5">Get the latest news</h3>
                            <div className="flex justify-center">
                                <Link href="https://credmark.us19.list-manage.com/subscribe?u=b6dfe393113892a064b435044&id=c295a3edd2" rel="noreferrer">
                                    <button
                                        type="button"
                                        className="font-bold workSans flex justify-center text-white font-semibold mt-5 items-center px-8 py-2 shadow-sm text-sm font-medium text-credmarkpurple bg-green"
                                    >
                                        Sign-up
                                        <img className="pt-0.5 pl-2" alt="arrow right" src="../assets/arrow.svg" />
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