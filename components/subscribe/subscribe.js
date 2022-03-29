import * as React from 'react';
import Link from 'next/link';

const Subscribe = () => {
    return (
        <>
            <div className="bg-black py-10 md:py-20">
                <div className="max-w-8xl block m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 px-5">
                        <div className="pb-15">
                            <h4 className="text-white text-center text-2lg pb-5 pt-0">Learn more about Credmark</h4>
                            <div className="flex flex-wrap justify-center">
                            <Link href="/blog" rel="noreferrer">
                            <button
                                type="button"
                                className="text-white uppercase font-semibold mt-5 inline-flex items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green mx-4"
                            >
                                Blog
                            </button>
                            </Link>
                            <Link href="/media" rel="noreferrer">
                            <button
                                type="button"
                                className="text-white uppercase font-semibold mt-5 inline-flex items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green mx-4"
                            >
                                Media
                            </button>
                            </Link>
                            </div>
                        </div>
                        <div className="ml-15">
                            <p className="credmark text-center md:text-left text-white text-base pt-16 md:pt-0">Newsletter</p>
                            <p className="text-white text-center md:text-left text-base">For the latest partnerships, community updates and more</p>
                            <div className="flex justify-center md:text-left md:block">
                            <a href="https://credmark.us19.list-manage.com/subscribe?u=b6dfe393113892a064b435044&id=c295a3edd2" target="blank" rel="noreferrer"><p className="text-white text-center md:text-left text-base float-left pt-5">Subscribe<img width={40} className="float-right pt-0.5 pl-5" alt="arrow right" src="../assets/arrow-white.svg" /></p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Subscribe;