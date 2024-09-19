import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    remainingDays: null,
    remainingCredits: null,
    isLoggedIn: false,
    instaLoggedIn: false,
    telLoggedIn: false,
    linkLoggedIn: false,
    loading: false,
    error: null,
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        fetchDataRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchDataSuccess: (state, action) => {
            state.loading = false;
            state.remainingDays = action.payload.data.remainingdays;
            state.remainingCredits = action.payload.data.user.credit;
            state.data = action.payload;
        },
        fetchDataFailure: (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.error = action.payload;
        },
        setRemainingCredits: (state, action) => {
            console.log(action.payload);
            state.remainingCredits = action.payload;
        },
        setIsLoggedIn: (state, action) => {
            console.log(action.payload);
            state.isLoggedIn = action.payload;
        },
        setInstaLoggedIn: (state, action) => {
            console.log(action.payload);
            state.instaLoggedIn = action.payload;
        },
        setTelLoggedIn: (state, action) => {
            console.log(action.payload);
            state.telLoggedIn = action.payload;
        },
        setLinkLoggedIn: (state, action) => {
            console.log(action.payload);
            state.linkLoggedIn = action.payload;
        },
    },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure, setRemainingCredits, setIsLoggedIn, setInstaLoggedIn, setTelLoggedIn, setLinkLoggedIn } = dataSlice.actions;

export default dataSlice.reducer;