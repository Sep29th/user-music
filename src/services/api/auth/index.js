const Auth_Domain = "http://localhost:9000/auth/"

const post = async (path, options = {}) => {
  const response = await fetch(Auth_Domain + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  return await response.json();
};



export const loginAdmin = async (object) => {
  return post("login/admin", object);
}


export const userLogin = async (options) => {
  return await post("login/user", options);
}

export const userRegister = async (options) => {
  return await post("register/user", options);
}

export const singerRegister = async (options) => {
  return await post("register/singer", options);
}