import { TFile } from "shared/types";
import { GoodTypeEnum } from "../enums/goodType.enum";
import { GoodUnitEnum } from "../enums/goodUnit.enum";
import { FileTypeEnum } from "@enums/fileType.enum";

export const MOCK_FILES: Map<string, TFile> = new Map([
    ['Группа', {
        type: FileTypeEnum.group,
        created_date: new Date().toISOString(),
        update_date: new Date().toISOString(),
        files: new Map([
            [
                'Группа', 
                {
                    type: FileTypeEnum.group,
                    created_date: new Date().toISOString(),
                    update_date: new Date().toISOString(),
                    files: new Map(),
                    expanded: false,
                    name: 'Группа',
                    path: '/Группа/',
                    selected: false,
                    groupDeteails: {
                        article: "45654",
                        code: "34436"
                    }
                }
            ]
        ]),
        expanded: false,
        name: 'Группа',
        path: '/',
        selected: false,
        groupDeteails: {
            article: "45654",
            code: "34436"
        }
    }],
    ['Кетчуп хайнц томат', {
        type: FileTypeEnum.good,
        created_date: new Date().toISOString(),
        update_date: new Date().toISOString(),
        name: 'Кетчуп хайнц томат',
        path: '/',
        selected: false,
        details: {
            article: "45654",
            code: "34436",
            left: "0,000",
            unit: GoodUnitEnum.price,
            price: "0,00",
            alcohol: null,
            sell_location: null
        }
    }]
]);
export const MOCK_GOODS = [
    {id: "1", name: "Группа", article: "45654", code: "34436", type: GoodTypeEnum.group, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null, goods: [
        {id: "101", name: "Группа", article: "45654", code: "34436", type: GoodTypeEnum.group, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null, goods: [
            {id: "201", name: "Группа", article: "45654", code: "34436", type: GoodTypeEnum.group, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null, goods: []},
        ]},
    ]},
    {id: "2", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "3", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "4", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "5", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "6", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "7", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "8", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "9", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "10", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "11", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "12", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "13", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "14", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "15", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "16", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "17", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "18", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "19", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "20", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "21", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "22", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "23", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
    {id: "24", name: "Кетчуп хайнц томат", article: "45654", code: "34436", type: GoodTypeEnum.good, left: "0,000", unit: GoodUnitEnum.price, price: "0,00", alcohol: null, sell_location: null},
]