const WhatWeDoTiles = (props) => {
    return (
        <div className="bg-white p-8 my-5 md:my-0 mx-5 rounded-md shadow-sm cursor-pointer">
            <h3 className="font-bold text-black text-3xl">
                {props.title}
            </h3>
            <p className="text-base font-normal leading-7 pt-3 hover:text-credmarkpurple">
                {props.text}
            </p>
            <button
                type="button"
                className="mt-7 text-credmarkpurple mt-5 inline-flex items-center px-10 py-2 shadow-sm text-sm font-medium rounded-md border-2 border-solid border-credmarkpurple hover:text-white hover:bg-credmarkpurple"
            >
                <a href={props.href}>
                    <p className="hover:text-white">{props.cta}</p>
                </a>
            </button>
        </div>
    )
}

export default WhatWeDoTiles;