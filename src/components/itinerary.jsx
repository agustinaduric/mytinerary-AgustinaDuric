import { useEffect, useState} from "react";
import ItineraryItem from "./itineraryItem";
import { useParams } from "react-router-dom";
import { getItineraries } from "../services/citiesQueries";
const Itinerary = ()=>{
    const [itineraries, setItineraries] = useState([]);
    const params= useParams();
    useEffect(( ) => {
        getItineraries(params.id).then((data)=>{
            setItineraries(data);
        });
    }, []);
    return (
        <div className="bg-[url(/itineraries.jpeg)] h-screen bg-cover bg-no-repeat bg-center">
            <div className="flex flex-col justify-center items-center gap-4 lg:gap-6 pt-2 pt-24 md:pt-12 lg:pt-8">
                {itineraries.length>0? itineraries.map((itinerary, index) => <ItineraryItem key={index} itinerary={itinerary} />):<div className="flex h-screen justify-center items-center"><p className="italic border rounded bg-white bg-opacity-60 py-4 px-8 text-md sm:text-lg md:text-2xl lg:text-3xl text-center">There are no itineraries for this city yet...</p></div>}
            </div>
        </div>
    )
}
export default Itinerary;