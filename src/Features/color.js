import {createSlice} from '@reduxjs/toolkit';
// import { userSlice } from './user';

const initialStateValue = ""

export const colorSlice = createSlice({
    name: "color",
    initialState : {value:initialStateValue},
reducers:{
    changeTheme : (state,action) => {
        state.value = action.payload
    }
}})

export default colorSlice.reducer;

export const {changeTheme} = colorSlice.actions;