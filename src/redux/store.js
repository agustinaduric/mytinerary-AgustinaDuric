import { configureStore } from "@reduxjs/toolkit";
import CitiesReducer from "./reducers/citiesReducer";

const store={
    cities: CitiesReducer,
}
export default configureStore({
    reducer:store,
})