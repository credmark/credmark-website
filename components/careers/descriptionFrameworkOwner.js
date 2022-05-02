import * as React from 'react';


const DescriptionFrameworkDev = (props) => {
    return (
        <>
            <div className="header-bg py-20">
                <div className="max-w-6xl px-5 block m-auto">
                    <h1 className="text-white font-base text-5xl md:text-7xl py-5">{props.title}</h1>
                </div>
            </div>

                <div className="max-w-3xl block m-auto px-5">
                <h3 className="credmark text-3xl pt-10">Job Summary</h3>
                <p className="text-black pt-5">{props.summary}</p>
                <p className="text-black pt-5">{props.summaryTwo}</p>
                <ul>
                <a href={props.url} target="_blank" rel="noreferrer" className="underline"><li>{props.list}</li></a>
                <a href={props.urlTwo} target="_blank" rel="noreferrer" className="underline"><li>{props.listTwo}</li></a>
                </ul>
                    <h3 className="credmark text-3xl pt-16">Responsibilities</h3>
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

                    </ul>
                    <h3 className="credmark text-3xl pt-16">The ideal candidate</h3>
                    <ul>
                        <li className="text-black">{props.candidate}</li>
                        <li className="text-black">{props.candidateOne}</li>
                        <li className="text-black">{props.candidateTwo}</li>
                        <li className="text-black">{props.candidateThree}</li>
                        <li className="text-black">{props.candidateFour}</li>
                        <li className="text-black">{props.candidateFive}</li>
                        <li className="text-black">{props.candidateSix}</li>
                        <li className="text-black">{props.candidateSeven}</li>
                        <li className="text-black">{props.candidateEight}</li>
                        <li className="text-black">{props.candidateNine}</li>
                        <li className="text-black">{props.candidateTen}</li>
                        <li className="text-black">{props.candidateEleven}</li>
                        <li className="text-black">{props.candidateTwelve}</li>
                        <li className="text-black">{props.candidateThirteen}</li>
                        <li className="text-black">{props.candidateFourteen}</li>

                    </ul>
                    <h3 className="credmark text-3xl pt-10">About the team</h3>
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
                                className="uppercase mt-5 inline-flex items-center px-7 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-credmarkpurple"
                            >
                                Apply Now
                            </button>
                        </a>
                    </div>
                </div>
        </>
    );
}

export default DescriptionFrameworkDev;