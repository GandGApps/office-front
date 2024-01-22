import { memo, useState } from 'react';
import styles from './Select.module.scss';
import { SelectArrowIcon } from '@assets/index';

function Select() {
    const [selectOpen, setSelectOpen] = useState<boolean>(false);
    function handleSelectBlur() {
        setSelectOpen(false);
    }
    function handleSelectClick() {
        setSelectOpen(prev => !prev);
    }
    return(
        <div 
            className={styles.select_container}
            onClick={handleSelectClick}>
                <select 
                    defaultValue={-1} 
                    className={styles.select} 
                    onBlur={handleSelectBlur}>
                    <option value={-1} hidden>Действия</option>
                </select>
                <span className={styles.select_arrow}>
                    <img src={SelectArrowIcon}/>
                </span>
        </div>
    );
};

export default memo(Select);