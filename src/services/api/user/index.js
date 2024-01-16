import {get,put,post,del} from "../../utils"

export const searchAllUser = async(name) => {
    return await get(`user?name=${name}`);
}

export const getUserById = async(id) => {
    return await get(`user/${id}`);
}

export const addUser = async(obj) =>{
    return await post(`user`,obj)
}

export const updateUser = async(obj) =>{
    return await put(`user`,obj);
}
export const deleteUserById = async(id)=>{
    return await del(`user/${id}`)
}

export const getTotalUser = async()=>{
    return await get(`user/count`)
}

export const getHistoryByUserId =async (userId)=>{
    return await get(`click/history/user/${userId}`);
}