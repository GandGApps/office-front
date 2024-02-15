import clsx from 'clsx';
import { TableColumnEnum } from '../constants/tableColumn.enum';
import { TABLE_COLUMNS } from '../constants/tableColumns';
import styles from '../styles/GoodsTable.module.scss';
import { ColumnFilterArrowIcon, FolderIcon, TableGoodIcon } from '@assets/index';
import { useAppSelector } from '@hooks/useAppSelector';
import { GoodsViewState } from '..';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { setSortColumn, setSelectedItem, setFolderOpenState } from '../model/goodsSlice';
import { Fragment, ReactNode, memo, useMemo } from 'react';
import { Button } from '@components/Button';
import useGoodsTableResize from '../hooks/useGoodsTableResize';
import useTableContextMenu from '../hooks/useTableContextMenu';
import { ContextMenu } from '@components/ContextMenu';
import { TFile } from 'shared/types';
import { FileTypeEnum } from '@enums/fileType.enum';

function GoodsTable() {
    const dispatch = useAppDispatch();
    const { sortColumn, goods, popupState, files } = useAppSelector<GoodsViewState>(state => state.GoodsView);
    const {onMouseDown, tableRef, columnWidths} = useGoodsTableResize();
    const {onContextMenu, openContextMenu, points} = useTableContextMenu();

    function handleSelectFilter(column: TableColumnEnum) {
        dispatch(setSortColumn(column));
    }

    /**
     * Selects item
     * @param path path of file
     * @param name name of file
     */
    function selectItem(path: string, name: string) {
        dispatch(setSelectedItem({path, name}));
    }

    /**
     * Switches group expanded state
     * @param path path to the file
     * @param name name of file
     */
    function handleFolderClick(path: string, name: string) {
        dispatch(setFolderOpenState({path, name}));
    }

    const contextMenuData = useMemo(() => [
        [
            {label: "+ Добавить", onClick: () => { console.log('Add event')}},
            {label: "+ Добавить группу", onClick: () => { console.log('Add group event')}},
        ],
        [
            {label: "Копировать в...", onClick: () => { console.log('Add event')}},
            {label: "Переместить в...", onClick: () => { console.log('Add group event')}},
            {label: "Редактировать", onClick: () => { console.log('Add group event')}},
            {label: "Удалить", onClick: () => { console.log('Add group event')}},
        ],
        [
            {label: "Экспорт в Excel", onClick: () => { console.log('Add event')}},
            {label: "Раскрыть все", onClick: () => { console.log('Add group event')}},
            {label: "Свернуть все", onClick: () => { console.log('Add group event')}},
        ],
    ], []);

    function renderGoods(item: TFile, index: number): ReactNode {
        return(
            <Fragment key={item.path + item.name}>
                <tr 
                    onClick={() => selectItem(item.path, item.name)}
                    onContextMenu={(e) => onContextMenu(e, item)}
                    className={clsx( index % 2 == 0 ? styles.odd_row : styles.even_row, item.selected && styles.selected_row)}>
                        <td 
                            className={clsx(styles.name_column, item.type === FileTypeEnum.group && styles.folder_name_column)}>
                                <div style={{width: (columnWidths.name - 20)}}>
                                    {
                                        item.type === FileTypeEnum.group
                                        ?
                                        <Button 
                                            style={{ paddingLeft: 20 * (item.path.split('/').filter(letter => letter !== '').length)}}
                                            onClick={(e) => {e.stopPropagation(); handleFolderClick(item.path, item.name)}}
                                            projectType={["transparent", "table_folder"]}>
                                                <span className={(clsx(item.expanded && styles.table_folder_opened))}>
                                                    <ColumnFilterArrowIcon />
                                                </span>
                                                {' '}
                                                <FolderIcon />
                                                {' '}
                                                {item.name}
                                        </Button>
                                        :
                                        <>
                                            {item.type === FileTypeEnum.good ? <TableGoodIcon /> : <FolderIcon />}
                                                {' '}
                                            {item.name}
                                        </>
                                    }
                                </div>
                        </td>
                        <td className={styles.article_column}
                            style={{minWidth: columnWidths.article}}>
                            {item.type === FileTypeEnum.good ? item.details.article : item.groupDeteails.article}
                        </td>
                        <td className={styles.code_column}
                            style={{minWidth: columnWidths.code}}>
                            {item.type === FileTypeEnum.good ? item.details.code : item.groupDeteails.code}
                        </td>
                        <td className={styles.type_column}
                            style={{minWidth: columnWidths.type}}>
                            {item.type}
                        </td>
                        <td className={styles.left_column}>
                            {item.type === FileTypeEnum.good && item.details.left}
                        </td>
                        <td className={styles.unit_column}>
                            {item.type === FileTypeEnum.good && item.details.unit}
                        </td>
                        <td className={styles.price_column}>
                            {item.type === FileTypeEnum.good && item.details.price}
                        </td>
                        <td className={styles.alcohol_column}>
                            {item.type === FileTypeEnum.good && item.details.alcohol}
                        </td>
                        <td className={styles.sell_location_column}>
                            {item.type === FileTypeEnum.good && item.details.sell_location}
                        </td>
                </tr>
                {
                    (item.type === FileTypeEnum.group && item.expanded && item.files && item.files.size > 0) && Array.from(item.files.values()).map((item, index) => renderGoods(item, index))
                }
            </Fragment>
        )
    }

    return(
        <div className={styles.table_container}>
            {
                openContextMenu &&
                <ContextMenu top={points.y} left={points.x} data={contextMenuData}/>
            }
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
                        Array.from(files.values()).map((item, index) => renderGoods(item, index))
                        // files.values().map((item, index) => renderGoods(item, index, [item.id]))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default memo(GoodsTable);