import { Input } from '@components/Input';
import styles from './Sidebar.module.scss';
import { ArrowDown, Logo } from '@assets/index';
import React, { useCallback, useState } from 'react';
import { SIDEBAR_CATEGORIES, SIDEBAR_SUBCATEGORIES } from '@configs/sidebarConfig';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useAppSelector } from '@hooks/useAppSelector';
import { Tab } from '@features/appWindow';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { AppWindowState, addTab } from '@features/appWindow/model/appWindowSlice';
import { AuthState } from '@features/auth';

function Sidebar() {
    const [search, setSearch] = useState<string>("");
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const { user } = useAppSelector<AuthState>(state => state.AuthSlice);

    const { activeTab } = useAppSelector<AppWindowState>((state) => state.AppWindow);
    const dispatch = useAppDispatch();

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleLogout = () => {
        alert('Logout')
    }

    const handleSelectCategory = (id: string) => {
        setActiveCategory(prev => prev === id ? null : id);
    }

    const filteredCategories = useCallback(() => {
        return Object.values(SIDEBAR_CATEGORIES).filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
    }, [search]);

    const handleSelectSubcategory = (subcategory: Tab) => {
        dispatch(addTab({tab: { title: subcategory.title, id: subcategory.id}, options: { setActive: true }}));
    }

    return(
        <div className={styles.sidebar}>
            <div className={styles.sidebar_header}>
                <img src={Logo}/>
                <Input placeholder='Поиск' value={search} onChange={handleChangeSearch}/>
            </div>
            <div className={styles.sidebar_body}>
            <div className={styles.navs}>
                    {filteredCategories().map((item) => (
                        <React.Fragment key={item.id}>
                                <button 
                                    className={styles.sidebar_category}
                                    onClick={() => handleSelectCategory(item.id)}>
                                        <div className={styles.sidebar_category_left}>
                                            <img alt="icon" src={item.icon}/>
                                            {item.title}        
                                        </div>
                                        <img alt='arrow icon' src={ArrowDown} className={clsx(styles.arrow_icon, activeCategory === item.id && styles.active_arrow_icon)}/>
                                </button>
                                {
                                    (item.id === activeCategory && SIDEBAR_SUBCATEGORIES[item.id].length > 0) &&
                                    <div className={styles.subcategories}>
                                        {
                                            SIDEBAR_SUBCATEGORIES[item.id].map((subcategory, index) => (
                                                <Link 
                                                    key={index}
                                                    onClick={() => handleSelectSubcategory(subcategory)} 
                                                    className={clsx(styles.subcategory_link, activeTab?.title === subcategory.title && styles.active_subcategory_link)}
                                                    to="$">
                                                        {subcategory.title}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                }
                        </React.Fragment>
                    ))}
                </div>
                <div className={styles.body_footer}>
                    <p>Компания: ООО "Лебедь"</p>
                    <p>Пользователь: {user?.firstName} {user?.lastName}</p>
                    <Link onClick={handleLogout} to="#">Выйти</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;