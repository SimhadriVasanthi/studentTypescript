import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Message, Participant, StoreItem } from "../../types/types";

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
        initMessages:(state,action:PayloadAction<StoreItem<Message[]>>)=>({...action.payload}),
        resetMessages:(state,action:PayloadAction<null>)=>({...initialState}),
        addMessage:(state,action:PayloadAction<Message>)=>{
            state.data=[...state.data.filter((msg)=>msg.type!=="typing"),action.payload,...state.data.filter((msg)=>msg.type==="typing")]
        },
        startTypingMessage:(state,action:PayloadAction<Participant>)=>{
            let typingMessages=state.data.filter((msg)=>msg.type==="typing")
            if(typingMessages.findIndex((msg)=>msg.sender?._id===action.payload._id)!==-1)
            {
                //doesnt exists
                typingMessages.push({_id:action.payload.firstName+"/typing",sender:action.payload,type:"typing"})
                state.data=[...state.data.filter((msg)=>msg.type!=="typing"),...typingMessages]
            }
        },
        stopTypingMessage:(state,action:PayloadAction<Participant>)=>{
            state.data=state.data.filter((msg)=>((msg.type!=="typing")|| (msg.type==="typing" && msg.sender?._id!==action.payload._id)))
        },
        seenMessage:(state,action:PayloadAction<Participant>)=>{
            state.data=[...state.data.filter((msg)=>msg.type!=="typing").filter((msg)=>((msg.type!=="seen")||(msg.type==="seen" && msg.sender?._id!==action.payload._id))),{_id:action.payload.firstName+"/seen",sender:action.payload,type:"seen"},...state.data.filter((msg)=>msg.type==="typing")]
        },
        removeMessage:(state,action:PayloadAction<string>)=>{state.data=state.data.filter((item,index)=>item._id!==action.payload)},
        updateMessage:(state,action:PayloadAction<Message>)=>{
            let index=state.data.findIndex((item)=>item._id===action.payload._id)
            state.data[index]=action.payload;
        }
    }
});

export const {initMessages,addMessage,removeMessage,updateMessage,resetMessages,startTypingMessage,stopTypingMessage,seenMessage}=messagesSlice.actions;
export default messagesSlice.reducer;