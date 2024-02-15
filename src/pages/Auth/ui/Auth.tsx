import styles from './Auth.module.scss';
import { AuthForm, NewServer, SelectServer } from '@features/auth';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const Auth = function() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/auth') {
            navigate('/auth/sign-in');
        }
    }, [pathname]);

    return(
        <div className={styles.page}>
            <div className={styles.auth_window}>
                <div className={styles.window_header}/>
                <Routes>
                    <Route path="/sign-in" element={<AuthForm />}/>
                    <Route path="/select-server" element={<SelectServer />}/>
                    <Route path="/new-server" element={<NewServer />}/>
                    <Route path='/*' element={<Navigate to="/auth/sign-in"/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Auth;