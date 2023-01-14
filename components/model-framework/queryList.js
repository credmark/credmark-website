const QueryList = (props) => {
    return (
        <p className="font-light text-white text-sm pb-5">
        <span><img className="float-left pr-3.5 pt-1" src="/assets/green-tick.svg" alt="tick" width={30} />{props.description}</span></p>
    )
}

export default QueryList;