import { DeleteRequest, GetRequest, PostRequest, PutRequest } from "../plugins/http"

export const APIGetAllClasses = ()=>GetRequest('classes');

export const APIPostClass = (data:any)=> PostRequest('classes',data);

export const APIPutClass = (id:number,data:any)=> PutRequest(`classes/${id}`, data);

export const APIDeleteClass = (id:number) => DeleteRequest(`classes/${id}`); 