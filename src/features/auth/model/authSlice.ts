import { User } from "@entities/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type AuthState = {
    isLogged: boolean;
    user: User | null;
}

const initialState: AuthState = {
    isLogged: false,
    user: {
        firstName: "Сергей",
        lastName: "Обама"
    }
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
        }
    },
});

export const {
    setLogged,
    setUser
} = AuthSlice.actions;

export default AuthSlice;