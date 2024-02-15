import { FC, memo, useEffect, useState } from 'react';
import styles from './Select.module.scss';
import { SelectArrowIcon } from '@assets/index';
import clsx from 'clsx';

type Option = {
    label: string;
    value: any;
}

type SelectProps = {
    value?: any;
    defaultValue?: any;
    defaultValueLabel?: string;
    options?: Option[];
    name?: string;
    onChange?: (value: any) => void;
    dropDirection?: 'top' | 'bottom';
    projectType?: string;
}

const Select: FC<SelectProps> = function({defaultValue, defaultValueLabel, value, options, dropDirection='bottom', onChange, name={}, projectType="default"}) {
    const [selectOpen, setSelectOpen] = useState<boolean>(false);

    function selectOption(value: any) {
        onChange && onChange({ target: { name, value }});
        setSelectOpen(true);
    }

    useEffect(() => {
        function handleCloseMenu() {
            setSelectOpen(false);
        }
        if (selectOpen) {
            setTimeout(() => window.addEventListener('click', handleCloseMenu));
        }
        else {
            window.removeEventListener('click', handleCloseMenu);
        }
        return () => {
            window.removeEventListener('click', handleCloseMenu);
        }
    }, [selectOpen]);

    function switchSelectOpen() {
        setSelectOpen(prev => !prev);
    }

    return(
        <div 
            className={styles.select_container}>
                <button 
                    type="button"
                    onClick={switchSelectOpen}
                    className={clsx(styles[`${projectType}_select_button`], !options?.find(item => item.value === value)?.label && styles[`${projectType}_placeholder`])}>
                        {options?.find(item => item.value === value)?.label || defaultValueLabel || "*"}
                        <img src={SelectArrowIcon} className={clsx(styles.select_arrow, selectOpen && styles.active_select_arrow)}/>
                </button>
                {
                    selectOpen && 
                    <div className={styles[`${projectType}_options_holder`]} style={dropDirection === 'bottom' ? {top: '29px'} : {top: '-10px'}}>
                        {options?.map(({label, value}, index) => (
                            <button 
                                type="button"
                                key={index} 
                                onClick={() => selectOption(value)}
                                className={styles.option}>
                                    {label}
                            </button>
                        ))}
                    </div>
                }
        </div>
    );
};

export default memo(Select);