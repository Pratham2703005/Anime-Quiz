import { combineReducers } from "@reduxjs/toolkit";
import userReducer from '../Features/UserSlice';
import lifelineReducer  from '../Features/LifelineSlice';
import questionReducer from '../Features/questionSlice';
import GameReducer from '../Features/GameSlice';
export const rootReducer = combineReducers({
    user: userReducer,
    lifeLines: lifelineReducer,
    question: questionReducer,
    game: GameReducer
})