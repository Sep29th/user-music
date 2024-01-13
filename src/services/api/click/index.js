import {post,get} from "../../utils"

export const saveClick = async(object)=>{
    return await post("click",object);
}

export const countClickByDay = async ()=>{
    return await get("click/day");
}

export const countClickByMonth =async ()=>{
    return await get("click/month");
}
export const countClickByWeek = async()=>{
    return await get("click/week");
}

export const countClickAll =async ()=>{
    return await get("click/all");
}

export const getTotalClick =async ()=>{
    return await get("click/count");
}


/// get top song