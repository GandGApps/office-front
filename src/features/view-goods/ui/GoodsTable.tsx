import clsx from 'clsx';
import { TableColumnEnum } from '../constants/tableColumn.enum';
import { TABLE_COLUMNS } from '../constants/tableColumns';
import styles from './GoodsTable.module.scss';
import { ColumnFilterArrowIcon, FolderIcon, TableGoodIcon } from '@assets/index';
import { useAppSelector } from '@hooks/useAppSelector';
import { GoodsViewState } from '..';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { setSortColumn, setSelectedItem, setFolderOpenState } from '../model/goodsSlice';
import { GoodTypeEnum } from '../enums/goodType.enum';
import { TGood } from '../types/good';
import { Fragment, ReactNode, memo } from 'react';
import { Button } from '@components/Button';
import useGoodsTableResize from '../hooks/useGoodsTableResize';

function GoodsTable() {
    const dispatch = useAppDispatch();
    const { sortColumn, goods, selectedGoods } = useAppSelector<GoodsViewState>(state => state.GoodsView);
    const {onMouseDown, tableRef, columnWidths} = useGoodsTableResize();

    function handleSelectFilter(column: TableColumnEnum) {
        dispatch(setSortColumn(column));
    }

    function handleSelectItem(id: string) {
        dispatch(setSelectedItem(id));
    }

    function handleFolderClick(folderQueue: string[], openFolderId: string) {
        dispatch(setFolderOpenState({folderQueue, folderId: openFolderId}));
    }

    function renderGoods(item: TGood, index: number, folderQueue: string[]): ReactNode {
        return(
            <Fragment key={item.id}>
                <tr 
                    onClick={() => handleSelectItem(item.id)}
                    className={clsx( index % 2 == 0 ? styles.odd_row : styles.even_row, selectedGoods[item.id] && styles.selected_row)}>
                        <td 
                            className={clsx(styles.name_column, item.type === GoodTypeEnum.group && styles.folder_name_column)}>
                                <div style={{width: (columnWidths.name - 20)}}>
                                    {
                                        item.type === GoodTypeEnum.group
                                        ?
                                        <Button 
                                            style={{ paddingLeft: 20 * (folderQueue.length - 1)}}
                                            onClick={(e) => {e.stopPropagation(); handleFolderClick(folderQueue, item.id)}}
                                            projectType={["transparent", "table_folder"]}>
                                                <span className={(clsx(item.open && styles.table_folder_opened))}>
                                                    <ColumnFilterArrowIcon />
                                                </span>
                                                {' '}
                                                <FolderIcon />
                                                {' '}
                                                {item.name}
                                        </Button>
                                        :
                                        <>
                                            {item.type === GoodTypeEnum.good ? <TableGoodIcon /> : <FolderIcon />}
                                                {' '}
                                            {item.name}
                                        </>
                                    }
                                </div>
                        </td>
                        <td className={styles.article_column}
                            style={{minWidth: columnWidths.article}}>
                            {item.article}
                        </td>
                        <td className={styles.code_column}
                            style={{minWidth: columnWidths.code}}>
                            {item.code}
                        </td>
                        <td className={styles.type_column}
                            style={{minWidth: columnWidths.type}}>
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
                    (item.type === GoodTypeEnum.group && item.open && item.goods && item.goods.length > 0) && item.goods.map((item, index) => renderGoods(item, index, [...folderQueue, item.id]))
                }
            </Fragment>
        )
    }

    return(
        <div className={styles.table_container}>
            <table className={styles.table} ref={tableRef}>
                <thead>
                    <tr>
                        <th style={{minWidth: columnWidths.name, maxWidth: columnWidths.name, width: columnWidths.name}}>
                            <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.NAME)}>{TABLE_COLUMNS[TableColumnEnum.NAME].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.NAME && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                            <span className={styles.resizer} onMouseDown={(e) => onMouseDown(e, "name")}/>
                        </th>
                        <th style={{minWidth: columnWidths.article, maxWidth: columnWidths.article, width: columnWidths.article}}>
                            <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.ARTICLE)}>{TABLE_COLUMNS[TableColumnEnum.ARTICLE].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.ARTICLE && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                            <span className={styles.resizer} onMouseDown={(e) => onMouseDown(e, "article")}/>
                        </th>
                        <th style={{minWidth: columnWidths.code, maxWidth: columnWidths.code, width: columnWidths.code}}>
                            <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.CODE)}>{TABLE_COLUMNS[TableColumnEnum.CODE].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.CODE && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                            <span className={styles.resizer} onMouseDown={(e) => onMouseDown(e, "code")}/>
                        </th>
                        <th style={{minWidth: columnWidths.type, maxWidth: columnWidths.type, width: columnWidths.type}}>
                            <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.TYPE)}>{TABLE_COLUMNS[TableColumnEnum.TYPE].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.TYPE && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                            <span className={styles.resizer} onMouseDown={(e) => onMouseDown(e, "type")}/>
                        </th>
                        <th style={{minWidth: columnWidths.left, maxWidth: columnWidths.left, width: columnWidths.left}}>
                            <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.LEFT)}>{TABLE_COLUMNS[TableColumnEnum.LEFT].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.LEFT && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                            <span className={styles.resizer} onMouseDown={(e) => onMouseDown(e, "left")}/>
                        </th>
                        <th style={{minWidth: columnWidths.unit, maxWidth: columnWidths.unit, width: columnWidths.unit}}>
                            <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.UNIT)}>{TABLE_COLUMNS[TableColumnEnum.UNIT].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.UNIT && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                            <span className={styles.resizer} onMouseDown={(e) => onMouseDown(e, "unit")}/>
                        </th>
                        <th style={{minWidth: columnWidths.price, maxWidth: columnWidths.price, width: columnWidths.price}}>
                            <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.PRICE)}>{TABLE_COLUMNS[TableColumnEnum.PRICE].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.PRICE && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                            <span className={styles.resizer} onMouseDown={(e) => onMouseDown(e, "price")}/>
                        </th>
                        <th style={{minWidth: columnWidths.alcohol, maxWidth: columnWidths.alcohol, width: columnWidths.alcohol}}>
                            <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.ALCOHOLE)}>{TABLE_COLUMNS[TableColumnEnum.ALCOHOLE].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.ALCOHOLE && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                            <span className={styles.resizer} onMouseDown={(e) => onMouseDown(e, "alcohol")}/>
                        </th>
                        <th style={{minWidth: columnWidths.sell_location, maxWidth: columnWidths.sell_location, width: columnWidths.sell_location}}>
                            <button type="button" onClick={() => handleSelectFilter(TableColumnEnum.SELL_LOCATION)}>{TABLE_COLUMNS[TableColumnEnum.SELL_LOCATION].title}<span className={clsx(styles.inactive_filter, sortColumn === TableColumnEnum.SELL_LOCATION && styles.active_filter)}><ColumnFilterArrowIcon /></span></button>
                            <span className={styles.resizer} onMouseDown={(e) => onMouseDown(e, "sell_location")}/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        goods.map((item, index) => renderGoods(item, index, [item.id]))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default memo(GoodsTable);