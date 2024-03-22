import { createReducer } from "@reduxjs/toolkit";
import { loginUser, logout } from "../actions/userActions";
const initialState = {
    user: {}
}
export const userReducer = createReducer( initialState, ( builder ) => {
    builder.addCase( loginUser, ( state, action ) => {
            return {...state, user: action.payload}}
             ).addCase( logout, (state, action) => {
            return initialState
        } )
} )