import { toEnglishDate, toNepaliDate } from "../../date";
import { ICreateClass } from "../interfaces/class";

export const CreateClassDTO = (data:ICreateClass)=>({
    title: data.title,
    dob: toEnglishDate(data.dob)
});


export const GetClassDTO = (data:ICreateClass)=>({
    title: data.title,
    dob: toNepaliDate(data.dob)
});
