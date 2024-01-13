import {get,put,post,del} from "../../utils"

export const getAllCensorByName = async(name) => {
    return await get(`censor?name=${name}`);
}

export const getCensorById = async(id) => {
    return await get(`censor/${id}`);
}

export const addCensor = async(obj) =>{
    return await post(`censor`,obj)
}

export const updateCensor = async(obj) =>{
    return await put(`censor`,obj);
}
export const deleteCensorById = async(id)=>{
    return await del(`censor/${id}`)
}

export const getTotalCensor = async()=>{
    return await get(`censor/count`)
}