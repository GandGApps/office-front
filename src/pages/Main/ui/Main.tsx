import { Sidebar } from '@widgets/Sidebar';
import styles from './Main.module.scss';

function Main() {
    return(
        <div className={styles.page}>
            <Sidebar />
        </div>
    );
};

export default Main;