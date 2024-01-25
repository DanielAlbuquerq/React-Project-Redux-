import {createSlice} from "@reduxjs/toolkit";

const userData = {
    name: "daniel Mendes",
    phone: "11964548507",
    email: "dan.dan@hotmail.com"
}
const initialState = {
    currentUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    userLogin: (state, action) => {
        state.currentUser = userData
    },
    
    userLogout: (state, action) => {
        state.currentUser = null
    }

}});

export const {
    userLogin,
    userLogout,
} = userSlice.actions;

export default userSlice.reducer;