import { TFolderItem, TGood } from "../types/good";
import { GoodTypeEnum } from "../enums/goodType.enum";
import { TColumnWidths } from "../types/columnWidths";
import { GoodsViewLocalStorageKeys } from "../enums/viewLocalStorageKeys.enum";
import { getLocalStorage, setLocalStorage } from "@utils/localStorage-service";

/**
 * Updates folder by folder queue
 * @param state root state of reducer
 * @param folderQueue parent folders
 * @param folderId folder id to update
 * @param key key of folder to update
 * @param value value to set
 */
export function updateFolderOpenState(goods: TGood[], folderQueue: string[], folderId: string, key: keyof TGood) {
    if (folderQueue.length === 1) {
        return goods.map((good) => good.id === folderQueue.shift() ? {...good, [key]: (good[key] === undefined ? true : !good[key])} : good);
    }
    const foundFolderIndex: number = goods.findIndex(good => good.id === folderQueue.shift());
    if (foundFolderIndex >= 0 && goods[foundFolderIndex].type === GoodTypeEnum.group) {
        const newGoodsArray: TGood[] = updateFolderOpenState((goods[foundFolderIndex] as TFolderItem).goods || [], folderQueue, folderId, key);
        (goods[foundFolderIndex] as TFolderItem).goods = newGoodsArray;
        return goods;
    }
    return goods;
}

/**
 * Get column widths of table
 * @returns object with column widths of table
 */
export function getColumnWidths(): TColumnWidths {
    let tableColumns: TColumnWidths | null = getLocalStorage(GoodsViewLocalStorageKeys.COLUMN_WIDTHS);
    if (!tableColumns) {
        tableColumns = {
            name: 175,
            article: 90,
            code: 80,
            type: 90,
            left: 130,
            unit: 110,
            price: 115,
            alcohol: 160,
            sell_location: 650
        };
        setLocalStorage(GoodsViewLocalStorageKeys.COLUMN_WIDTHS, tableColumns);
        return tableColumns;
    }
    return tableColumns;
}