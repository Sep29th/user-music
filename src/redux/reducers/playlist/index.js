export const handlePlaylist = (state = [], actions) => {
  switch (actions.type) {
    case "LIST_PLAYLIST_UPDATE":
      return actions.listPlaylist;
    case "LIST_PLAYLIST_ADD":
      return [...state, actions.thePlaylistNeedToAdd];
    case "LIST_PLAYLIST_UPDATE_ONE":
      return state.map(i => {
        if (i.id === actions.thePlaylistNeedToUpdate.id) return actions.thePlaylistNeedToUpdate;
        else return i;
      });
    case "LIST_PLAYLIST_REMOVE":
      return state.filter(i => i.id !== actions.thePlaylistNeedToRemove.id);
    default:
      return state;
  }
}