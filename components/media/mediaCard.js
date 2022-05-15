import * as React from 'react';

const MediaCard = (props) => {
    return (
        <>
                    <div className="box col-xs pt-10 transform hover:scale-105 px-5 rounded-md">
                        <a href={props.link} target="_blank" rel="noreferrer">
                            <img
                                alt={props.alt}
                                src={props.img}
                                className='object-cover	flex justify-center cursor-pointer rounded-t-md'
                            />
                        </a>
                        <div className="bg-white shadow-md rounded-b-md h-72">
                        <p className="text-xs text-black font-bold px-5 pt-6">{props.date}</p>
                        <a href={props.link} target="_blank" rel="noreferrer"><p className="px-5 cursor-pointer text-black text-3xl font-medium pb-2">{props.description}</p></a>
                        <a href={props.link} target="_blank" rel="noreferrer"><p className="px-5 cursor-pointer text-black text-sm flex pb-9">Read more<img className="pl-1" alt="arrow right" src="../assets/arrow.svg" /></p></a>
                    </div>
                    </div>
        </>
    );
}

export default MediaCard;
