import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Application, StoreItem } from "../../types/types";

let initialState:StoreItem<Application[]>={
    requestStatus:"not_initiated",
    responseStatus:"not_recieved",
    haveAnIssue:false,
    issue:"",
    data:[]
}

export const applicationsSlice=createSlice({
    name:'applications',
    initialState:initialState,
    reducers:{
        initApplications:(state,action:PayloadAction<StoreItem<Application[]>>)=>({...action.payload}),
        addApplication:(state,action:PayloadAction<Application>)=>({...state,data:[...state.data,action.payload]}),
        updateApplication:(state,action:PayloadAction<Application>)=>{
            let index=state.data.findIndex((item)=>item._id===action.payload._id);
            state.data[index]=action.payload;
        },
        requestApplicationCancel:(state,action:PayloadAction<string>)=>{
            let index=state.data.findIndex((item)=>item._id===action.payload);
            state.data[index].cancellationRequest=true
        },
        removeApplication:(state,action:PayloadAction<string>)=>({...state,data:state.data.filter((item,index)=>item._id!==action.payload)})
    }
})

export const {initApplications,addApplication,updateApplication,removeApplication}=applicationsSlice.actions;
export default applicationsSlice.reducer;