import { get, put, del, post } from "../../utils";

// them cai creator
export const savePlaylistForUser = async (object) => {
  const playlist = {
    ...object,
    role: "USER",
  };
  return await post("playlist", playlist);
};

export const savePlaylistForMainPage = async (object) => {
  const playlist = {
    ...object,
    role: "MAINPAGE",
  };
  return await post("playlist", playlist);
};
export const getFavoritePlaylistByUserId = async (userId) => {
  return await get(`user/${userId}/playlist/favorite`);
};

export const getAllPlaylistByUserId = async (userId) => {
  return await get(`user/${userId}/playlist`);
};

// main page user/ censor
export const getAllMainpagePlayList = async () => {
  return await get("playlist/mainpage");
};
// search for user
export const searchAllPlaylistByNameForUser = async (name) => {
  return await get(`user/playlist?name=${name}`);
};

export const updatePlaylist = async (options) => {
  return await put("playlist", options);
};

export const deletePlaylist = async (playlistId) => {
  return await del(`playlist/${playlistId}`);
};

// get all  Song
export const getAllSongByPlaylistId = async (playlistId) => {
  return await get(`playlist/${playlistId}/song`);
};

export const addSongToPlaylist = async (playlistId, songId) => {
  return await post(`playlist/${playlistId}/song/${songId}`);
};
// add array to playlist
export const addSongsToPlaylist = async (playlistId, object) => {
  return await post(`playlist/${playlistId}/song`, object);
};

export const removeSongFromPlaylist = async (playlistId, songId) => {
  return await del(`playlist/${playlistId}/song/${songId}`);
};

export const getTotalPlaylist = async () => {
  return await get(`playlist/count`);
};


export const addSongToFavoritePlaylist = async (userId,songId) => {
  return await post(`user/${userId}/playlist/favorite/${songId}`,{});
};

export const removeSongToFavoritePlaylist = async (userId,songId)=>{
  return await del(`user/${userId}/playlist/favorite/${songId}`)
}

export const saveFavoritePlaylist = async (object)=>{
  object = {
    ...object,
    role : "FAVORITE"
  }
  return await post(`playlist`,object);
}