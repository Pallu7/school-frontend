import { IBase } from "./base";

export interface IClass extends IBase{
    title: string;
}

export interface ICreateClass {
    title:string;
    dob:string;
}