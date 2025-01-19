import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    phoneCall :true,
    fiftyFifty :true,
    audiencePoll : true,
};

export const leftLineSlice = createSlice({
    name: 'lifeLines',
    initialState,
    reducers: {
        setLifeLineState: (state, action)=>{
            const {type , value} = action.payload;
            state[type] = value;
        }
        
    }
});

export const { setLifeLineState } = leftLineSlice.actions;
export default leftLineSlice.reducer;
