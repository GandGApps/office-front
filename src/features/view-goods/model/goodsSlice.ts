import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TableColumnEnum } from "../constants/tableColumn.enum";
import { TGood } from "../types/good";
import { MOCK_GOODS } from "../constants/mock-goods";

export type GoodsViewState = {
    filter: {
        search: string;
    },
    sortColumn: null | TableColumnEnum;
    goods: Array<TGood>;
    selectedGoods: {[key: string]: boolean};
    status: string | null;
    error: string | null;
}

const initialState: GoodsViewState = {
    filter: {
        search: "",
    },
    sortColumn: null,
    goods: [...MOCK_GOODS],
    selectedGoods: {},
    status: null,
    error: null
}

export const GoodsViewSlice = createSlice({
    name: 'GoodsView',
    initialState,
    reducers: {
        /**
         * Set search filter valuee
         * @param action.payload search filter value
         */
        setSearch: (state, action: PayloadAction<string>) => {
            state.filter.search = action.payload;
        },

        /**
         * Set status value
         * @param action.payload status value
         */
        setStatus: (state, action: PayloadAction<string | null>) => {
            state.status = action.payload;
        },

        /**
         * Set error value
         * @param action.payload error value
         */
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },

        /**
         * Set column of table sorted
         * @param action.payload column of table to filter
         */
        setSortColumn: (state, action: PayloadAction<TableColumnEnum>) => {
            state.sortColumn = action.payload;
        },

        /**
         * Select good item in the table
         * @param action.payload id of good
         */
        setSelectedItem: (state, action: PayloadAction<string>) => {
            if (state.selectedGoods[action.payload]) {
                delete state.selectedGoods[action.payload];
            }
            else {
                state.selectedGoods[action.payload] = true;
            }
        },

        /**
         * Set folder open status
         * @param action.payload folder depth
         */
        setFolderOpen: (state, action: PayloadAction<number>) => {
            
        }
    },
});

export const {
    setSearch,
    setStatus,
    setError,
    setSortColumn,
    setSelectedItem
} = GoodsViewSlice.actions;
export default GoodsViewSlice;