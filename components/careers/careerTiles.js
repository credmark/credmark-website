const CareerTiles = (props) => {
    return (
        <div className="bg-green p-8 my-5 lg:my-0 rounded-md shadow-sm hover:bg-green cursor-pointer">
            <div className="flex">
                    <img src={props.img} className="float-left pr-2.5" alt={props.alt} width={props.height} height={props.height} />
                    <h3 className="font-bold text-black text-2xl text-credmarkpurple">
                        {props.title}
                    </h3>
            </div>
            <p className="text-base font-normal leading-7 pt-3 text-credmarkpurple">
                {props.text}
            </p>
        </div>
    )
}

export default CareerTiles;