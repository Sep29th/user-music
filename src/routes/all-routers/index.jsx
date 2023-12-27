import {configRouters} from "../config-router/index.jsx";
import {useRoutes} from "react-router-dom";

const AllRouters = () => {
  return useRoutes(configRouters);
}

export default AllRouters;