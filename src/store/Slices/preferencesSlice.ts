import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Preferences, StoreItem,} from "../../types/types";

let initialState:StoreItem<Preferences|undefined>={
    requestStatus:"not_initiated",
    responseStatus:"not_recieved",
    haveAnIssue:false,
    issue:"",
    data:undefined
}
export const preferencesSlice=createSlice({
    name:'preferences',
    initialState:initialState,
    reducers:{
        initpreferences:(state,action:PayloadAction<StoreItem<Preferences>>)=>({...action.payload}),
        setpreferences:(state,action:PayloadAction<Preferences>)=>{state.data=action.payload}
    }
});

export const {initpreferences,setpreferences}=preferencesSlice.actions;
export default preferencesSlice.reducer;