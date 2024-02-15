import { AuthState } from "@features/auth";
import { useAppSelector } from "@hooks/useAppSelector";
import { Auth } from "@pages/Auth";
import { Main } from "@pages/Main";
import { Navigate, Route, Routes } from "react-router-dom"

const AppRouter = function() {
    const { isLogged } = useAppSelector<AuthState>(state => state.AuthSlice);
    return(
        <Routes>
            {
                !isLogged ?
                <>
                    <Route path="/" element={<Main />}/>
                    <Route path="/*" element={<Navigate to="/"/>}/>
                </>
                :
                <>
                    <Route path="/auth/*" element={<Auth />}/>
                    <Route path="/*" element={<Navigate to="/auth"/>}/>
                </>
            }
        </Routes>
    );
};

export default AppRouter;