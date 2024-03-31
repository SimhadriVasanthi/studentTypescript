import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ShortlistedCourse, StoreItem } from "../../types/types";

let initialState:StoreItem<ShortlistedCourse[]>={
    requestStatus:"not_initiated",
    responseStatus:"not_recieved",
    haveAnIssue:false,
    issue:"",
    data:[]
}

export const shortlistedCoursesSlice=createSlice({
    name:'shortlistedcourses',
    initialState:initialState,
    reducers:{
        initShortlisted:(state,action:PayloadAction<StoreItem<ShortlistedCourse[]>>)=>({...action.payload}),
        addShortlisted:(state,action:PayloadAction<ShortlistedCourse>)=>{state.data.push(action.payload)},
        updateShortlisted:(state,action:PayloadAction<ShortlistedCourse>)=>{
            let index=state.data.findIndex((item)=>item._id===action.payload._id);
            state.data[index]=action.payload;
        },
        removeShortlisted:(state,action:PayloadAction<string>)=>{state.data=state.data.filter((item)=>item._id!==action.payload)}
    }
})

export const {initShortlisted,addShortlisted,removeShortlisted,updateShortlisted}=shortlistedCoursesSlice.actions;
export default shortlistedCoursesSlice.reducer;