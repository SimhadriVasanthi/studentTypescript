import { configureStore } from '@reduxjs/toolkit'
import workexperienceSlice from './Slices/workexperienceSlice'
import educationHistorySlice from './Slices/educationHistorySlice'
import chatsSlice from './Slices/chatsSlice'
import messagesSlice from './Slices/messagesSlice'
import shortlistedCoursesSlice from './Slices/shortlistedCoursesSlice'
import applicationsSlice from './Slices/applicationsSlice'
import userAuthSlice from './Slices/userAuthSlice'
import personalInfoSlice from './Slices/personalInfoSlice'
import documentsSlice from './Slices/documentsSlice'
import errorSlice from './Slices/errorSlice'
import popupSlice from './Slices/popupSlice'
import sharedInfoSlice from './Slices/sharedInfoSlice'
import skillsSlice from './Slices/skillsSlice'
import preferencesSlice from './Slices/preferencesSlice'
import testScoresSlice from './Slices/testScoresSlice'
import  familyInfoSlice  from './Slices/familyInfoSlice'


export const store = configureStore({
  reducer: {
    preferences:preferencesSlice,
    testscores:testScoresSlice,
    familyInfo:familyInfoSlice,
    workexperience:workexperienceSlice,
    educationhistory:educationHistorySlice,
    skills:skillsSlice,
    shortlistedcourses:shortlistedCoursesSlice,
    applications:applicationsSlice,
    userAuthStatus:userAuthSlice,
    personalInfo:personalInfoSlice,
    sharedInfo:sharedInfoSlice,
    documents:documentsSlice,
    chats:chatsSlice,
    messages:messagesSlice,
    error:errorSlice,
    popup:popupSlice,
    



  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch