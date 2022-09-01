import * as React from 'react';
import Nav from './nav';

const Header = (props) => {
    return (
        <>
        <div className="header-bg">
            <Nav />
            <div className="max-w-6xl px-5 block m-auto">
                <strong><h1 className="text-white font-bold py-5 pt-16 md:pt-32">{props.title}</h1></strong>
                <p className="text-white text-3xl font-light max-w-3xl pb-20 md:pb-32">{props.description}</p>
            </div>
        </div>
    </>
    );
}

export default Header;
