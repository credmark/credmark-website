import * as React from 'react';


const Description = (props) => {
    return (
        <>
            <div className="py-20 header-bg">
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
                <div className="max-w-3xl block m-auto px-5 lg:px-0">
                <h3 className="text-black font-bold text-3xl pt-10 md:pt-28">Job Summary</h3>
                <p className="text-black">{props.summary}</p>
                    <h3 className="text-black font-bold text-3xl pt-16">Responsibilities</h3>
                    <ul>
                        <li className="text-black">{props.responsibilities}</li>
                        <li className="text-black">{props.responsibilitiesOne}</li>
                        <li className="text-black">{props.responsibilitiesTwo}</li>
                        <li className="text-black">{props.responsibilitiesThree}</li>
                        <li className="text-black">{props.responsibilitiesFour}</li>
                        <li className="text-black">{props.responsibilitiesFive}</li>
                        <li className="text-black">{props.responsibilitiesSix}</li>
                        <li className="text-black">{props.responsibilitiesSeven}</li>
                        <li className="text-black">{props.responsibilitiesEight}</li>
                        <li className="text-black">{props.responsibilitiesNine}</li>

                    </ul>
                    <h3 className="text-black font-bold text-3xl pt-16">The Ideal Candidate</h3>
                    <ul>
                    <li className="text-black">{props.skills}</li>
                        <li className="text-black">{props.skillsOne}</li>
                        <li className="text-black">{props.skillsTwo}</li>
                        <li className="text-black">{props.skillsThree}</li>
                        <li className="text-black">{props.skillsFour}</li>
                        <li className="text-black">{props.skillsFive}</li>
                        <li className="text-black">{props.skillsSix}</li>
                        <li className="text-black">{props.skillsSeven}</li>
                        <li className="text-black">{props.skillsEight}</li>
                        <li className="text-black">{props.skillsNine}</li>
                    </ul>
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

export default Description;