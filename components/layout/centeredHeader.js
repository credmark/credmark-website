import * as React from 'react';

const CenteredHeader = (props) => {
    return (
        <>
            <div className="header-bg py-20">
                <div className="max-w-3xl px-5 block m-auto">
                    <strong><h1 className="uppercase font-extrabold text-center text-4xl md:text-5xl py-5">{props.title}</h1></strong>
                    <h2 className="uppercase text-lg font-bold text-pink text-center">{props.description}</h2>
                    <br />
                    <h3 className="uppercase text-pink font-bold text-center">{props.descriptionTwo}</h3>
                </div>
            </div>
        </>
    );
}

export default CenteredHeader;
