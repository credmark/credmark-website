import React from "react";


function ReportsMenu({ menuItem }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 block m-auto">
            {
                menuItem.map((item) => {

                    return <div key={item.id}>
                        <div className="cusor-pointer border-1 border-credmarkpurple rounded-lg text-center mb-10 py-10 md:mx-5 md:pt-10 transform hover:scale-105 bg-white">
                            <a href={item.url} target="_blank" rel="noreferrer">
                                <p className="text-left text-black pl-5 text-2xl font-bold pt-2.5">{item.type}</p>
                                <p className="text-left font-light border-b-2 border-credmarkpurple mx-5 text-base text-black pb-5">{item.title}</p>
                                <img width={110} className="mx-5 pt-5 pb-2.5" src="../assets/credmark-logo-purple.png" alt="Credmark Logo" />
                            </a>
                        </div>
                    </div>
                })
            }
        </div >
    )
}

export default ReportsMenu;