import React from "react";
import Random from "./components/Random";
import Tags from "./components/Tags";


export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background items-center mx-auto
    text-center ">
      <h1 className="bg-white rounded-xl w-[90%] mt-[40px] py-3 px-1
      font-bold text-[1.8rem] text-3xl uppercase
      ">Random Gifs</h1>

      <div className="flex flex-col w-full items-center background">
        <Random/>
        <Tags/>
      </div>
    </div>

  );
}
