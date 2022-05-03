import * as React from 'react';


const DescriptionBusiness = (props) => {
    return (
        <>
            <div className="header-bg py-20">
                <div className="max-w-3xl px-5 block m-auto">
                    <h1 className="uppercase text-center text-5xl py-5">{props.title}</h1>
                    <h2 className="roboto text-lg text-pink text-center pb-10 md:pb-32">{props.description}</h2>
                </div>
            </div>
            <div className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 block m-auto py-10 max-w-4xl px-5 block m-auto">
                    <div className="job-image mb-10 h-72 w-60 max-w-xl block m-auto bg-white border-2 border-credmarkpurple rounded-lg p-10">
                        <p className="text-credmarkpurple px-5 credmark cursor-pointer text-center text-lg max-w-xs block m-auto">Experience</p>
                        <img
                            alt="Experience Image"
                            src="../assets/experience.svg"
                            className='block mx-auto cursor-pointer px-5'
                        />
                        <p className="text-credmarkpurple px-5 cursor-pointer text-center text-xl font-bold pt-5">{props.experience}</p>
                    </div>
                    <div className="job-image mb-10 h-72 w-60 max-w-xl block m-auto bg-white border-2 border-credmarkpurple rounded-lg p-10">
                        <p className="text-credmarkpurple px-5 credmark cursor-pointer text-center text-lg max-w-xs block m-auto">Location</p>
                        <img
                            alt="Location"
                            src="../assets/location.svg"
                            className='block mx-auto cursor-pointer px-5'
                        />
                        <p className="text-credmarkpurple px-5 cursor-pointer text-center text-base text-xl font-bold pt-5">{props.location}</p>
                    </div>
                    <div className="job-image mb-10 h-72 w-60 max-w-xl block m-auto bg-white border-2 border-credmarkpurple rounded-lg p-10">
                        <p className="text-credmarkpurple px-5 credmark cursor-pointer text-center text-lg max-w-xs block m-auto">Job Type</p>
                        <img
                            alt="Clock"
                            src="../assets/clock.svg"
                            className='block mx-auto cursor-pointer px-5'
                        />
                        <p className="text-credmarkpurple px-5 cursor-pointer text-center text-base text-xl font-bold pt-5">{props.job}</p>
                    </div>
                </div>
                <div className="max-w-3xl block m-auto px-5">
                <h3 className="text-black font-bold text-3xl pt-10">Job Summary</h3>
                <p className="text-black pt-5">{props.summary}</p>
                <p className="text-black pt-5">{props.summaryTwo}</p>
                <p className="text-black pt-5">{props.summaryThree}</p>
                <p className="text-black pt-5">{props.summaryFour}</p>
                <p className="text-black pt-5">{props.summaryFive}</p>
                <p className="text-black pt-5">{props.summarySix}</p>
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

                    </ul>
                    <h3 className="text-black font-bold text-3xl pt-10">About the team</h3>
                    <p className="text-black">
                        Credmark aims to provide high integrity data and risk metrics through a transparent, community-driven platform. By leveraging our community, we provide transparent models and data that can be used to make better investment decisions. Our goal is to be both a credible resource in the crypto community and a creator of useful tools & products inside and outside of crypto.
                        <br />
                        <br />
                        We’re a funded crypto startup; and we’re looking for engineers who want to work on stuff that matters, because we believe that providing an alternative to our current financial system matters.
                    </p>
                    <div className="flex justify-center py-16">
                        <a
                            href="mailto:hr@credmark.com?subject= Job Application"
                            target="_blank"
                            rel="noreferrer">
                            <button
                                type="button"
                                className="uppercase mt-5 inline-flex items-center px-7 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-credmarkpurple"
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

export default DescriptionBusiness;