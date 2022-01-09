import * as React from 'react';

const openRoles = (props) => {
    return (
        <>
                    <div className="bg-white mb-5 p-5 max-w-xl block m-auto border-2 border-gray rounded-lg hover:shadow-xl">
                        <a href={props.link} target="_blank" rel="noreferrer">
                        <div className="flex justify-center">
                        <p className="credmark cursor-pointer text-center text-base md:text-md float-left">{props.jobtitle}<img width={40} className="float-right pt-0 pl-5" alt="arrow right" src="../assets/Arrow-1.svg" /></p>
                        </div>
                        </a>
                    </div>
        </>
    );
}

export default openRoles;