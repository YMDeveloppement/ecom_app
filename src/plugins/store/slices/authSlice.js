import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUser = createAsyncThunk(
//     'auth/fetchUser',
//     async(state , action) => {
//         const response= await axios.post('/api/user', {
//             email: action.payload.email,
//             password: action.payload.password
//         });

//         const data = await response.data;
//         return data;
//     }
// )

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        loading: false,
        error: null,
        loggedIn: false
    },
    reducers: {
        login: (state, action) => {
            
            console.log('logging in user with data : ', action.payload, state);

            // state.user = action.payload;
            // state.loggedIn = true;
        },
        logout: (state) => {
            console.log('logging out user with data : ', action.payload, state);
            // state.user = {};
            // state.loggedIn = false;
        },
        registring: (state, action) => {
            // state.user = {};
            // state.loggedIn = false;
            console.log('registring user with data : ', action.payload, state);
        },
        getUser: (state) => {
            console.log('getting user with data : ', state);
            return state.user
        },
    }
})


export const { login, logout, registring, getUser } = authSlice.actions;

export default authSlice.reducer;