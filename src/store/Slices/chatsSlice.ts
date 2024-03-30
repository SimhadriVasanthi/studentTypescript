import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Chat, Participant, StoreItem } from "../../types/types";

type ChatType="advisors"|"community"

let initialState:StoreItem<{advisors:Chat[],community:Chat[]}>={
    requestStatus:"not_initiated",
    responseStatus:"not_recieved",
    haveAnIssue:false,
    issue:"",
    data:{
        advisors:[],
        community:[]
    }
}

export const chatsSlice=createSlice({
    name:'chats',
    initialState:initialState,
    reducers:{
        initChats:(state,action:PayloadAction<StoreItem<Chat[]>>)=>{
            let chatType:ChatType;
            state.haveAnIssue=action.payload.haveAnIssue
            state.issue=action.payload.issue
            state.requestStatus=action.payload.requestStatus
            state.responseStatus=action.payload.responseStatus
            state.data.advisors=[];
            state.data.community=[];
            action.payload.data.forEach((chat:Chat) =>{
                chatType=getChatType(chat);  
                state.data[chatType].push(chat)
            })  
        },
        addChats:(state:StoreItem<{advisors:Chat[],community:Chat[]}>,action:PayloadAction<Chat>)=>{
            let chatType:ChatType=getChatType(action.payload);
            state.data[chatType].push(action.payload)
        },
        updateParticipantActivity:(state:StoreItem<{advisors:Chat[],community:Chat[]}>,action:PayloadAction<Participant>)=>{
            state.data.advisors=state.data.advisors.map((chat)=>{
                let index=chat.participants.findIndex((participant)=>participant._id==action.payload._id)
                if(index==-1){
                    return chat
                }
                else
                {
                    return {...chat,participants:chat.participants.map((participant)=>participant._id==action.payload._id?{...participant,activity:action.payload.activity}:participant)}
                }
            })
            state.data.community=state.data.community.map((chat)=>{
                let index=chat.participants.findIndex((participant)=>participant._id==action.payload._id)
                if(index==-1){
                    return chat
                }
                else
                {
                    return {...chat,participants:chat.participants.map((participant)=>participant._id==action.payload._id?{...participant,activity:action.payload.activity}:participant)}
                }
            })
        },
        updateParticipantsActivity:(state:StoreItem<{advisors:Chat[],community:Chat[]}>,action:PayloadAction<Participant[]>)=>{
            state.data.advisors=state.data.advisors.map((chat)=>{
                return {...chat,participants:chat.participants.map((participant)=>{
                    let i=action.payload.findIndex((item)=>item._id==participant._id)
                    if(i==-1)
                    {
                        return participant
                    }
                    else
                    {
                        return {...participant,activity:action.payload[i].activity}
                    }
                })}
            })
            state.data.community=state.data.community.map((chat)=>{
                return {...chat,participants:chat.participants.map((participant)=>{
                    let i=action.payload.findIndex((item)=>item._id==participant._id)
                    if(i==-1)
                    {
                        return participant
                    }
                    else
                    {
                        return {...participant,activity:action.payload[i].activity}
                    }
                })}
            })
        },
        updateChat:(state,action:PayloadAction<Chat>)=>{
            let chatType:ChatType=getChatType(action.payload);
            let index=state.data[chatType].findIndex((chat)=>chat._id==action.payload._id)
            state.data[chatType][index]={...action.payload,participants:state.data[chatType][index].participants}
        }
    }
})

const getChatType=(chat:Chat)=>{
    return chat.participants.findIndex((participant)=>participant.userType=="member")==-1?"community":"advisors"
}

export const {initChats,addChats,updateParticipantsActivity,updateChat,updateParticipantActivity}=chatsSlice.actions;
export default chatsSlice.reducer;


// updateChats:(state:StoreItem<{advisors:Chat[],community:Chat[]}>,action)=>{
        //     let clone={...state};let chatType
        //     switch(action.payload.updateType){

        //         case "chat":
        //             chatType=getChatType(action.payload.additionalData.chatData,action.payload.profile);
        //             let index2=clone[chatType].findIndex((chat)=>chat._id==action.payload.additionalData.chatData._id)
        //             clone[chatType][index2]={...clone[chatType][index2],unSeenMessages:action.payload.additionalData.chatData.unSeenMessages,lastMessage:action.payload.additionalData.chatData.lastMessage};
        //             break;

        //         case "userActivity":
        //             clone[chatType]=clone[chatType].map((chat)=>{
        //                 let index=chat.participants.findIndex((participant)=>participant._id==action.payload.additionalData.participant.id);
        //                 if(index==-1){
        //                     return chat;
        //                 }   
        //                 else{
        //                     return {...chat,participants:chat.participants.slice(index,1,{...chat.participants[index],activity:action.payload.additionalData.participant.status})};
        //                 }
        //             })
        //             break;

        //         case "chatActivity":
        //             chatType=getChatType(action.payload.additionalData.chatData,action.payload.profile);
        //             let index=clone[chatType].findIndex((chat)=>chat._id==action.payload.additionalData.chatData._id)
        //             clone[chatType][index]={...clone[chatType][index],activity:action.payload.additionalData.activityData}
        //             break;

        //         case "usersActivity":
        //             action.payload.additionalData.activityData.forEach((friend)=>{
        //                 clone.advisor.forEach((chat)=>{
        //                     chat.participants=chat.participants.map((participant)=>participant._id==friend._id?{...participant,activity:friend.activity}:participant)
        //                 })
        //                 clone.community.forEach((chat)=>{
        //                     chat.participants=chat.participants.map((participant)=>participant._id==friend._id?{...participant,activity:friend.activity}:participant)
        //                 })
        //             })
        //             break;
        //     }
        // }