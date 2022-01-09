import * as React from 'react';

const Culture = (props) => {
    return (
        <>
                    <div className="pb-10 max-w-xl block m-auto">
                        <a href={props.link} target="_blank" rel="noreferrer">
                            <img
                                alt={props.alt}
                                src={props.img}
                                className='cursor-pointer px-5'
                            />
                        </a>
                        <p className="px-5 mt-5 credmark cursor-pointer text-center text-lg max-w-xs block m-auto">{props.title}</p>
                        <p className="px-5 cursor-pointer text-center text-base">{props.description}</p>
                    </div>
        </>
    );
}

export default Culture;
