import * as React from 'react';

const FaqHeader = (props) => {
    return (
        <>
            <div className="pt-20">
                <div className="max-w-3xl px-5 block m-auto">
                    <strong><h1 className="uppercase text-white font-extrabold text-center text-5xl py-5">{props.title}</h1></strong>
                    <h2 className="roboto uppercase text-lg font-bold text-pink text-center">{props.description}</h2>
                    <br />
                    <h3 className="roboto uppercase text-pink font-bold text-center">{props.descriptionTwo}</h3>
                </div>
            </div>
        </>
    );
}

export default FaqHeader;