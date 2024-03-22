import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCity } from "../services/citiesQueries";
import Itinerary from "../components/itinerary";
const CityInfo = () => {
const params= useParams()
const [city,setCity]= useState({})
const [loading,setLoading]= useState(true)
const navigate=useNavigate()
useEffect(()=>{
    getCity(params.id).then((answ)=>{
            if(answ.country){
                setCity(answ)
            }
            else{
                alert("The page is not available")
                navigate("/cities")
            }
    }).finally(()=>setLoading(false))
}, [])
    if(loading){
        return (<div className="flex align-center justify-center bold pt-20 bg-[url(/cities.jpg)] full-screen">
        <p className="text-xl md:text-3xl font-bold">Loading...</p>
    </div>);
    }
    return (
        <div>
            <div className="bg-[url(/cities.jpg)] bg-cover bg-center h-screen flex flex-col justify-center items-center">
                <div className="bg-black bg-opacity-60 p-4 md:p-8 rounded-lg self-center mt-8 md:mt-12 lg:mt-[22] lg:p-2">
                    <h2 className="text-xl md:text-3xl lg:text-4x1 font-bold mb-4 text-white">{city.name}</h2>
                    <hr></hr>
                    <img src={city.image} alt={city.name} className="w-auto h-20 md:h-40 lg:h-48 object-cover mx-auto mt-4"></img>
                    <p className="text-base md:text-xl my-4 text-white">{city.description}</p>
                    <p className="italic text-sm md:text-base lg:text-base mb-4 lg:mb-0 text-white">*Swipe to see the itineraries</p>
                </div>
                <div className="flex justify-center items-center border border-black rounded bg-[#96c75c] px-3 py-2 hover:bg-[#84a948] lg:mt-2 mt-1 md:mb-2">
                    <Link to="/cities" className="text-center mr-2 flex items-center justify-center text-sm md:text-md lg:text-md italic font-semibold">Continue exploring</Link>
                    <img src="/explorer.png" alt="explorerSymbol" className="w-4 h-4 self-center"></img>
                </div>
            </div>
                <Itinerary/>
        </div>
    );
}
export default CityInfo;