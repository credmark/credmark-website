import React from "react";


function ReportsMenuHome({ menuItem }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 block m-auto">
            {
                menuItem.map((item) => {

                    return <div key={item.id}>
                        <div className="cusor-pointer border-2 border-lightpurple rounded-lg text-center mb-10 py-10 md:mx-5 md:pt-10 drop-shadow-xl transform hover:scale-105">
                            <a href={item.url} target="_blank" rel="noreferrer">
                                <p className="text-left border-b-2 border-credmarkpurple mx-5 text-lg">{item.type}</p>
                                <img width={150} className="mx-5 py-2.5" src="../assets/credmark-logo-purple.png" alt="Credmark Logo" />
                                <p className="credmark text-left pl-5 text-lg py-2.5">{item.title}</p>
                            </a>
                        </div>
                    </div>
                })
            }
        </div >
    )
}

export default ReportsMenuHome;