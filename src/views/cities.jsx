import { getCities } from "../services/citiesQueries";
import { useEffect, useState, useRef } from "react";
import CardItem from "../components/cardItem";
const Cities = ()=>{
    const [cities, setcities] = useState([]);
    const [citiesFiltered,setcitiesFiltered]=useState([]);
    const Cityreference= useRef(null)
    useEffect(( ) => {
        getCities().then((data)=>{
            setcities(data);
            setcitiesFiltered(data);
        });
    }, []);
    const handleInput = () =>{
        const cFiltered= filterByName(cities,Cityreference.current.value);
        setcitiesFiltered(cFiltered);
    }
    const filterByName = (list, value) =>{
        return list.filter((city)=>city.name.toLowerCase().startsWith(value.toLowerCase().trim()));
    }
        return (
            <main className="flex backdrop-blur-4 p-2 items-center justify-center bg-[url(/cities.jpg)] bg-cover">
                <section className="flex flex-col items-center justify-center gap-5 mt-10 w-11/12">
                    <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl italic text-center px-4 backdrop-blur-[2px] mt-12 p-2">How far will your next adventure take you?</h2>
                    <div className="w-3/4 relative mb-4">
                        <input type="text" className="rounded w-full h-6 ps-2 p-2" name="CityName"
                        onInput={handleInput} ref={Cityreference}
                        placeholder="Search a city..."></input>
                        <img src="search.png" alt="search" className="h-4 absolute right-1 top-1 mr-1 cursor-pointer"></img>
                    </div>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-12 mb-10">
                             {citiesFiltered.length > 0 ? citiesFiltered.map((city, index) => <CardItem key={index} city={city} />) : <div className="flex h-screen justify-center items-center"><p className="italic border rounded bg-white bg-opacity-60 py-4 px-8 text-md sm:text-lg md:text-2xl lg:text-3xl text-center">City not found...</p></div>}
                        </div>
                </section>
            </main>
            );
        };
export default Cities;