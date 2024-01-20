import { FilterContainer, GoodsTable } from '@features/view-goods';
import styles from './Goods.module.scss';

function Goods() {
    return(
        <div className={styles.view}>
            <div className={styles.header}>
                <h2>Товары</h2>
            </div>
            <FilterContainer />
            <div className={styles.table_container}>
                <GoodsTable />
            </div>
        </div>
    );
};

export default Goods;