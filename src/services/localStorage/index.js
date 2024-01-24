
export const getLocalStorage = (key) => {
    const result = localStorage.getItem(key);
    return result !==null ? result : "";
}

export const setLocalStorage = (key,value)=>{
    const result = localStorage.setItem(key,value);
}
export const deleteLocalStorage = (key)=>{
    key!== "" && localStorage.removeItem(key)
}

export const deleteAllLocalStorage = ()=>{
    localStorage.clear();
}