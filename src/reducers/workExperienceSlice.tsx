import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../types/types";


const initialState: initialData = {
  requestStatus: "not_initiated",
  responseStatus: "not_received",
  haveAnIssue: false,
  issue: "",
  data: [],
};
export const workexperienceSlice = createSlice({
  name: "workexperience",
  initialState,
  reducers: {
    initWorkexperience: (state, action) => ({ ...action.payload }),
    addWorkexperience: (state, action) => {
      state.data.push(action.payload);
    },
    removeWorkexperience: (state, action) => {
      state.data = state.data.filter(
        (item: any) => item._id !== action.payload
      );
    },
    updateWorkexperience: (state, action) => {
      let index = state.data.findIndex(
        (item: any) => item._id === action.payload._id
      );
      state.data[index] = action.payload.newData;
    },
    setWorkExperience: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { initWorkexperience, addWorkexperience, removeWorkexperience,updateWorkexperience } = workexperienceSlice.actions

export default workexperienceSlice.reducer
