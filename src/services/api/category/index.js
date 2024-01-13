import {get,put,post,del} from "../../utils"

export const addCategory = async (object) =>{
    return await post("category",object);
}

export const getAllCategory =async ()=>{
    return await get("category")
}

export const getCategoryById = async(id)=>{
    return await get(`category/${id}`)
}

export const delCategoryById = async(id)=>{
    return await get(`category/{id}`);
}