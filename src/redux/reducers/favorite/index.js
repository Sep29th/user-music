export const handleFavorite = (state = [], actions) => {
  switch (actions.type) {
    case "FAVORITE_PLAYLIST_UPDATE":
      return actions.favoritePlaylist;
    case "FAVORITE_PLAYLIST_ADD":
      return [...state, actions.theSongNeedToAdd];
    case "FAVORITE_PLAYLIST_REMOVE":
      return state.filter(i => i.id !== actions.theSongNeedToRemove.id);
    default:
      return state;
  }
}