import React from "react";

function HomeReportsButton({button, filter}){
    return (
        <div className="px-5 max-w-5xl md:m-auto">
            <div className="pt-10 block m-auto md:m-auto md:space-x-20">
                <button className="credmark bg-transparent text-credmarkpurple hover:bg-credmarkpurple hover:text-white py-2.5 px-5 rounded-lg" type="button" onClick={()=> filter('Historical')}>Historical Reports</button>
                <button className="credmark bg-transparent text-credmarkpurple hover:bg-credmarkpurple hover:text-white py-2.5 px-5 rounded-lg" type="button" onClick={()=> filter('Commisioned')}>Commisioned Reports</button>
          </div>
          </div>
    )
}

export default HomeReportsButton;