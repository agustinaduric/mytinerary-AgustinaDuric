import axios from "axios";
export const getCities = async()=>{
    try{
        const answer= await axios("http://localhost:4000/api/cities")
        return answer.data.data;
    } catch(err){
        console.log(err);
        return [];
    }
}
export const getCity = async (id)=>{
    try{
        const answerCity= await axios (`http://localhost:4000/api/cities/${id}`);
        console.log(answerCity.data.data);
        return answerCity.data.data;
    }catch(err){
        console.log(err);
        return [];
    }
}
