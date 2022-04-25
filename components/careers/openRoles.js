import * as React from 'react';

const openRoles = (props) => {
    return (
        <>
            <div className="pb-10 px-4 md:px-0">
                <a href={props.link} target="_blank" rel="noreferrer">
                    <div>
                        <p className="cursor-pointer text-base md:text-3xl text-credmark-purple">{props.jobtitle}</p>
                        <div className="flex">
                        <p className="text-lg float-left">{props.role}</p>
                        <p className="text-lg float-left pl-2">{props.location}</p>
                        <p className="text-lg font-light pl-2">{props.time}</p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}

export default openRoles;