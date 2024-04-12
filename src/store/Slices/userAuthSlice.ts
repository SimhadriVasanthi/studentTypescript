import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StoreItem, UserStatus } from "../../types/types";

let initialState: StoreItem<UserStatus> = {
    requestStatus:"not_initiated",
    responseStatus:"not_recieved",
    haveAnIssue:false,
    issue:"",
    data: {
        isAuthorized: false,
        isRegistered: false,
        role: "guest"
    }
};
const UserAuthStatusSlice = createSlice({
    name: 'userauthstatus',
    initialState: initialState,
    reducers: {
        setUserAuthStatus: (state, action: PayloadAction<UserStatus >) => {
            state.data = action.payload;
        },
        initUserAuthStatus:(state,action)=>({...action.payload})
}
    }
);

export const { setUserAuthStatus, initUserAuthStatus } = UserAuthStatusSlice.actions;
export default UserAuthStatusSlice.reducer;
