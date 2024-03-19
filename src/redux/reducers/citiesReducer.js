import { createReducer } from "@reduxjs/toolkit";
import { filteringCities, loadAction } from "../actions/citiesActions";
const initialState ={
    all:[],
    filtered:[],
    search:""
}
const reducer=createReducer(initialState,(builder)=>{
    builder.addCase(loadAction,(state,action)=>{
        const copyState={...state}
        copyState.all=action.payload;
        copyState.filtered=action.payload;
        return copyState;
    }).addCase(filteringCities,(state,action)=>{
        const cFiltered=state.all.filter((city)=>{ return city.name.toLowerCase().startsWith(action.payload.toLowerCase().trim())});
        return{...state, filtered: cFiltered, search:action.payload}
    })
})
export default reducer;