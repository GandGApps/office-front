import { memo, useState } from 'react';
import { CloseIcon } from '@assets/index';
import { Link } from 'react-router-dom';
import { Tab } from '../types/reduxSlice';
import clsx from 'clsx';
import styles from './Tab.module.scss';

type TabProps = {
    tab: Tab;
    active?: boolean;
    onSelect: (tab: Tab) => void;
    onRemove: (id: string) => void;
}

type TipParamsProps = {
    visible: boolean;
    timeout: ReturnType<typeof setTimeout> | null;
}

function TabItem({tab, active=false, onSelect, onRemove}: TabProps) {
    const [tipParams, setTipParams] = useState<TipParamsProps>({
        visible: false,
        timeout: null
    });
    
    const handleRemoveTab = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        e.preventDefault();
        onRemove(tab.title);
    }

    const handleAddTab = () => {
        onSelect({title: tab.title, id: tab.id, category_id: tab.category_id})
    }

    const handleEnterMouse = () => {
        if (tipParams.timeout) {
            clearTimeout(tipParams.timeout);
        }
        const timer = setTimeout(() => {
            setTipParams({ visible: true, timeout: null });
        }, 800);
        setTipParams(prev => ({...prev, timeout: timer}));
    }

    const handleLeavetMouse = () => {
        if (tipParams.timeout) {
            clearTimeout(tipParams.timeout);
        }
        setTipParams({ visible: false, timeout: null });
    }

    return (
        <Link 
            to="#" 
            onClick={handleAddTab} 
            className={clsx(styles.tab, active && styles.active_tab)}
            onMouseEnter={handleEnterMouse}
            onMouseLeave={handleLeavetMouse}>
                <p className={styles.title}>{tab.title}</p>
                <button type="button" onClick={handleRemoveTab} className={styles.close_button}>
                    <img src={CloseIcon} alt="close"/>
                </button>
                {
                    tipParams.visible &&
                    <span className={clsx(styles.tip, styles.visible_tip)}>{tab.title}</span>
                }
        </Link>
    );
};

export default memo(TabItem);