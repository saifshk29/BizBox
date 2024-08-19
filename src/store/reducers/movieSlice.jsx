import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    info:null,
};
export const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
        loadmovie : (state,action) =>{
            state.info = action.payload;
        },
        removemovie : (state,action)=>{
            state.info = null;
        },
    },
});
export const {loadmovie} = movieSlice.actions;
export const {removemovie} = movieSlice.actions;

export default movieSlice.reducer;