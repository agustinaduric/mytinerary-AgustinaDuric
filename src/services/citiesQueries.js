import axios from "axios";
export const getCities = async()=>{
    try{
        const answer= await axios("http://localhost:4000/api/cities")
        return answer.data.data;
    } catch(err){
        return [];
    }
}
export const getCity = async (id)=>{
    try{
        const answerCity= await axios (`http://localhost:4000/api/cities/${id}`);
        return answerCity.data.data;
    }catch(err){
        return [];
    }
}
export const getItineraries = async(id)=>{
    try{
        const answerItineraries= await axios (`http://localhost:4000/api/itineraries/city/${id}`)
        return answerItineraries.data.data;
    } catch(err){
        return [];
    }
}