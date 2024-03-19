import { getCities } from "../services/citiesQueries";
import { useEffect, useState, useRef } from "react";
import CardItem from "../components/cardItem";
import { useSelector, useDispatch } from "react-redux";
import { filteringCities, loadAction } from "../redux/actions/citiesActions";
const Cities = ()=>{
    const Cityreference= useRef(null)
    const dispatch= useDispatch();
    const {all,filtered,search}= useSelector((store)=>store.cities)
    useEffect(( ) => {
        if(all.length==0){
            getCities().then((data)=>{
                dispatch(loadAction(data));
            });
        }
    }, []);
    const handleInput = () =>{
        dispatch(filteringCities(Cityreference.current.value))
    }
    console.log('filtrados:',filtered)
        return (
            <main className="flex backdrop-blur-4 p-2 items-center justify-center bg-[url(/cities.jpg)] bg-cover">
                <section className="flex flex-col items-center justify-center gap-5 mt-10 w-11/12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl italic text-center px-4 backdrop-blur-[2px] mt-20 p-2">How far will your next adventure take you?</h2>
                    <div className="w-3/4 relative mb-12">
                        <input type="text" className="rounded w-full h-6 ps-2 p-2" name="CityName"
                        onInput={handleInput} ref={Cityreference} defaultValue={search}
                        placeholder="Search a city..."></input>
                        <img src="search.png" alt="search" className="h-4 absolute right-1 top-1 mr-1 cursor-pointer"></img>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-12 mb-10">
                        {filtered.length > 0 ? filtered.map((city, index) => <CardItem key={index} city={city} />) : <div className="flex h-screen justify-center items-center"><p className="italic border rounded bg-white bg-opacity-60 py-4 px-8 text-md sm:text-md md:text-lg lg:text-2xl text-center">City not found...</p></div>}
                    </div>
                </section>
            </main>
            );
        };
export default Cities;