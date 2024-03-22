import { configureStore } from "@reduxjs/toolkit";
import CitiesReducer from "./reducers/citiesReducer";
import { userReducer } from "./reducers/userReducer";

const store={
    cities: CitiesReducer,
    user:userReducer,
}
export default configureStore({
    reducer:store,
})