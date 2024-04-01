import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StoreItem, Personalinfo } from "../../types/types";

let initialState:StoreItem<Personalinfo[]>={
    requestStatus:"not_initiated",
    responseStatus:"not_recieved",
    haveAnIssue:false,
    issue:"",
    data:[]
}
export const PersonalinfoSlice=createSlice({
    name:'Personalinfo',
    initialState:initialState,
    reducers:{
        initPersonalinfo:(state,action:PayloadAction<StoreItem<Personalinfo[]>>)=>({...action.payload}),
        setPersonalinfo:(state,action:PayloadAction<Personalinfo[]>)=>{state.data=action.payload}
    }
});

export const {initPersonalinfo,setPersonalinfo}=PersonalinfoSlice.actions;
export default PersonalinfoSlice.reducer;