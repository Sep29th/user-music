export const updateFavoritePlaylist = (favoritePlaylist) => {
  return {
    type: "FAVORITE_PLAYLIST_UPDATE",
    favoritePlaylist: favoritePlaylist
  }
}

export const addOneSongToFavoritePlaylist = (theSongNeedToAdd) => {
  return {
    type: "FAVORITE_PLAYLIST_ADD",
    theSongNeedToAdd: theSongNeedToAdd
  }
}

export const removeOneSongFromFavoritePlaylist = (theSongNeedToRemove) => {
  return {
    type: "FAVORITE_PLAYLIST_REMOVE",
    theSongNeedToRemove: theSongNeedToRemove
  }
}