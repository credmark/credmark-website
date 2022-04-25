import * as React from 'react';
import NavWihtoutCta from './NavTest';

const CenteredHeader = (props) => {
    return (
        <>
            <div className="communityBg">
                <NavWihtoutCta />
                <div className="max-w-7xl px-5 block m-auto">
                    <strong><h1 className="text-white font-bold text-5xl md:text-7xl pt-36 pb-5">{props.title}</h1></strong>
                    <h2 className="text-white roboto text-3xl font-light max-w-3xl pb-20 md:pb-32">{props.description}</h2>
                </div>
            </div>
        </>
    );
}

export default CenteredHeader;
