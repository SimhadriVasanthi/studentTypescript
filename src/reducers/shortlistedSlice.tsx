import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../types/types";


const initialState: initialData = {
  requestStatus: "not_initiated",
  responseStatus: "not_received",
  haveAnIssue: false,
  issue: "",
  data: [],
};
export const ShortlistedCoursesSlice = createSlice({
  name: "ShortlistedCourses",
  initialState,
  reducers: {
    initShortlistedCourses: (state, action) => ({ ...action.payload }),
    addShortlistedCourses: (state, action) => {
      state.data.push(action.payload);
    },
    removeShortlistedCourses: (state, action) => {
      state.data = state.data.filter(
        (item: any) => item._id !== action.payload
      );
    },
    updateShortlistedCourses: (state, action) => {
      let index = state.data.findIndex(
        (item: any) => item._id === action.payload._id
      );
      state.data[index] = action.payload.newData;
    },
    setShortlistedCourses: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { initShortlistedCourses, addShortlistedCourses, removeShortlistedCourses,updateShortlistedCourses } = ShortlistedCoursesSlice.actions

export default ShortlistedCoursesSlice.reducer
