import { AppWindowSlice } from "@features/appWindow";
import { AuthSlice } from "@features/auth";
import { GoodsViewSlice } from "@features/view-goods";

export const REDUX_REDUCERS = [
    AppWindowSlice,
    AuthSlice,
    GoodsViewSlice
];