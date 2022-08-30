import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    name : '',
    age : 0,
    email : ''
}

export const userSlice = createSlice({
    name : "user", // name of the slice
    initialState : { value : {    
    name: '',
    age: 0,
    email: '' }},
    reducers : { 
login: (state, action) => {
    state.value = action.payload},

logout: (state, action) => {
    state.value = initialStateValue
}
},

})

export default userSlice.reducer;

export const {login, logout} = userSlice.actions;