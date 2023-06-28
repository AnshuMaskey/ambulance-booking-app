import { createSlice } from "@reduxjs/toolkit";

const initialState={
    origin: null,
    destination: null,
    travelTimeInformation: null,
    pay:null,
    
}

export const navSlice= createSlice({
    name:'nav',
    initialState,
    reducers: {
        setOrigin: (state, action)=> {
            state.origin=action.payload;
        },
        setDestination: (state, action)=> {
            state.destination=action.payload;
        },
        setTravelTimeInformation: (state, action)=> {
            state.travelTimeInformation=action.payload;
        },
        setPay: (state, action)=> {
            state.pay=action.payload;
        }
    }
});

export const{setOrigin, setDestination,setTravelTimeInformation, setPay}= navSlice.actions;

//Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectPay = (state) => state.nav.pay;

export default navSlice.reducer;