import * as React from 'react';

const openRoles = (props) => {
    return (
        <>
            <div className="pb-10 px-4 md:px-0">
                <a href={props.link} target="_blank" rel="noreferrer">
                    <div>
                        <p className="cursor-pointer text-3xl text-credmark-purple font-bold">{props.jobtitle}</p>
                        <div className="flex">
                        <p className="text-lg font-light float-left text-black pr-2">{props.role}</p>
                        <span className="pt-0.5 text-black text-2xl font-light"> | </span>
                        <p className="text-lg font-light float-left px-2 text-black">{props.location}</p>
                        <span className="pt-0.5 text-black text-2xl font-light"> | </span>
                        <p className="text-lg font-light px-2 text-black">{props.time}</p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}

export default openRoles;