const List = (props) => {
    return (
        <p className="font-light text-base">
        <span><img className="float-left pr-3.5 pt-1" src={props.img} alt="tick" width={30} />{props.title}</span></p>
    )
}

export default List;