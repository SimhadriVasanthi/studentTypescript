import { useAppDispatch, useAppSelector } from "../assets/hooks"
import { setEducationHistory } from "../store/Slices/educationHistorySlice"
import { RootState } from "../store/store"
import { EducationHistory_Plus2, EducationHistory_School,EducationHistory_UnderGraduation,EducationHistory_PostGraduation } from "../types/types"

const EducationHistory=()=>{

    const educationhistory=useAppSelector((state:RootState)=>state.educationhistory)
    const Appdispatch=useAppDispatch()

    const addSchool=(obj:EducationHistory_School)=>{
        Appdispatch(setEducationHistory({type:'school',data:obj}));
    }
    const addPlus2=(obj:EducationHistory_Plus2)=>{
        Appdispatch(setEducationHistory({type:'plus2',data:obj}));
    }
    const addUnderGrad=(obj:EducationHistory_UnderGraduation)=>{
        Appdispatch(setEducationHistory({type:'underGraduation',data:obj}));
    }
    const addPostGrad=(obj:EducationHistory_PostGraduation)=>{
        Appdispatch(setEducationHistory({type:'postGraduation',data:obj}));
    }

    return(
        <div></div>
    )
}