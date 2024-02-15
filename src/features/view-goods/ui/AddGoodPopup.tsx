import { Popup } from '@components/Popup';
import styles from '../styles/AddGoodPopup.module.scss';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { setGoodsViewPopup } from '../model/goodsSlice';
import { PopupCloseIcon, PopupCollapseIcon, PopupStretchIcon } from '@assets/index';
import { useState } from 'react';
import clsx from 'clsx';
import { Button } from '@components/Button';
import GoodInfoTab from './newGood/GoodInfoTab';
import { useForm } from 'react-hook-form';
import { NewGoodContext } from '../model/newGood.context';
import { CreateGoodDto } from '../types/createGood.dto';

type TabsState = 'goods' | 'storage' | 'alcohol' | 'supplierGoods';

function AddGoodPopup() {
    const dispatch = useAppDispatch();
    const [activeTab, setActiveTab] = useState<TabsState>('goods');
    const { register, control, handleSubmit } = useForm<CreateGoodDto>({
        defaultValues: {
            name: "",
            article: "",
            code: "",
            left: "",
            price: ""
        }
    });

    function closePopup() {
        dispatch(setGoodsViewPopup(null));
    }

    function saveGood(data: any) {
        console.log('Saving form:', data);
    }

    return(
        <Popup overlayClose={false}>
            <div className={styles.container} >
                <NewGoodContext.Provider value={{register, control}}>
                    <div className={styles.container_header}>
                        <p>Новый элемент</p>
                        <div className={styles.popup_actions}>
                            <button type='button'>
                                <img src={PopupCollapseIcon}/>
                            </button>
                            <button type='button'>
                                <img src={PopupStretchIcon}/>
                            </button>
                            <button type='button' onClick={closePopup}>
                                <img src={PopupCloseIcon}/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.popup_tabs}>
                        <button 
                            className={clsx(activeTab === 'goods' ? styles.active_tab : styles.inactive_tab)}
                            onClick={() => setActiveTab('goods')}>
                                Товары
                        </button>
                        <button 
                            className={clsx(activeTab === 'storage' ? styles.active_tab : styles.inactive_tab)}
                            onClick={() => setActiveTab('storage')}>
                                Уровни запасов
                        </button>
                        <button 
                            className={clsx(activeTab === 'alcohol' ? styles.active_tab : styles.inactive_tab)}
                            onClick={() => setActiveTab('alcohol')}>
                                Алкогольная декларация
                        </button>
                        <button 
                            className={clsx(activeTab === 'supplierGoods' ? styles.active_tab : styles.inactive_tab)}
                            onClick={() => setActiveTab('supplierGoods')}>
                                Товары поставщиков
                        </button>
                        <span className={styles.filler}/>
                    </div>
                    <div className={styles.body}>
                        <GoodInfoTab />
                    </div>
                    <div className={styles.footer}>
                        <Button 
                            onClick={() => {}}
                            projectType={['popup_secondary']}>
                                Обновить
                        </Button>
                        <Button 
                            onClick={handleSubmit(saveGood)}
                            projectType={['popup_primary']}
                            >
                                Сохранить
                        </Button>
                        <Button 
                            onClick={() => {}}
                            projectType={['popup_secondary']}>
                                Выйти
                        </Button>
                    </div>
                </NewGoodContext.Provider>
            </div>
        </Popup>
    );
};

export default AddGoodPopup;