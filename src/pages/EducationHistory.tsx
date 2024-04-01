import { useAppDispatch, useAppSelector } from "../assets/hooks"
import { RootState } from "../store/store"
import { EducationHistory_Plus2, EducationHistory_School,EducationHistory_UnderGraduation,EducationHistory_PostGraduation } from "../types/types"
import {setSchool,setPlus2,setPostGraduation,setUnderGraduation} from '../store/Slices/educationHistorySlice';
const EducationHistory=()=>{
    const personalInfo = useAppSelector((state:RootState)=>state.personalInfo);
    
    const updateTemporaryaddress = ()=>{

    }
    const educationhistory=useAppSelector((state:RootState)=>state.educationhistory)
    const Appdispatch=useAppDispatch()

    const addSchool=(obj:EducationHistory_School)=>{
        Appdispatch(setSchool(obj));
    }
    const addPlus2=(obj:EducationHistory_Plus2)=>{
        Appdispatch(setPlus2(obj));
    }
    const addUnderGrad=(obj:EducationHistory_UnderGraduation)=>{
        Appdispatch(setUnderGraduation(obj));
    }
    const addPostGrad=(obj:EducationHistory_PostGraduation)=>{
        Appdispatch(setPostGraduation(obj));
    }

    return(
        <div></div>
    )
}