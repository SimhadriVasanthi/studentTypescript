import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FamilyInfo, StoreItem,} from "../../types/types";

let initialState:StoreItem<FamilyInfo[]>={
    requestStatus:"not_initiated",
    responseStatus:"not_recieved",
    haveAnIssue:false,
    issue:"",
    data:[]
}
export const familyInfoSlice=createSlice({
    name:'familyInfo',
    initialState:initialState,
    reducers:{
        initfamilyInfo:(state,action:PayloadAction<StoreItem<FamilyInfo[]>>)=>({...action.payload}),
        addfamilyInfo:(state,action:PayloadAction<FamilyInfo>)=>{state.data.push(action.payload)},
        // removefamilyInfo:(state,action:PayloadAction<string>)=>{state.data=state.data.filter((item)=>item?._id!==action?.payload)},
        setfamilyInfo:(state,action:PayloadAction<FamilyInfo[]>)=>{state.data=action.payload}
    }
});

export const {initfamilyInfo,setfamilyInfo}=familyInfoSlice.actions;
export default familyInfoSlice.reducer;