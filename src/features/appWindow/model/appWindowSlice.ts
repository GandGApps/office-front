import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AddTabProps, Tab } from "../types/reduxSlice";

export type AppWindowState = {
    openTabs: Tab[];
    activeTab: Tab | null;
}

const initialState: AppWindowState = {
    openTabs: [],
    activeTab: null
}

export const AppWindowSlice = createSlice({
    name: 'AppWindow',
    initialState,
    reducers: {
        addTab: (state, action: PayloadAction<AddTabProps>) => {
            const exists = state.openTabs.find((tab) => tab.title === action.payload.tab.title);
            if (!exists) {
                state.openTabs = [...state.openTabs, action.payload.tab];
            }
            if (action.payload.options?.setActive) {
                console.log('setting');
                state.activeTab = exists ? exists : action.payload.tab;
            }
        },
        /**
         * Remove tab from opened tabs
         * @param state 
         * @param action 
         * @returns 
         */
        removeTab: (state, action: PayloadAction<string>) => {
            const index = state.openTabs.findIndex(tab => tab.title === action.payload);
            if (index === -1) {
                return;
            }
            if (state.activeTab?.title === action.payload) {
                if (state.openTabs.length -1 === index) {
                    state.activeTab = index === 0 ? null : state.openTabs[index-1];
                }
                else {
                    state.activeTab = state.openTabs[index + 1];
                }
            }
            state.openTabs = state.openTabs.filter(tab => tab.title !== action.payload);
        },
        removeAllTabs: (state) => {
            state.openTabs = [];
            state.activeTab = null;
        },
        removeInactiveTabs: (state) => {
            state.openTabs = state.openTabs.filter(tab => tab === state.activeTab);
        },
        setActiveTab: (state, action: PayloadAction<Tab>) => {
            const tab = state.openTabs.find(item => item.title === action.payload.title);
            if (tab) {
                state.activeTab = tab;
            }
        }
    //   incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload
    //   },
    },
});

export const {
    addTab,
    removeAllTabs,
    removeInactiveTabs,
    removeTab,
    setActiveTab
} = AppWindowSlice.actions;
export default AppWindowSlice;