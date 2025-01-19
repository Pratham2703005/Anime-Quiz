import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gameStart: false
};

export const GameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        gamestartfn: (state,action)=>{
            state.gameStart = action.payload;
        }
    }
});

export const { gamestartfn } = GameSlice.actions;
export default GameSlice.reducer;
