import * as React from 'react';

const FaqHeader = (props) => {
    return (
        <>
            <div className="pt-20">
            <div className="max-w-5xl px-5 md:px-0 block m-auto">
                <strong><h1 className="text-white font-bold text-5xl md:text-7xl py-5">{props.title}</h1></strong>
                </div>
            </div>
        </>
    );
}

export default FaqHeader;