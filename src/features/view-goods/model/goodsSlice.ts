import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TableColumnEnum } from "../constants/tableColumn.enum";
import { TGood } from "../types/good";
import { MOCK_FILES, MOCK_GOODS } from "../constants/mock-goods";
import { TFile } from "shared/types";
import { getFileFromFilesMap } from "@utils/file-service";
import { FileTypeEnum } from "@enums/fileType.enum";

export type GoodsViewState = {
    filter: {
        search: string;
    },
    sortColumn: null | TableColumnEnum;
    files: Map<string, TFile>;
    goods: Array<TGood>;
    status: string | null;
    error: string | null;
    popupState: 'good' | 'group' | null;
    popup_data: null;
}

const initialState: GoodsViewState = {
    filter: {
        search: "",
    },
    files: MOCK_FILES,
    sortColumn: null,
    goods: [...MOCK_GOODS],
    status: null,
    error: null,
    popupState: null,
    popup_data: null
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
         * @param action.payload.path path of file
         * @param action.payload.name name of file
         */
        setSelectedItem: (state, action: PayloadAction<{path: string, name: string}>) => {
            const file = getFileFromFilesMap(state.files, action.payload.path, action.payload.name);
            if (file) {
                file.selected = !file.selected;
            }
        },

        /**
         * Switch group expanded state
         * @param action.path folder depth
         * @param action.name folder depth
         */
        setFolderOpenState: (state, action: PayloadAction<{path: string, name: string}>) => {
            const file = getFileFromFilesMap(state.files, action.payload.path, action.payload.name);    
            if (file?.type === FileTypeEnum.group) {
                file.expanded = !file.expanded;
            }
        },

        /**
         * Sets popup state
         * @param action.payload popup state
         */
        setGoodsViewPopup: (state, action: PayloadAction<'good' | 'group' | null>) => {
            state.popupState = action.payload;
        }
    },
});

export const {
    setSearch,
    setStatus,
    setError,
    setSortColumn,
    setSelectedItem,
    setFolderOpenState,
    setGoodsViewPopup
} = GoodsViewSlice.actions;
export default GoodsViewSlice;