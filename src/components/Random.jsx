import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Random () {

    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

    // const [gif, setGif] = useState("");
    // const [loading , setLoading] = useState(false)

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //    const {data} =  await axios.get(url);
    //     // const output =  await axios.get(url);
    //     // console.log(output)
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false)
    // }

    // useEffect( () => {
    //     fetchData();
    // }, [])


    // Creation of Custom Hooks

    const {gif, loading, fetchData} = useGif();

    function clickHandler() {
        fetchData();
    }
    return (

        
        <div className="w-[80%] h-10/12 bg-green-500 mt-8 
        flex flex-col items-center gap-y-4 rounded-lg border border-black">

            <h1 className="text-2xl font-bold underline uppercase py-5">Random Gif</h1>
            {
                loading === true ? (<Spinner/>) : (<img src={gif} />)
            }
            <button onClick={clickHandler}
            className="w-10/12 bg-green-200 uppercase py-2 font-bold rounded-lg text-lg
             hover:bg-white transition-all duration-200 mb-4 mt-6
           
            "
            >
                Generate
            </button>
        </div>
    )


}

export default Random;