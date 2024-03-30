import { configureStore } from '@reduxjs/toolkit'
// import { ShortlistedCoursesSlice } from '../reducers/shortlistedSlice'
import workExperienceSlice from '../reducers/workExperienceSlice'

export const store = configureStore({
  reducer: {
    workExperience: workExperienceSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch