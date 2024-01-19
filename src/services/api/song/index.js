import { del, get, post, put, uploadFile } from "../../utils";

export const getAllSong = async () => {
  return await get("song");
};

export const getAllPrivateSong = async (name = "") => {
  const status = 0;
  return await get(`song?status=${status}&name=${name}`);
};

export const getAllPendingSong = async (name = "") => {
  const status = 1;
  return await get(`song?status=${status}&name=${name}`);
};

export const getSongById = async (id) => {
  return await get(`song/${id}`);
};

export const getAllActiveSong = async (name = "") => {
  const status = 2;

  return await get(`song?status=${status}&name=${name}`);
};
export const getSongByName = async (name = "") => {
  return await get(`song?name=${name}`);
};

export const saveSong = async (options) => {
  return await post("song", options);
};

export const deleteSongById = async (songId = "") => {
  return await del("song/" + songId);
};

export const updateSong = async (object) => {
  return await put("song", object);
};

// la singer hoac admin
export const getAllSongByCreatorId = async (creatorId) => {
  return await get(`creator/${creatorId}/song`);
};

export const getAllSongBySingerId = async (singerId) => {
  return await get(`singer/${singerId}/song`);
};

export const uploadFileSound = async (formData) => {
  return await uploadFile("s3", formData);
};

export const getSongPage = async (name = "", pageNo = 1, pageSize = 10) => {
  return await get(`song/page?name=${name}&pageNo=${pageNo}&pageSize=${10}`);
};

export const getTotalSong = async () => {
  return await get(`song/count`);
};

export const getTopSongWithMostListensByCategory = async () => {
  return await get(`song/topByCategory`);
};
