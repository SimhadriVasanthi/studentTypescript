import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Application, Applications, StoreItem } from "../../types/types";

let initialState: StoreItem<Applications> = {
    requestStatus: "not_initiated",
    responseStatus: "not_recieved",
    haveAnIssue: false,
    issue: "",
    data: {
        processing: [],
        accepted: [],
        rejected: [],
        completed: [],
        cancelled: [],
    },
};
type Field = "processing" | "accepted" | "rejected" | "completed" | "cancelled";
export const applicationsSlice = createSlice({
    name: "applications",
    initialState: initialState,
    reducers: {
            initApplications: (
                state,
                action: PayloadAction<StoreItem<Applications>>
            ) => ({
                ...action.payload,
            }),
            addApplication: (
                state,
                action: PayloadAction<{ field: Field; data: Application }>
            ) => {
                const { field, data } = action.payload;
                state.data[field].push(data);
            },
        //     updateApplication: (state, action: PayloadAction<Application>) => {
        //         const { _id } = action.payload;
        //         for (const status in state.data) {
        //             const index = state.data[status].findIndex((item) => item._id === _id);
        //             if (index !== -1) {
        //                 state.data[status][index] = action.payload;
        //                 break; // Break out of loop once found
        //             }
        //         }
        //     },
        //     requestApplicationCancel: (
        //         state,
        //         action: PayloadAction<{ _id: string; status: string }>
        //     ) => {
        //         const { _id, status } = action.payload;
        //         const index = state.data[status].findIndex((item) => item._id === _id);
        //         if (index !== -1) {
        //             state.data[status][index].cancellationRequest = true;
        //         }
        //     },
        //     removeApplication: (
        //         state,
        //         action: PayloadAction<{ _id: string; status: string }>
        //     ) => {
        //         const { _id, status } = action.payload;
        //         state.data[status] = state.data[status].filter(
        //             (item) => item._id !== _id
        //         );
        //     },
        },
});

export const {
    initApplications,
    addApplication,
    // updateApplication,
    // removeApplication,
} = applicationsSlice.actions;
export default applicationsSlice.reducer;
