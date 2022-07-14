


function GiphFilter(props) {

    return(
        <div>
            <label htmlFor="gif-filter">Filter Gifs:</label>
            <input type="text"
                value={props.value} 
                onChange={props.onChange}
                name="gif-filter" />
        </div>
    )
}

export default GiphFilter