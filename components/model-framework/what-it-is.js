import * as React from 'react';

export default function WhatItIs() {
    return (
        <>
            <div className="py-10">
                <div className="max-w-7xl block mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="whatItIsBg p-8 my-5 lg:my-0 mx-5 rounded-md shadow-sm cursor-pointer">
                            <img src="../assets/all-in-one.svg" alt="All in one" />
                            <p className="text-base font-normal text-green pt-5">
                                All-in-One
                            </p>
                            <p className="text-base font-normal leading-7 pt-3 text-white">
                                The one-stop-shop python data stack for web3 with integrated access to real-time blockchain data.
                            </p>
                        </div>
                        <div className="whatItIsBg p-8 my-5 lg:my-0 mx-5 rounded-md shadow-sm cursor-pointer">
                            <img src="../assets/plug-and-play.svg" alt="All in one" />
                            <p className="text-base font-normal text-green pt-5">
                                Plug and Play
                            </p>
                            <p className="text-base font-normal leading-7 pb-7 text-white">
                                Develop instantly with 150+ data models or customize the model to your needs by simply adjusting the inputs.                             </p>
                        </div>
                        <div className="whatItIsBg p-8 my-5 lg:my-0 mx-5 rounded-md shadow-sm cursor-pointer">
                            <img src="../assets/build-your-own.svg" alt="All in one" />
                            <p className="text-base font-normal text-green pt-5">
                                Build Your Own
                            </p>
                            <p className="text-base font-normal leading-7 pt-3 text-white">
                                Create new models or build on top of existing data outputs locally or publicly. We also support Jupyter Notebook.                             </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

