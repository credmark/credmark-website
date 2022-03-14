import * as React from 'react';

const HeaderHome = (props) => {
    return (
        <>
            <div className="header-bg pt-20 pb-20 md:pb-40">
                <div className="max-w-6xl px-5 block m-auto">
                    <strong><h1 className="text-5xl py-5">{props.title}</h1></strong>
                    <h2 className="roboto text-black text-lg font-normal max-w-2xl">{props.description}</h2>
                    <a href={props.url}>
                        <button
                            type="button"
                            className="uppercase transform hover:scale-110 mt-5 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-credmarkpurple mb-10"
                        >
                            Learn more
                        </button>
                    </a>

                </div>
                <div className="swirls">
                    <img className="absolute" src="/assets/swirls-transparent.png" alt="colored swirls" />
                </div>
            </div>
        </>
    );
}

export default HeaderHome;