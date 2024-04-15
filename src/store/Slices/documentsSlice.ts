import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Document, Documents, StoreItem } from "../../types/types";

let initialState:StoreItem<Documents|undefined>={
    requestStatus:"not_initiated",
    responseStatus:"not_recieved",
    haveAnIssue:false,
    issue:"",
    data:undefined
}

// type Fields="personal"|"resume"|"passportBD"|"academic"|"secondarySchool"|"plus2"|"degree"|"bachelors"|"masters"|"transcripts"|"bonafide"|"CMM"|"PCM"|"OD"|"test"|"languageProf"|"general"|"workExperiences"

export const documentsSlice=createSlice({
    name:'documents',
    initialState:initialState,
    reducers:{
        initDocuments:(state,action:PayloadAction<StoreItem<Documents>>)=>({...action.payload}),
        addDocument:(state,action:PayloadAction<{pathArray:string[],isArray:boolean,data:Document}>)=>{
            let temp:any=state.data;
            action.payload.pathArray.forEach((path,i)=>{
                if(i<=action.payload.pathArray.length-2)
                {
                    temp=temp[path];
                }
            })
            if(action.payload.isArray)
            {
                temp[action.payload.pathArray[action.payload.pathArray.length-1]]
                ?
                temp[action.payload.pathArray[action.payload.pathArray.length-1]].push(action.payload.data)
                :
                temp[action.payload.pathArray[action.payload.pathArray.length-1]]=[action.payload.data]
                
            }
            else
            {
                temp[action.payload.pathArray[action.payload.pathArray.length-1]]=action.payload.data
            }
        },
        removeDocument:(state,action:PayloadAction<{pathArray:string[],isArray:boolean,data:Document|undefined}>)=>{
            let temp:any=state.data;
            action.payload.pathArray.forEach((path,i)=>{
                if(i<=action.payload.pathArray.length-2)
                {
                    temp=temp[path];
                }
            })
            if(action.payload.isArray)
            {
                temp[action.payload.pathArray[action.payload.pathArray.length-1]].length===1
                ?
                delete temp[action.payload.pathArray[action.payload.pathArray.length-1]]
                :
                temp[action.payload.pathArray[action.payload.pathArray.length-1]]=temp[action.payload.pathArray[action.payload.pathArray.length-1]].filter((item:Document)=>item._id!==action.payload.data?._id)
            }
            else
            {
                delete temp[action.payload.pathArray[action.payload.pathArray.length-1]]
            }
        },
        setDocuments:(state,action:PayloadAction<Documents>)=>{state.data=action.payload},
    }
})

export const {initDocuments,addDocument,removeDocument,setDocuments}=documentsSlice.actions;
export default documentsSlice.reducer;