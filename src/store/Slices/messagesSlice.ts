import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Message, StoreItem } from "../types/types";

let initialState:StoreItem<Message[]>={
    requestStatus:"not_initiated",
    responseStatus:"not_recieved",
    haveAnIssue:false,
    issue:"",
    data:[]
}

export const messagesSlice=createSlice({
    name:'messages',
    initialState:initialState,
    reducers:{
        initMessages:(state,action:PayloadAction<StoreItem<Message[]>>)=>({...action.payload,data:action.payload.data.map((msg)=>({...msg,type:'normal'}))}),
        setMessages:(state,action)=>{state.data=action.payload},
        resetMessages:(state,action)=>({
            requestStatus:"initiated",
            responseStatus:"not_recieved",
            haveAnIssue:false,
            issue:"",
            data:[]
        }),
        addMessage:(state,action)=>{
            state.data.findIndex((msg)=>msg.type=="typing")==-1
            ?
            state.data.push(action.payload)
            :
            state.data=[...state.data.filter((msg)=>msg.type!="typing"),action.payload]
            // if(action.payload.type=="typing")
            // {
            //     newMessages=[...state.filter((item)=>item._id!="typing"),{_id:"typing",type:'typing'}]
            // }
            // else if(action.payload.type=="seen")
            
            // {
            //     newMessages=[...state.filter((item)=>item._id!="seen"),{_id:"seen",type:'seen'}]
            // }
            // else
            // {
            //     newMessages=[...state.filter((item)=>item._id!="typing"),{...action.payload,type:'normal'}]
            // }
            //return newMessages;
        },
        typingMessage:(state,action)=>{state.data.push(action.payload)},
        seenMessage:(state:StoreItem<Message[]>,action)=>{state.data=state.data.filter((item)=>item.type=="seen")},
        removeMessage:(state,action)=>{state.data.filter((item,index)=>item._id!=action.payload)},
        updateMessage:(state,action)=>{
            //var updatedlist=[];
            //state.forEach(element => {element._id!=action.payload.id?updatedlist.push(element):updatedlist.push(action.payload.newdata)});
            //state[action.payload.id]=action.payload.newdata;
            return state;
        }
    }
});

export const {initMessages,addMessage,removeMessage,updateMessage,setMessages,resetMessages}=messagesSlice.actions;
export default messagesSlice.reducer;