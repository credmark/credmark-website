import * as React from 'react';

const CareerHeader = (props) => {
    return (
        <>
            <div className="header-bg py-20">
                <div className="max-w-3xl px-5 block m-auto">
                    <strong><h1 className="uppercase font-extrabold text-center text-5xl py-5">{props.title}</h1></strong>
                    <h2 className="roboto uppercase font-bold text-lg text-pink text-center">{props.description}</h2>
                    <br />
                    <h3 className="roboto uppercase font-bold text-lg text-pink text-center">{props.descriptionTwo}</h3>
                    <button
                        type="button"
                        className="credmark mt-10 block m-auto items-center px-10 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-purple"
                    >
                        {props.button}
                    </button>
                </div>
            </div>
        </>
    );
}

export default CareerHeader;
