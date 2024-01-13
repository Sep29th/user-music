export const initInstance = (audioInstance) => {
  return {
    type: "SONG_QUEUE_INIT_INSTANCE",
    audioInstance: audioInstance
  }
}

export const resetAudioCurrentPlay = (audioInfo) => {
  return {
    type: "SONG_QUEUE_CURRENT_PLAY",
    audioInfo: audioInfo
  }
}

export const playOneSongNow = (theSongNeedToPlay) => {
  return {
    type: "SONG_QUEUE_PLAY_ONE_SONG_NOW",
    theSongNeedToPlay: theSongNeedToPlay
  }
}

export const playListSongNow = (theListNeedToPlay) => {
  return {
    type: "SONG_QUEUE_PLAY_LIST_SONG_NOW",
    theListNeedToPlay: theListNeedToPlay
  }
}

export const addOneSong = (theSongNeedToAdd) => {
  return {
    type: "SONG_QUEUE_ADD_ONE_SONG",
    theSongNeedToAdd: theSongNeedToAdd
  }
}

export const addSongList = (theListNeedToAdd) => {
  return {
    type: "SONG_QUEUE_ADD_SONG_LIST",
    theListNeedToAdd: theListNeedToAdd
  }
}

export const clearQueue = () => {
  return {
    type: "SONG_QUEUE_CLEAR"
  }
}

export const removeOneSong = (theSongNeedToRemove) => {
  return {
    type: "SONG_QUEUE_REMOVE_ONE_SONG",
    theSongNeedToRemove: theSongNeedToRemove
  }
}