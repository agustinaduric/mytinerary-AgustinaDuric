import axios from "axios";

export const getCountries = async()=>{
    try {
        const {data}= await axios( 'https://restcountries.com/v3.1/all?fields=name' );
        const countriesName=data.map(country=>country.name.common);
        return countriesName.sort();
    } catch (error) {
        return [];
    }
}