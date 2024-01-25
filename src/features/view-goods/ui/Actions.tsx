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
            <button type='button' onClick={handleButtonClick}>
                Действия
                <img src={ArrowDown} className={clsx(open && styles.open_arrow)}/>
            </button>
            {
                open &&
                <div className={clsx(styles.menu, styles.open_menu)}>
                    <button>+Добавить</button>
                    <button>+Добавить группу</button>
                    <button></button>
                    <button></button>
                </div>
            }
        </div>
    );
};

export default Actions;