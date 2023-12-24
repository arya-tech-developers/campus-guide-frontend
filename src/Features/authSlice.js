import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        isLoggedIn: false,
        userData: null,
    }

}


export const authSlice = createSlice({
    name: authenticatioin,
    initialState,
    reducers: {
        login: (state, action) => {
            state.user.isLoggedIn=true;
            state.user.userData=action.payload;
        },
        logout:(state,action)=>{
            state.user.isLoggedIn=false;
            state.user.userData=null;
        }

    }

})


export const {login, logout}=authSlice.actions;
export default authSlice.reducer;


