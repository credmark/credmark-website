import * as React from 'react';


const DescriptionPython = (props) => {
    return (
        <>
           <div className="header-bg py-20">
                <div className="max-w-6xl px-5 block m-auto">
                    <h1 className="text-white font-base text-5xl md:text-7xl py-5">{props.title}</h1>
                    <div className="flex flex-wrap">
                        <div className="grid relative rounded-lg border border-gray-300 px-6 py-5 flex items-center space-x-6">
                            <div className="flex">
                                <img src="../assets/stars.svg" alt="Curate crypto data" />
                                <p className="text-base font-bold text-white ml-2">Experience</p>
                            </div>
                            <div>
                            <p className="text-3xl font-light text-white">5+ Years</p>
                            </div>
                        </div>
                        <div className="grid relative rounded-lg border border-gray-300 px-6 py-5 flex items-center space-x-6">
                            <div className="flex">
                                <img src="../assets/world.svg" alt="Curate crypto data" />
                                <p className="text-base font-bold text-white ml-2">Location</p>
                            </div>
                            <div>
                            <p className="text-3xl font-light text-white">Anywhere</p>
                            </div>
                        </div>
                        <div className="grid relative rounded-lg border border-gray-300 px-6 py-5 flex items-center space-x-6">
                            <div className="flex flex-wrap">
                                <img src="../assets/rocket.svg" alt="Curate crypto data" />
                                <p className="text-base font-bold text-white ml-2">Job Type</p>
                            </div>
                            <div>
                            <p className="text-3xl font-light text-white">Full-time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-3xl block m-auto px-5">
                <h3 className="text-black font-bold text-3xl pt-10 md:pt-28">Job Summary</h3>
                <p className="text-black">{props.summary}</p>
                    <h3 className="text-black font-bold text-3xl pt-16">Responsibilities</h3>
                    <ul>
                        <li className="text-black">{props.responsibilities}</li>
                        <li className="text-black">{props.responsibilitiesOne}</li>
                        <li className="text-black">{props.responsibilitiesTwo}</li>
                    </ul>
                    <h3 className="text-black font-bold text-3xl pt-10">The Ideal Candidate</h3>
                    <p>Our model framework is written in Python. It is still in its infancy. We are looking for an engineer who is fluent in python to help us build out the existing software. The right candidate:</p>
                    <ul>
                    <li className="text-black">{props.skills}</li>
                        <li className="text-black">{props.skillsOne}</li>
                        <li className="text-black">{props.skillsTwo}</li>
                        <li className="text-black">{props.skillsThree}</li>
                        <li className="text-black">{props.skillsFour}</li>
                    </ul>
                    <p>The perfect candidate will also be familiar with DeFi and/or financial models.</p>
                    <p>The core contributors to the Credmark project are completely distributed, so the candidate’s physical location doesn’t matter to us. Because of the remote nature of our interactions, however, we look for solid written and verbal English communication skills.</p>
                    <p>Remuneration is competitive.</p>
                    <h3 className="text-black font-bold text-3xl pt-16">About the team</h3>
                    <p className="text-black">
                        Credmark aims to provide high integrity data and risk metrics through a transparent, community-driven platform. By leveraging our community, we provide transparent models and data that can be used to make better investment decisions. Our goal is to be both a credible resource in the crypto community and a creator of useful tools & products inside and outside of crypto.
                        <br />
                        <br />
                        We’re a funded crypto startup; and we’re looking for engineers who want to work on stuff that matters, because we believe that providing an alternative to our current financial system matters.
                    </p>
                    <div className="pt-4 pb-10 md:pb-44">
                        <a
                            href="mailto:hr@credmark.com?subject= Job Application"
                            target="_blank"
                            rel="noreferrer">
                            <button
                                type="button"
                                className="mt-5 inline-flex items-center px-7 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green"
                            >
                                Apply Now
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DescriptionPython;