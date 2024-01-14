export const updateListPlaylist = (listPlaylist) => {
  return {
    type: "LIST_PLAYLIST_UPDATE",
    listPlaylist: listPlaylist
  }
}

export const addOnePlaylistToListPlaylist = (thePlaylistNeedToAdd) => {
  return {
    type: "LIST_PLAYLIST_ADD",
    thePlaylistNeedToAdd: thePlaylistNeedToAdd
  }
}

export const updateOnePlaylistOfListPlaylist = (thePlaylistNeedToUpdate) => {
  return {
    type: "LIST_PLAYLIST_UPDATE_ONE",
    thePlaylistNeedToUpdate: thePlaylistNeedToUpdate
  }
}

export const removeOnePlaylistFromListPlaylist = (thePlaylistNeedToRemove) => {
  return {
    type: "LIST_PLAYLIST_REMOVE",
    thePlaylistNeedToRemove: thePlaylistNeedToRemove
  }
}