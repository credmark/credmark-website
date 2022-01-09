import * as React from 'react';

const Header = (props) => {
    return (
        <>
        <div className="header-bg py-20">
            <div className="max-w-6xl px-5 block m-auto">
            <h1 className="uppercase font-extrabold text-5xl py-5">{props.title}</h1>
            <h2 className="uppercase font-bold text-pink text-lg">{props.description}</h2>
            </div>
        </div>
        </>
    );
}

export default Header;
