import { createSlice } from "@reduxjs/toolkit";
import { StoreAction, StoreItem, WorkExperience } from "../../misc/typeDefinations";

export const workexperienceSlice=createSlice({
    name:'workexperience',
    initialState:{
        requestStatus:"not_initiated",
        responseStatus:"not_recieved",
        haveAnIssue:false,
        issue:"",
        data:[]
    },
    reducers:{
        initWorkexperience:(state,action:StoreAction<StoreItem<WorkExperience[]>>)=>({...action.payload}),
        addWorkexperience:(state,action:StoreAction<WorkExperience>)=>{state.data.push(action.payload)},
        removeWorkexperience:(state,action:StoreAction<string>)=>{state.data=state.data.filter((item:any)=>item._id!==action.payload)},
        updateWorkexperience:(state,action:StoreAction<WorkExperience>)=>{
            let index=state.data.findIndex((item:any)=>item._id===action.payload._id)
            state.data[index]=action.payload;
        },
        setWorkExperience:(state,action:StoreAction<WorkExperience[]>)=>{state.data=action.payload}
    }
});

export const {initWorkexperience,addWorkexperience,removeWorkexperience,updateWorkexperience,setWorkExperience}=workexperienceSlice.actions;
export default workexperienceSlice.reducer;