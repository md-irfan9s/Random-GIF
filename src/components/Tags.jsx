import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tags () {


    const [tag, setTag] = useState("car");

    const {gif, loading, fetchData} = useGif(tag);
    // const [gif, setGif] = useState("");
    // const [loading , setLoading] = useState(false)

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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

    function clickHandler() {
        fetchData(tag);
    }

    function changeHandler(event) {
        setTag(event.target.value)
    }
    return (
        <div className="w-[80%] h-10/12 bg-blue-500 mt-8 
        flex flex-col items-center gap-y-4 rounded-lg border border-black">

            <h1 className="text-2xl font-bold underline uppercase py-5">Random {tag} Gif</h1>
            {
                loading === true ? (<Spinner/>) : (<img src={gif} />)
            }

            <input
            className="w-10/12 text-lg py-2 mt-5 text-center"
            onChange={changeHandler}
            value={tag}
            />
            <button onClick={clickHandler}
            className="w-10/12 bg-blue-200 uppercase py-2 font-bold rounded-lg text-lg
            hover:bg-white transition-all duration-200 mb-4 mt-3
            ">
                Generate
            </button>
        </div>
    )


}

export default Tags;