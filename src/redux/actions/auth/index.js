export const login = (info) => {
  return {
    type: "USER_LOGIN",
    info: info
  }
}

export const logout = () => {
  return {
    type: "USER_LOGOUT",
  }
}