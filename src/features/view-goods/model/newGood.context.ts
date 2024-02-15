import { createContext } from "react";
import { Control, UseFormRegister } from "react-hook-form";
import { CreateGoodDto } from "../types/createGood.dto";

type NewGoodContextProps = { 
    register: UseFormRegister<CreateGoodDto> | null;
    control: Control<CreateGoodDto, any, CreateGoodDto> | null;
};

export const NewGoodContext = createContext<NewGoodContextProps>({ register: null, control: null });