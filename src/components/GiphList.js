

function GiphList(props) {
    return(
        <div className="gifs-disp">
            {props.gifs.map((gif, index) => {
                return(
                    <div key={index}><p><img src={gif.images.fixed_height_small.url} alt="gif"></img></p></div>
                )
            })}


        </div>
    )
}

export default GiphList