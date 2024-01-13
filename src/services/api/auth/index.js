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



export const loginAdmin = async (object)=>{
    return post("login/admin",object);
}