export const lyricStatusChange = (statusLyric) => {
  return {
    type: "LYRIC_UPDATE_STATUS",
    statusLyric: statusLyric
  }
}

export const changeSourceLyric = (sourceLyric) => {
  return {
    type: "LYRIC_UPDATE_LYRIC_SOURCE",
    sourceLyric: sourceLyric
  }
}

export const changeCurrentLyricDisplay = (currentTime) => {
  return {
    type: "LYRIC_UPDATE_CURRENT_TEXT",
    currentTime: currentTime
  }
}