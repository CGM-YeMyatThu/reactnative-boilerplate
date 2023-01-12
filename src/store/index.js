import { configureStore, combineReducers } from "@reduxjs/toolkit";
import attendanceReducer from "./attendanceSlice";
const reducer = combineReducers({
    attendance: attendanceReducer
})

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {},
            serializableCheck: false,
        }),
})