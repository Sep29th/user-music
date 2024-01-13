import {del, get, post, put, uploadFile} from "../../utils";

export const getSingerByNameAndNickName = async (name = "", nickName = "") => {
  return await get(`singer?name=${name}`);
};

export const addSinger = async (object) => {
  return await post(`singer`, object);
};

export const updateSinger = async (object = {}) => {
  return await put("singer", object);
};

export const deleteSingerById = async (id) => {
  return await del(`singer/${id}`);
};

export const getAllSinger = async () => {
  return await get("singer");
};

export const getAllSongBySingerId = async (singerId) => {
  return await get(`singer/${singerId}/song`);
};

export const getAllActiveSinger = async (name = "") => {
  const status = true;
  return await get(`singer?status=${status}&name=${name}`);
};

export const getAllUnActiveSinger = async (name = "") => {
  const status = false;
  return await get(`singer?status=${status}&name=${name}`);
};

export const getAlbumBySingerId = async (singerId) => {
  return await get(`singer/${singerId}/album`);
};

export const uploadAvatar = async (formData) => {
  return await uploadFile("s3/avatar", formData);
};
// top singer
export const getTopSinger = async (top) => {
  return await get(`singer/top/${top}`);
};

export const getTotalSinger = async () => {
  return await get(`singer/count`);
};

export const getFollowedSinger = async (id) => {
  return await get(`user/${id}/singer`)
}
export const getListFollower = async (id) => {
  return await get(`singer/${id}/follower`)
}
export const addFollow = async (userId, singerId) => {
  return await post(`singer/${singerId}/user/${userId}`)
}
export const removeFollow = async (userId, singerId) => {
  return await del(`singer/${singerId}/user/${userId}`)
}