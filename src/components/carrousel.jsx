import {citiesInfo} from "../data/data"
import Carrousel from "../components/carrouselItem"
import { useEffect, useState } from "react";
const CarrouselAll = ()=>{
    const cities=citiesInfo.slice(0,12);
    const [city,setCity]=useState(cities[0]);
    const [index,setIndex]=useState(0);
    function previous(){
        let aux=index==11?0: index-4;
        if(aux>=0){
            setIndex(aux);
            setCity(cities[aux]);
        }
        else{
            setIndex(8);
            setCity(cities[8]);
        }
    }
    function next(){
        let aux=index==11?0: index+4;
        if(aux!=12){
            setIndex(aux);
            setCity(cities[aux]);
        }
        else{
            setIndex(0);
            setCity(cities[0]);
        }
    }
    useEffect(()=>{
        const idInterval=setInterval(next,5000);
        return ()=>clearInterval(idInterval);
    },[index]);
    return(
        <div className="flex flex-col items-center justify-center gap-4 md:gap-12 lg:gap-12 bg-[url(/travel.jpg)] h-screen w-full bg-cover">
            <p className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl italic text-center px-4 backdrop-blur-[2px] p-2">Popular MyTineraries</p>
         <div className="flex gap-8 rounded items-center">
        <img src="/buttons/left.png" alt="leftButton" onClick={previous} className="h-6 w-6 md:w-8 md:h-8 lg:w-10 lg:h-10 cursor-pointer"></img>
        <div className="flex flex-col md:flex-row lg:flex-row gap-1 md:gap-4 lg:gap-6 backdrop-blur-[2px] md:p-2 lg:p-2">
            <Carrousel city={cities[index]}></Carrousel>
            <Carrousel city={cities[index+1]}></Carrousel>
            <Carrousel city={cities[index+2]}></Carrousel>
            <Carrousel city={cities[index+3]}></Carrousel>
        </div>
        <img src="/buttons/right.png" alt="rightButton" onClick={next} className="h-6 w-6 md:w-8 md:h-8 lg:w-10 lg:h-10 cursor-pointer"></img>
    </div>
</div>
    )
}
export default CarrouselAll;