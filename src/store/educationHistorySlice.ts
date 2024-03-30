import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EducationHistory, EducationHistory_Plus2, EducationHistory_PostGraduation, EducationHistory_School, EducationHistory_UnderGraduation, StoreItem } from "../types/types";

type EducationType="school" | "plus2" | "underGraduation" | "postGraduation"
//type EducationData=EducationHistory_School | EducationHistory_Plus2 | EducationHistory_UnderGraduation | EducationHistory_PostGraduation
let initialState:StoreItem<EducationHistory>={
    requestStatus:"not_initiated",
    responseStatus:"not_recieved",
    haveAnIssue:false,
    issue:"",
    data:{
        school: undefined,
        plus2: undefined,
        underGraduation: undefined,
        postGraduation:undefined
    }
}

export const educationHistorySlice=createSlice({
    name:'educationhistory',
    initialState:initialState,
    reducers:{
        initEducationHistory:(state,action)=>({...action.payload}),
        setEducationHistory:(state,action:PayloadAction<{type:EducationType,data:any}>)=>{state.data[action.payload.type]=action.payload.data},
        removeEducationHistory:(state,action:PayloadAction<EducationType>)=>{
            state.data[action.payload]=undefined
        },
    }
});

export const {initEducationHistory,removeEducationHistory,setEducationHistory}=educationHistorySlice.actions;
export default educationHistorySlice.reducer;

