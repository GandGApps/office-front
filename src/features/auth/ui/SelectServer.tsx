import { Link, useNavigate } from 'react-router-dom';
import styles from './SelectServer.module.scss';
import { ArrowLeftIcon } from '@assets/index';
import { Button } from '@components/Button';
import { useState } from 'react';
import { useAppSelector } from '@hooks/useAppSelector';
import { AuthState } from '..';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { setServerId } from '../model/authSlice';

const SelectServer = function() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { server_id, servers } = useAppSelector<AuthState>(state => state.AuthSlice);
    const [selectedServerId, setSelectedServerId] = useState<string | null>(server_id);

    function selectServerById(id: string) {
        setSelectedServerId(id);
    };

    const confirmSelection = function() {
        if (selectedServerId) {
            dispatch(setServerId(selectedServerId));
            navigate('/auth/sign-in');
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Link to="/auth/sign-in">
                    <img src={ArrowLeftIcon}/>
                    Выбор сервера
                </Link>
            </div>
            <div className={styles.table_holder}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <button>
                                    Сервер
                                </button>
                            </th>
                            <th>
                                <button>
                                    Версия
                                </button>
                            </th>
                            <th>
                                <button>
                                    Имя компьютера
                                </button>
                            </th>
                            <th>
                                <button>
                                    Протокол
                                </button>
                            </th>
                            <th>
                                <button>
                                    Адрес
                                </button>
                            </th>
                            <th>
                                <button>
                                    Порт
                                </button>
                            </th>
                            <th>
                                <button>
                                    Путь
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            servers.map((serverItem, index) => (
                                <tr key={index} onClick={(e) => selectServerById(`${index}`)}>
                                    <td style={{ textAlign: 'left', display: 'flex', alignItems: 'center'}}>
                                        <input 
                                            type="radio" 
                                            id="server-radio" 
                                            className={styles.radio_input}
                                            name={`server`} 
                                            value={index} 
                                            onChange={(e) => {e.stopPropagation(); selectServerById(`${index}`)}} 
                                            onClick={e => e.stopPropagation()} 
                                            checked={`${index}` == selectedServerId}/>
                                            <div>
                                                {serverItem.name}
                                            </div>
                                    </td>
                                    <td>
                                        {serverItem.version}
                                    </td>
                                    <td>
                                        {serverItem.pc}
                                    </td>
                                    <td>
                                        {serverItem.protocol}
                                    </td>
                                    <td>
                                        {serverItem.address}
                                    </td>
                                    <td>
                                        {serverItem.port}
                                    </td>
                                    <td>
                                        {serverItem.path}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className={styles.table_bottom_border} />
            <div className={styles.footer}>
                <Link to="/auth/new-server">Добавить в ручную</Link>
                <div style={{width: 125}}>
                    <Button 
                        projectType={['primary']}
                        onClick={confirmSelection}
                        disabled={!selectedServerId}>Выбрать</Button>
                </div>
            </div>
        </div>
    );
};

export default SelectServer;