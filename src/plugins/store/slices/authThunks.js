import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosIns from '@/plugins/axiosIns.js'

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await axiosIns.post('/login', userData);
            console.log('dataLogin', data)
            return data;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || 'Registration failed');
        }
    }
)

export const refreshTokenUser = createAsyncThunk(
    'auth/refreshTokenUser',
    async (_, { rejectWithValue }) => {
        console.log('Im inside refresh ')
        try {
            const { data } = await axiosIns.post('/refresh');
            console.log('dataLogin', data)
            return data; 
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || 'Registration failed');
        }
    }
)



