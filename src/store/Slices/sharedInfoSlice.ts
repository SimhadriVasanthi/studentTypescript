import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Sharedinfo, StoreItem } from "../../types/types";

let initialState:StoreItem<Sharedinfo|undefined>={
    requestStatus:"not_initiated",
    responseStatus:"not_recieved",
    haveAnIssue:false,
    issue:"",
    data:undefined
}

export const sharedinfoSlice=createSlice({
    name:'sharedinfo',
    initialState:initialState,
    reducers:{
        initSharedInfo:(state,action:PayloadAction<StoreItem<Sharedinfo>>)=>({...action.payload}),
        setSharedInfo:(state,action:PayloadAction<Sharedinfo>)=>{state.data=action.payload},
        resetSharedinfo:(state,action:PayloadAction)=>({...initialState})
    }
});

export const {initSharedInfo,setSharedInfo,resetSharedinfo}=sharedinfoSlice.actions;
export default sharedinfoSlice.reducer;