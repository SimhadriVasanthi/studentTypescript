import { configureStore } from '@reduxjs/toolkit'
import workexperienceSlice from './Slices/workexperienceSlice'
import educationHistorySlice from './Slices/educationHistorySlice'
import chatsSlice from './Slices/chatsSlice'
import messagesSlice from './Slices/messagesSlice'
import shortlistedCoursesSlice from './Slices/shortlistedCoursesSlice'
import applicationsSlice from './Slices/applicationsSlice'


export const store = configureStore({
  reducer: {
    workexperience:workexperienceSlice,
    educationhistory:educationHistorySlice,
    chats:chatsSlice,
    messages:messagesSlice,
    shortlistedcourses:shortlistedCoursesSlice,
    applications:applicationsSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch