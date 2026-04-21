import { createSlice } from '@reduxjs/toolkit';
import {
    registerUser,
    loginUser,
    logoutUser,
    refreshTokenUser
} from '@/plugins/store/slices/authThunks.js'
import { Nav } from 'react-bootstrap';

const getinitialState = () => {
    let dataSession = localStorage.getItem('userEcom');
    dataSession = !['null', 'undefined', null, ''].includes(dataSession) ? JSON.parse(dataSession) : null
    const initdata = {
        user: dataSession?.user,
        token: dataSession?.token,
        status: 'idle',       // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
        isAuthenticated: dataSession?.user ? true : false,
    }
    return initdata
};
const authSlice = createSlice({
    name: 'auth',
    initialState: getinitialState(),

    reducers: {
        resetAuth: (state) => {
            state.user = null
            state.token = null
            state.status = 'idle'
            state.error = null
            state.isAuthenticated = null
            localStorage.removeItem("userEcom");

        },

    },
    extraReducers: (builder) => {
        builder
            // register
            // .addCase(registerUser.pending, (state) => {

            // })
            // .addCase(registerUser.fulfilled, (state, action) => {

            // })
            // .addCase(registerUser.rejected, (state) => {

            // })
            // login
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log('action.payload', action.payload)

                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.access_token;
                state.isAuthenticated = true

                localStorage.setItem("userEcom", JSON.stringify({ 'user': state.user, 'token': state.token }));
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload; // "Wrong password" etc.
            })
            // logout
            .addCase(logoutUser.rejected, (state) => {

            })
            // refreshToken
            .addCase(refreshTokenUser.fulfilled, (state) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.access_token;
                state.isAuthenticated = true

                localStorage.setItem("userEcom", JSON.stringify({ 'user': state.user, 'token': state.token }));
                console.log('Im inside refresh ')
            })
            .addCase(refreshTokenUser.rejected, (state) => {
                console.log('Im inside refresh ')

            })

    }

})
export const { resetAuth } = authSlice.actions;
export default authSlice.reducer;