import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StoreItem, Test,} from "../../types/types";

let initialState:StoreItem<Test[]>={
    requestStatus:"not_initiated",
    responseStatus:"not_recieved",
    haveAnIssue:false,
    issue:"",
    data:[]
}
export const testScoresSlice=createSlice({
    name:'testScores',
    initialState:initialState,
    reducers:{
        inittestScores:(state,action:PayloadAction<StoreItem<Test[]>>)=>({...action.payload}),
        settestScores:(state,action:PayloadAction<Test[]>)=>{state.data=action.payload}
    }
});

export const {inittestScores,settestScores}=testScoresSlice.actions;
export default testScoresSlice.reducer;