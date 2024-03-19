import { createAction } from "@reduxjs/toolkit";

export const loadAction= createAction('loadCites',(cities)=>{
    return{
        payload:cities
    }
})
export const filteringCities= createAction('filter',(value)=>{
    return{
        payload:value
    }
})