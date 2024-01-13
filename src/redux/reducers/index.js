import {combineReducers} from "redux";
import {handleAuth} from "./auth/index.js";
import {handleSongQueue} from "./songQueue/index.js";

export const allReducer = combineReducers({
  auth: handleAuth,
  songQueue: handleSongQueue
});