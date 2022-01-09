
const FilteringMenu = ({ onChange, filter }) => {

    return (
        <div className="filtering-menu">
            <div onClick={() =>
                onChange('view', { list: +!filter.view.list })}>
            </div>

        </div>
    )
}

export default FilteringMenu;