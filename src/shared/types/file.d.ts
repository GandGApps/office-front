import { GoodUnitEnum } from "@features/view-goods/enums/goodUnit.enum";
import { FileTypeEnum } from "shared/enums/fileType.enum";

export type TFile = (TFolder | TGood) & TFileDetails;

type TFileDetails = {
    path: string;
    created_date: string;
    update_date: string;
    selected: boolean;
}

export type TFolder = {
    type: FileTypeEnum.group;
    name: string;
    expanded: boolean;
    files: Map<string, TFile>;
    groupDeteails: {
        article: string;
        code: string;
    }
};

export type TGood = {
    type: FileTypeEnum.good,
    name: string;
    details: {
        article: string,
        code: string,
        left: string,
        unit: GoodUnitEnum,
        price: string,
        alcohol: null | string,
        sell_location: null | string
    }; // [TODO] finish
};