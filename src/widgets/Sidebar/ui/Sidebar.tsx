import { Input } from '@components/Input';
import styles from './Sidebar.module.scss';
import { ArrowDown, Logo } from '@assets/index';
import React, { useCallback, useState } from 'react';
import { SIDEBAR_CATEGORIES, SIDEBAR_SUBCATEGORIES } from '@configs/sidebarConfig';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

function Sidebar() {
    const firstName = "Сергей";
    const lastName = "Обама";
    const [search, setSearch] = useState<string>("");
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [activeSubcategory, setActiveSubcategory] = useState<[string | null, number]>([null, -1]);

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
        return SIDEBAR_CATEGORIES.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
    }, [search]);

    return(
        <div className={styles.sidebar}>
            <div className={styles.sidebar_header}>
                <img src={Logo}/>
                <Input placeholder='Поиск' value={search} onChange={handleChangeSearch}/>
            </div>
            <div className={styles.sidebar_body}>
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
                                            onClick={() => setActiveSubcategory([item.id, index])} 
                                            className={clsx(styles.subcategory_link, (index === activeSubcategory[1] && item.id === activeSubcategory[0]) && styles.active_subcategory_link)}
                                            to="$">
                                                {subcategory.title}
                                        </Link>
                                    ))
                                }
                            </div>
                        }
                    </React.Fragment>
                ))}
                <div className={styles.body_footer}>
                    <p>Компания: ООО "Лебедь"</p>
                    <p>Пользователь: {firstName} {lastName}</p>
                    <Link onClick={handleLogout} to="#">Выйти</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;