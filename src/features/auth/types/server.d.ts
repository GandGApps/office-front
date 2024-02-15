import { ProtocolEnum } from "../enums/protocol.enum";

export type TServer = {
    id: string;
    name: string;
    version: string;
    pc: string;
    protocol: ProtocolEnum;
    address: string;
    port: string | number;
    path: string;   
}

export type NewServerDto = {
    address: string;
    port: string;
    path: string;
    protocol: ProtocolEnum | null;
}