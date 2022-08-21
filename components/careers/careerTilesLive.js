import * as React from 'react';
import CareerTiles from './careerTiles';


export default function CareerTilesLive() {
    return (
        <>
            <div className="py-20 md:py-28 homepage-bg">
                <div className="px-5 max-w-6xl block m-auto">
                    <h3 className="text-left text-black md:pb-5 py:0 text-3xl text-4xl md:text-5xl">
                       Our Culture
                    </h3>
                    <div className="max-w-7xl block mx-auto">
                        <div className="flex flex-wrap lg:flex-nowrap lg:space-x-6">
                            <CareerTiles
                                alt="decentralised ideas"
                                img="../../assets/decentralised-ideas.svg"
                                width="53"
                                height="53"
                                title="Decentralized Ideas"
                                text="We understand everyone has their own expertise and unique experiences. All voices are heard so every person can develop ownership as long as they can back up what they say."
                            />
                            <CareerTiles
                                alt="global community"
                                img="../../assets/global-community.svg"
                                width="50"
                                height="50"
                                title="Global Community"
                                text="We’re aiming to become a DAO. Naturally that means our team is very distributed.  We’re situated across various time zones and our differences bring together fresh new ideas."
                            />
                            <CareerTiles
                                alt="lightning bolt"
                                img="../../assets/lightning-bolt.svg"
                                width="25"
                                height="45"
                                title="Turbo-charged Learning"
                                text="DeFi moves at lightning fast speed, but so does being at Credmark.  We’re paving the path for data integrity and reducing risk, so we can increase DeFi adoption."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

