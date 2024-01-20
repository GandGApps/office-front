import { GoodTypeEnum } from "../enums/goodType.enum";

export type TFolder = {
    id: string;
    name: string;
    article: string;
    code: string;
    type: GoodTypeEnum.group;
}