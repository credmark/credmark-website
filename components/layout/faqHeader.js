import * as React from 'react';

const FaqHeader = (props) => {
    return (
        <>
            <div className="pt-20 px-5">
                <div className="max-w-5xl block m-auto">
                    <strong><h1 className="text-white font-bold py-5">{props.title}</h1></strong>
                </div>
            </div>
        </>
    );
}

export default FaqHeader;