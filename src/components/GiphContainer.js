import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../services/constants";
import { API_KEY } from "../services/constants";
import GiphList from "./GiphList"
import GiphFilter from "./GiphFilter";

function GiphContainer() {


    const fetchData = async () => {
        try {
            const response = await axios.get(BASE_URL + "/v1/gifs/search?api_key=" + API_KEY + "&q=animals");
            // vvv destructuring
            const { data } = response.data;
            setGifs(data)
            console.log("data", data)

        } catch (error) {
            console.log(error);
        }
    }


    const [gifsToDisplay, setGifs] = useState([])
    // const giphy = "event.target.value"


    const handleFilterChange = (event) => {

        event.preventDefault()

        const filteredValue = event.target.value


        setGifs((_prevState) => {
            const filteredGifList = gifsToDisplay.filter((gif) => {
                return gif.slug.toLowerCase().includes(filteredValue.toLowerCase())
            })
            return filteredGifList
        })

    }


    useEffect(() => {
        fetchData();
    }, [])

    
    return(
    <div>

        <GiphFilter onChange = {(event) => handleFilterChange(event)}/>
        <GiphList gifs = {gifsToDisplay}/>

    </div>
    ) 
}

export default GiphContainer