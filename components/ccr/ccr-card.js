import * as React from 'react';
import Link from 'next/link';

const CCRCard = (props) => {
    return (
        <>
        <div className="cusor-pointer border-2 border-lightpurple rounded-lg text-center mb-10 py-10 md:mx-10 md:pt-10 drop-shadow-xl transform hover:scale-105">
            <a href={props.url} target="_blank" rel="noreferrer">
            <p className="text-left border-b-2 border-credmarkpurple mx-5 font-semibold text-lg">Crypto Credit <br /> Report</p>
            <img width={150} className="mx-5 py-2.5" src="../assets/credmark-logo-purple.png" alt="Credmark Logo" />
            <p className="credmark text-left pl-5 text-lg py-2.5">{props.title}</p>
            </a>
        </div>
        </>
    );
}

export default CCRCard;
