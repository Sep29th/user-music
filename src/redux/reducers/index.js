import {combineReducers} from "redux";
import {handleAuth} from "./auth/index.js";
import {handleSongQueue} from "./songQueue/index.js";
import {handleFavorite} from "./favorite/index.js";
import {handlePlaylist} from "./playlist/index.js";
import {handleLyric} from "./lyric/index.js";

export const allReducer = combineReducers({
  auth: handleAuth,
  songQueue: handleSongQueue,
  favorite: handleFavorite,
  playlist: handlePlaylist,
  lyric: handleLyric
});