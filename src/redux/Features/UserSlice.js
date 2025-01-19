import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: { name: '', age: 17 }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        nameFn: (state, action) => {
            console.log("name: ", action.payload);
            state.user.name = action.payload;
        },
        ageFn: (state, action) => {
            console.log(parseInt(action.payload))
            state.user.age = action.payload;
        }
    }
});

export const { nameFn, ageFn } = userSlice.actions;
export default userSlice.reducer;
