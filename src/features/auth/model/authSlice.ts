import { User } from "@entities/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AuthPageStateEnum } from "../enums/authPageState.enum";
import { TServer } from "../types/server";

export type AuthState = {
    isLogged: boolean;
    user: User | null;
    pageState: AuthPageStateEnum;
    server_id: string | null;
    servers: TServer[];
}

const initialState: AuthState = {
    isLogged: false,
    user: {
        firstName: "Сергей",
        lastName: "Обама"
    },
    server_id: null,
    pageState: AuthPageStateEnum.AUTH,
    servers: []
}

export const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState,
    reducers: {
        setLogged: (state, action: PayloadAction<boolean>) => {
            state.isLogged = action.payload;
        },
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
        },
        setAuthPageState: (state, action: PayloadAction<AuthPageStateEnum>) => {
            state.pageState = action.payload;
        },
        setServerId: (state, action: PayloadAction<string>) => {
            state.server_id = action.payload;
        }
    },
});

export const {
    setLogged,
    setUser,
    setAuthPageState,
    setServerId
} = AuthSlice.actions;

export default AuthSlice;