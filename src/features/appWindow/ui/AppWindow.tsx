import { RootState } from '@app/providers/Redux';
import styles from './AppWindow.module.scss';
import { useAppSelector } from '@hooks/useAppSelector';
import TabItem from './TabItem';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { AppWindowState, removeTab, setActiveTab } from '../model/appWindowSlice';
import { Tab } from '../types/reduxSlice';
import { SIDEBAR_SUBCATEGORIES } from '@configs/sidebarConfig';
import { ReactNode, useCallback } from 'react';

function AppWindow() {
    const dispatch = useAppDispatch();
    const {openTabs, activeTab} = useAppSelector<AppWindowState>((state: RootState) => state.AppWindow);

    const handleTabSelect = (tab: Tab) => {
        dispatch(setActiveTab(tab));
    }

    const handleRemoveTab = (title: string) => {
        dispatch(removeTab(title));
    }

    console.log('Active tab: ', activeTab);

    const renderView = useCallback((): ReactNode => {
        if (activeTab?.category_id) {
            const view = SIDEBAR_SUBCATEGORIES[activeTab.category_id].find((subcategory) => subcategory.title === activeTab.title);
            return view?.view;
        }
        return null;
    }, [activeTab]);

    return(
        <div className={styles.window}>
            <div className={styles.tabs_holder}>
                {
                    openTabs.map((tabItem: Tab, index: number) => 
                    <TabItem 
                        key={index} 
                        tab={tabItem} 
                        active={activeTab === tabItem}
                        onSelect={handleTabSelect}
                        onRemove={handleRemoveTab}/>)
                }
            </div>
            <div className={styles.view}>
                {renderView()}
            </div>
        </div>
    );
};

export default AppWindow;