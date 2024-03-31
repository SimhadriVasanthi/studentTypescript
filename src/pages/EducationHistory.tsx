import { useAppDispatch, useAppSelector } from "../assets/hooks"
import {  setSchool } from "../store/Slices/educationHistorySlice"
import { EducationHistory, EducationHistory_School } from "../types/types"

const EducationHistory=()=>{

    const educationhistory=useAppSelector((state)=>state.educationhistory)
    const Appdispatch=useAppDispatch()

    const addSchool=(obj:EducationHistory_School)=>{
        Appdispatch(setSchool(obj));
    }

    return(
        <div></div>
    )
}