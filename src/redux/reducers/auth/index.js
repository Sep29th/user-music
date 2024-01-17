export const handleAuth = (state = {}, actions) => {
  switch (actions.type) {
    case "USER_LOGIN":
      return {
        ...actions.info
      }
    case "USER_LOGOUT":
      return {}
    default:
      return state;
  }
}