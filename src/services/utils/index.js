const API_DOMAIN = "http://localhost:9000/api/v1/";

export const get = async (path) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "GET",
    // header
  });
  return await response.json();
};

export const post = async (path, options = {}) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  return await response.json();
};

export const put = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  return await response.json();
};

export const del = async (path) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "DELETE",
  });
  if (!response.ok) {
    return await response.json();
  }
};

export const uploadFile = async (path,formData)=>{
    const response = await fetch(API_DOMAIN + path,{
        method : "POST",
        body:formData
    })
    return response.json();
}
