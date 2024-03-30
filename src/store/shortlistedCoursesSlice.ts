import { createSlice } from "@reduxjs/toolkit";
import { Shortlisted, StoreItem } from "../../misc/typeDefinations";

export const shortlistedCoursesSlice=createSlice({
    name:'shortlistedcourses',
    initialState:{
        requestStatus:"not_initiated",
        responseStatus:"not_recieved",
        haveAnIssue:false,
        issue:"",
        data:[]
    },
    reducers:{
        initShortlisted:(state:StoreItem<Shortlisted[]>,action)=>({...action.payload}),
        addShortlisted:(state:StoreItem<Shortlisted[]>,action)=>({...state,data:[...state.data,action.payload]}),
        updateShortlistedObj:(state:StoreItem<Shortlisted[]>,action)=>state[action.payload.type]=action.payload.data,
        updateShortlisted:(state:StoreItem<Shortlisted[]>,action)=>{
            let index=state.data.findIndex((item)=>item==action.payload._id);
            //state.data[index]={...action.payload};
            // let clone=[...state.data];
            // clone[index]=action.payload;
            // state={...state,data:clone}
            //return state;
            state.data[index]=action.payload;
        },
        removeShortlisted:(state:StoreItem<Shortlisted[]>,action)=>({...state,data:state.data.filter((item,index)=>item._id!=action.payload)})
    }
})

export const {initShortlisted,addShortlisted,removeShortlisted,updateShortlistedObj,updateShortlisted}=shortlistedCoursesSlice.actions;
export default shortlistedCoursesSlice.reducer;