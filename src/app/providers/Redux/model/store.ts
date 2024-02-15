import { REDUX_REDUCERS } from "@configs/reduxConfig";
import { Reducer, Slice, configureStore } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";

enableMapSet()

function getReducers(): {[key: string]: Reducer} {
    const reducers: {[key: string]: Reducer} = {};
    REDUX_REDUCERS.forEach((item: Slice) => reducers[item.name] = item.reducer);
    return reducers;
}

export const store = configureStore({
    reducer: getReducers(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});