import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StoreItem,} from "../../types/types";

let initialState:StoreItem<string[]>={
    requestStatus:"not_initiated",
    responseStatus:"not_recieved",
    haveAnIssue:false,
    issue:"",
    data:[]
}
export const skillsSlice=createSlice({
    name:'skills',
    initialState:initialState,
    reducers:{
        initskills:(state,action:PayloadAction<StoreItem<string[]>>)=>({...action.payload}),
        setskills:(state,action:PayloadAction<string[]>)=>{state.data=action.payload}
    }
});

export const {initskills,setskills}=skillsSlice.actions;
export default skillsSlice.reducer;