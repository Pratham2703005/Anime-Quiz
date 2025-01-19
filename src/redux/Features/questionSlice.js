import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentQuestionIndex : 0,
    nextQuestionIndex: 1,
    ifLooseQuestionIndex: -1
};

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        nextquestion : (state,action)=>{
            const currentIndex = state.currentQuestionIndex;
            state.currentQuestionIndex += 1;
            if(currentIndex < 15) state.nextQuestionIndex += 1;
            if(currentIndex >=0 && currentIndex < 4){
                state.ifLooseQuestionIndex = -1;
            }else if(currentIndex >=4 && currentIndex < 9){
                state.ifLooseQuestionIndex = 4;
            }else{
                state.ifLooseQuestionIndex = 9;
            }
        },
        reset: (state,action)=>{
            state.currentQuestionIndex = 0;
            state.ifLooseQuestionIndex = -1;
            state.nextQuestionIndex = 1;
        }

    }
});

export const { nextquestion ,reset} = questionSlice.actions;
export default questionSlice.reducer;
