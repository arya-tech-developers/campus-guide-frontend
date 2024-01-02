import { createSlice } from "@reduxjs/toolkit";
import lightModeLogo from "../Assets/Images/brightness.png";
import darkModeLogo from "../Assets/Images/night-mode.png";


const initialState={
    theme:{
        current_theme:"light",
        logo_link:darkModeLogo,
    }
}


export const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        changeTheme:(state,action)=>{
            if(action.payload.theme==="light") {
                state.theme.current_theme="dark"
                state.theme.logo_link=lightModeLogo
            }
            if(action.payload.theme==="dark"){
                state.theme.current_theme="light"
                state.theme.logo_link=darkModeLogo
            } 
        }
    }

})


export const {changeTheme}=themeSlice.actions;
export default themeSlice.reducer;