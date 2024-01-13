import { RootState } from '@app/providers/Redux';
import styles from './AppWindow.module.scss';
import { useAppSelector } from '@hooks/useAppSelector';
import TabItem from './TabItem';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { removeTab, setActiveTab } from '../model/appWindowSlice';
import { Tab } from '../types/reduxSlice';

function AppWindow() {
    const dispatch = useAppDispatch();
    const {openTabs, activeTab} = useAppSelector((state: RootState) => state.AppWindow);

    const handleTabSelect = (tab: Tab) => {
        dispatch(setActiveTab(tab));
    }

    const handleRemoveTab = (title: string) => {
        dispatch(removeTab(title));
    }

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

            </div>
        </div>
    );
};

export default AppWindow;