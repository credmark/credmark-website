import * as React from 'react';
import Nav from './nav';

const HeaderHome = (props) => {
    return (
        <>
            <div className="header-bg pt-20 pb-20 md:pb-40">
                <Nav />
                <div className="max-w-6xl px-5 block m-auto">
                    <strong><h1 className="text-5xl py-5">{props.title}</h1></strong>
                    <p className="text-black text-lg font-normal max-w-2xl">{props.description}</p>
                    <a href={props.url}>
                        <button
                            type="button"
                            className="uppercase transform hover:scale-110 mt-5 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-credmarkpurple mb-10"
                        >
                            Learn more
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default HeaderHome;