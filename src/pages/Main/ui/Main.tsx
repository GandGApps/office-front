import { Sidebar } from '@widgets/Sidebar';
import styles from './Main.module.scss';
import { AppWindow } from '@features/appWindow';

function Main() {
    return(
        <div className={styles.page}>
            <Sidebar />
            <AppWindow />
        </div>
    );
};

export default Main;