import * as React from 'react';
import NavWihtoutCta from './NavTest';

const CenteredHeader = (props) => {
    return (
        <>
            <div className="communityBg">
                <NavWihtoutCta />
                <div className="max-w-6xl px-5 block m-auto">
                    <strong><h1 className="text-white font-bold pt-36 pb-5">{props.title}</h1></strong>
                    <p className="text-white text-3xl font-light max-w-3xl pb-20 md:pb-32">{props.description}</p>
                </div>
            </div>
        </>
    );
}

export default CenteredHeader;
