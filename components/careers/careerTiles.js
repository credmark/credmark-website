const CareerTiles = (props) => {
    return (
            <div className="bg-green p-8 my-5 md:my-0 rounded-md shadow-sm hover:bg-green cursor-pointer">
                <h3 className="font-bold text-black text-3xl">
                    {props.title}
                </h3>
                <p className="text-base font-normal leading-7 pt-3 hover:text-credmarkpurple">
                    {props.text}
                </p>
            </div>
    )
}

export default CareerTiles;