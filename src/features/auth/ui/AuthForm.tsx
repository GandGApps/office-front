import { ArrowRightDouble, AuthLogo, LockIcon, NetworkIcon, UserIcon } from '@assets/index';
import styles from './AuthForm.module.scss';
import { Input } from '@components/Input';
import { Controller, useForm } from 'react-hook-form';
import { TAuthForm } from '../types/authForm';
import { Button } from '@components/Button';
import { ChangeEvent, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '@utils/localStorage-service';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { setAuthPageState } from '../model/authSlice';
import { AuthPageStateEnum } from '../enums/authPageState.enum';
import { Link } from 'react-router-dom';

const AuthForm = function() {
    const dispatch = useAppDispatch();
    const [saveServer, setSaveServer] = useState<boolean>(Boolean(getLocalStorage('save-auth-server')));
    const { control, handleSubmit } = useForm<TAuthForm>({defaultValues: { login: "", password: ""}});

    function switchSaveServer(e: ChangeEvent<HTMLInputElement>) {
        setSaveServer(e.target.checked);
        setLocalStorage('save-auth-server', e.target.checked);
    }

    function selectServer() {
        dispatch(setAuthPageState(AuthPageStateEnum.SELECT_SERVER));
    }
    
    return(
        <div className={styles.container}>
            <img src={AuthLogo} alt="logo" className={styles.auth_logo}/>
            <h4>
                Добро пожаловать в "Название организации"
            </h4>
            <form className={styles.form}>
                <div className={styles.input_holder}>
                    <img src={UserIcon} alt="user" className={styles.input_icon}/>
                    <Controller 
                        name='login'
                        control={control}
                        render={({field: { name, onChange, onBlur, value }}) => 
                            (<Input 
                                name={name} 
                                placeholder='Логин'
                                onChange={onChange} 
                                onBlur={onBlur} 
                                value={value}
                                projectType='auth_input'/>)}
                        />
                </div>
                <div className={styles.input_holder}>
                    <img src={LockIcon} alt="lock" className={styles.input_icon}/>
                    <Controller 
                        name='password'
                        control={control}
                        render={({field: { name, onChange, onBlur, value }}) =>
                            (<Input 
                                name={name} 
                                placeholder='Пароль'
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                type="password"
                                projectType='auth_input'/>)}
                        />
                </div>
                <div className={styles.input_holder}>
                    <img src={NetworkIcon} alt="server" className={styles.input_icon}/>
                    <Input 
                        value={`Сервер:Валерий Иванович`} 
                        projectType='auth_server'
                        disabled/>
                    <Link 
                        to="/auth/select-server"
                        className={styles.select_server_button}
                        type='button'>
                            <img src={ArrowRightDouble}/>
                    </Link>
                </div>
                <div className={styles.save_server_holder}>
                    <input 
                        type="checkbox" 
                        onChange={switchSaveServer}
                        checked={saveServer}
                        id="save-server"/>
                    <label htmlFor="save-server">Сохранить выбор сервера</label>
                </div>
                <Button onClick={() => {}} projectType={['auth']}>
                    Войти
                </Button>
            </form>
            <span className={styles.error}>{false !== false ? "Неправильные данные" : ""}</span>
        </div>
    );
};

export default AuthForm;