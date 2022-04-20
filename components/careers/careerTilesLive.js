import * as React from 'react';
import CareerTiles from './careerTiles';


export default function CareerTilesLive() {
    return (
        <>
            <div className="pt-20 pb-20 md:py-28 homepage-bg">
                <div className="px-5 md:px-0 max-w-6xl block m-auto">
                    <h3 className="text-center md:text-left text-black py-5 text-3xl text-4xl md:text-5xl pb-10">
                       Our Culture
                    </h3>
                    <div className="max-w-7xl block mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 space-x-6">
                            <CareerTiles
                                title="Reliable Data"
                                text="Our community of Data Curators collect validated state and ledger data, indexed to allow rapid, seamless access for $CMK token holders"
                                cta="Learn more"
                            />
                            <CareerTiles
                                title="Original Research"
                                text="Our Risk Contributors produce research for various protocols and DeFi modeling best practices, giving you the insights you need to build reliable DeFi models."
                                cta="Credmark Wiki"
                            />
                            <CareerTiles
                                title="Battle-Tested Models"
                                text="Our community of Model Contributors leverage on-chain state and ledger data to build analysis tools designed for risk-adjusted-returns"
                                cta="Get Started"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

