import { GoodTypeEnum } from "../enums/goodType.enum";
import { GoodUnitEnum } from "../enums/goodUnit.enum";

export type TGood = TFolderItem | TGoodItem;

type TFolderItem = {
    id: string;
    name: string;
    article: string;
    code: string;
    type: GoodTypeEnum.group;
    left: string;
    unit: GoodUnitEnum;
    price: string;
    alcohol: any;
    sell_location: any;
    goods?: TGood[];
    open?: boolean;
};

type TGoodItem = {
    id: string;
    name: string;
    article: string;
    code: string;
    type: GoodTypeEnum.good;
    left: string;
    unit: GoodUnitEnum;
    price: string;
    alcohol: any;
    sell_location: any;
};