import * as React from 'react';
import WhatWeDoTiles from './WhatWeDoTiles';


export default function WhatWeDo() {
    return (
        <>
            <div className="pt-20 pb-20 md:py-28 homepage-bg">
                <div className="max-w-7xl block mx-auto">
                    <h4 className="max-w-4xl block mx-auto text-3xl pb-20 text-center text-black font-light leading-10">Credmark is a financial modeling platform powered by reliable on-chain data.  Validated models are readily composable making rapid app development simple.</h4>
                <div className="grid grid-cols-1 md:grid-cols-3">
                        <WhatWeDoTiles
                        title="Reliable Data"
                        text="Our community of Data Curators collect validated state and ledger data, indexed to allow rapid, seamless access for $CMK token holders"
                        cta="Learn more"
                        />
                        <WhatWeDoTiles
                        title="Original Research"
                        text="Our Risk Contributors produce research for various protocols and DeFi modeling best practices, giving you the insights you need to build reliable DeFi models."
                        cta="Credmark Wiki"
                        />
                        <WhatWeDoTiles
                        title="Battle-Tested Models"
                        text="Our community of Model Contributors leverage on-chain state and ledger data to build analysis tools designed for risk-adjusted-returns"
                        cta="Get Started"
                        />
                        </div>
                </div>
            </div>
        </>
    );
}

