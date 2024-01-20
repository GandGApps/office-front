import clsx from 'clsx';
import { TableColumnEnum } from '../constants/tableColumn.enum';
import { TABLE_COLUMNS } from '../constants/tableColumns';
import styles from './GoodsTable.module.scss';
import { ColumnFilterArrowIcon, FolderIcon, GoodIcon, TableGoodIcon } from '@assets/index';
import { useAppSelector } from '@hooks/useAppSelector';
import { GoodsViewState } from '..';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { setSortColumn, setSelectedItem } from '../model/goodsSlice';
import { GoodTypeEnum } from '../enums/goodType.enum';
import { TGood } from '../types/good';
import { ReactNode } from 'react';
import { Button } from '@components/Button';

function GoodsTable() {
    const dispatch = useAppDispatch();
    const { sortColumn, goods, selectedGoods } = useAppSelector<GoodsViewState>(state => state.GoodsView);

    function handleSelectFilter(column: TableColumnEnum) {
        dispatch(setSortColumn(column));
    }

    function handleSelectItem(id: string) {
        dispatch(setSelectedItem(id));
    }

    function handleFolderClick(id: string) {
        
    }

    function renderGoods(item: TGood, index: number, depth: number): ReactNode {
        return(
            <>
                <tr 
                    key={item.id} 
                    onClick={() => item.type === GoodTypeEnum.good ? handleSelectItem(item.id) : handleFolderClick(item.id)}
                    className={clsx( index % 2 == 0 ? styles.odd_row : styles.even_row, selectedGoods[item.id] && styles.selected_row)}>
                        <td className={clsx(styles.name_column, item.type === GoodTypeEnum.group && styles.folder_name_column)}>
                            <div>
                                {
                                    item.type === GoodTypeEnum.group &&
                                    <Button onClick={() => {}} projectType={["transparent", "table_folder_arrow", item.open ? "table_folder_arrow_opened" : '']}>
                                        <ColumnFilterArrowIcon />
                                    </Button>
                                }
                                {item.type === GoodTypeEnum.good ? <TableGoodIcon /> : <FolderIcon />}
                                {' '}
                                {item.name}
                            </div>
                        </td>
                        <td className={styles.article_column}>
                            {item.article}
                        </td>
                        <td className={styles.code_column}>
                            {item.code}
                        </td>
                        <td className={styles.type_column}>
                            {item.type}
                        </td>
                        <td className={styles.left_column}>
                            {item.left}
                        </td>
                        <td className={styles.unit_column}>
                            {item.unit}
                        </td>
                        <td className={styles.price_column}>
                            {item.price}
                        </td>
                        <td className={styles.alcohol_column}>
                            {item.alcohol}
                        </td>
                        <td className={styles.sell_location_column}>
                            {item.sell_location}
                        </td>
                </tr>
                {
                    (item.type === GoodTypeEnum.group && item.open && item.goods && item.goods.length > 0) && item.goods.map((item, index) => renderGoods(item, index, depth + 1))
                }
            </>
        )
    }

    return(
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>
                        <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.NAME)}>{TABLE_COLUMNS[TableColumnEnum.NAME].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.NAME && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                    </th>
                    <th>
                        <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.ARTICLE)}>{TABLE_COLUMNS[TableColumnEnum.ARTICLE].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.ARTICLE && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                    </th>
                    <th>
                        <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.CODE)}>{TABLE_COLUMNS[TableColumnEnum.CODE].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.CODE && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                    </th>
                    <th>
                        <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.TYPE)}>{TABLE_COLUMNS[TableColumnEnum.TYPE].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.TYPE && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                    </th>
                    <th>
                        <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.LEFT)}>{TABLE_COLUMNS[TableColumnEnum.LEFT].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.LEFT && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                    </th>
                    <th>
                        <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.UNIT)}>{TABLE_COLUMNS[TableColumnEnum.UNIT].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.UNIT && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                    </th>
                    <th>
                        <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.PRICE)}>{TABLE_COLUMNS[TableColumnEnum.PRICE].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.PRICE && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                    </th>
                    <th>
                        <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.ALCOHOLE)}>{TABLE_COLUMNS[TableColumnEnum.ALCOHOLE].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.ALCOHOLE && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                    </th>
                    <th>
                        <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.SELL_LOCATION)}>{TABLE_COLUMNS[TableColumnEnum.SELL_LOCATION].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.SELL_LOCATION && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    goods.map((item, index) => renderGoods(item, index, 0))
                }
            </tbody>
        </table>
    );
};

export default GoodsTable;