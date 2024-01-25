import { useEffect, useState } from 'react';
import styles from './Actions.module.scss';
import { ArrowDown } from '@assets/index';
import clsx from 'clsx';

function Actions() {
    const [open, setOpen] = useState<boolean>(false);

    function handleButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.stopPropagation();
        setOpen(prev => !prev);
    }

    useEffect(() => {
        function handleCloseMenu() {
            setOpen(false);
        }
        if (open) {
            window.addEventListener('click', handleCloseMenu);
        }
        else {
            window.removeEventListener('click', handleCloseMenu);
        }
        return () => {
            window.removeEventListener('click', handleCloseMenu);
        }
    }, [open]);

    return(
        <div className={styles.actions_container}>
            <button type='button' onClick={handleButtonClick} className={styles.actions_button}>
                Действия
                <img src={ArrowDown} className={clsx(open && styles.open_arrow)}/>
            </button>
            {
                open &&
                <div className={clsx(styles.menu, styles.open_menu)}>
                    <button>+Добавить</button>
                    <button>+Добавить группу</button>
                    <button>Копировать в...</button>
                    <button>Переместить в...</button>
                    <button>Редактировать</button>
                    <button>Удалить</button>
                    <button>Экспорт в Excel</button>
                    <button>Раскрыть все</button>
                    <button>Свернуть все</button>
                </div>
            }
        </div>
    );
};

export default Actions;