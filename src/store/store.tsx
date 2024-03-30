import { configureStore } from '@reduxjs/toolkit'
// import { ShortlistedCoursesSlice } from '../reducers/shortlistedSlice'
import workExperienceSlice from '../reducers/workExperienceSlice'

export const store = configureStore({
  reducer: {
    workExperience: workExperienceSlice,
    // shortlistedCourses:ShortlistedCoursesSlice,
  },
})
export type RootState = ReturnType<typeof store.getState>