export const handleLyric = (state = {
  statusLyric: 'off',
  sourceLyric: '',
  currentTime: 0
}, actions) => {
  switch (actions.type) {
    case "LYRIC_UPDATE_STATUS":
      return {
        ...state,
        statusLyric: actions.statusLyric
      }
    case "LYRIC_UPDATE_LYRIC_SOURCE":
      return {
        statusLyric: state.statusLyric,
        currentTime: 0,
        sourceLyric: actions.sourceLyric
      }
    case "LYRIC_UPDATE_CURRENT_TEXT":
      return {
        ...state,
        currentTime: actions.currentTime
      }
    default:
      return state;
  }
}