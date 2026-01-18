import { useState } from "react";
import axios from "axios"
import img from "./assets/imgbg04.jpg"

function App(){
    const [catFact, setcatFact] = useState("Cats are curious")


    // delay handler => async await
    // error handler => try catch

    /*
    methods to send http requests
    1. get()
    2.post()
    3.put()
    4.delete()
    */

    // fetch data from API
    const fetchData = async() =>{
      try{
        const {data} = await axios.get("https://catfact.ninja/fact")
   // console.log(data.fact);
       setcatFact(data.fact)

      }catch(error){
        console.log(error);
      }
    }

  return (
    <div className="bg-stone-800 text-white min-h-screen relative overflow-hidden">
        <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="relative min-h-screen flex items-center">
          <div className="ml-10 lg:ml-24 max-w-xl">
            <h1 className="text-amber-400 text-4xl lg:text-6xl py-10 font-bold font-head">Cat Fact</h1>
            <div>
            <h1 className="font-fact font-bold text-2xl lg:text-3xl">{catFact}</h1>
            <button onClick={fetchData} className=" bg-sky-700 hover:bg-sky-800 text-2xl lg:text-3xl lg:px-8 lg:py-2 mt-24 px-4 py-2 cursor-pointer rounded-md font-semibold font-button transition-all duration-300 ">Generate CatFact</button>
            </div>
          </div>
        </div>



    </div>
  );
}

export default App;
