import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EducationHistory, EducationHistory_Plus2, EducationHistory_PostGraduation, EducationHistory_School, EducationHistory_UnderGraduation, StoreItem } from "../../types/types";

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
        setSchool:(state,action:PayloadAction<EducationHistory_School>)=>{state.data.school=action.payload},
        setPlus2:(state,action:PayloadAction<EducationHistory_Plus2>)=>{state.data.plus2=action.payload},
        setUnderGraduation:(state,action:PayloadAction<EducationHistory_UnderGraduation>)=>{state.data.underGraduation=action.payload},
        setPostGraduationl:(state,action:PayloadAction<EducationHistory_PostGraduation>)=>{state.data.postGraduation=action.payload},
        removeEducationHistory:(state,action:PayloadAction<EducationType>)=>{state.data[action.payload]=undefined},
        //setEducationHistory:(state,action:PayloadAction<{type:EducationType,data:any}>)=>{state.data[action.payload.type]=action.payload.data},
    }
});

export const {initEducationHistory,removeEducationHistory,setSchool,setPlus2,setPostGraduationl,setUnderGraduation}=educationHistorySlice.actions;
export default educationHistorySlice.reducer;

