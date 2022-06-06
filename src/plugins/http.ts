import axios from './axios';

export const GetRequest =(url:string,config={})=>axios.get(url,config)

export const PostRequest =(url:string,data:any,config={})=>axios.post(url,data,config)

export const PutRequest =(url:string,data:any,config={})=>axios.put(url,data,config)

export const DeleteRequest =(url:string,config={})=>axios.delete(url,config)