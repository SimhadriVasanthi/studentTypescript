import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Personalinfo, StoreItem} from "../../types/types";

let initialState:StoreItem<Personalinfo|undefined>={
    requestStatus:"not_initiated",
    responseStatus:"not_recieved",
    haveAnIssue:false,
    issue:"",
    data:undefined
}

//type Field="firstName"|"lastName"|"displayPicSrc"|"email"|"DOB"|"Gender"|"temporaryAddress"|"permanentAddress"|"nationality"|"countyOfBirth"|"maritalStatus"|"validPassport"|"validPermit"|"visaRejectedDetails"

const personalinfoSlice=createSlice({
    name:'personalinfo',
    initialState:initialState,
    reducers:{
        initPersonalInfo:(state,action:PayloadAction<StoreItem<Personalinfo>>)=>({...action.payload}),
        setPersonalInfo:(state,action:PayloadAction<Personalinfo>)=>{state.data=action.payload},
        // updatePersonalInfo:(state,action:PayloadAction<{field:Field,data:any}>)=>{
        //     state.data
        //     ?
        //     state.data[action.payload.field]=action.payload.data
        //     :
        //     null
        // },
        resetPersonalInfo:(state,action:PayloadAction)=>({...initialState})
    }
})

export const {initPersonalInfo,setPersonalInfo,resetPersonalInfo}=personalinfoSlice.actions;
export default personalinfoSlice.reducer;