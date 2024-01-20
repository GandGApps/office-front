import { TableColumnEnum } from "./tableColumn.enum";

export const TABLE_COLUMNS = {
    [TableColumnEnum.NAME]: {
        title: 'Название'
    },
    [TableColumnEnum.ARTICLE]: {
        title: 'Артикул'
    },
    [TableColumnEnum.CODE]: {
        title: 'Код'
    },
    [TableColumnEnum.TYPE]: {
        title: 'Тип'
    },
    [TableColumnEnum.LEFT]: {
        title: 'Остаток'
    },
    [TableColumnEnum.UNIT]: {
        title: 'Ед. измер.'
    },
    [TableColumnEnum.PRICE]: {
        title: 'Цена, р.'
    },
    [TableColumnEnum.ALCOHOLE]: {
        title: 'Алкоголь%'
    },
    [TableColumnEnum.SELL_LOCATION]: {
        title: 'Место продаж'
    },
}