export const handleSongQueue = (state = {songQueue: []}, actions) => {
  switch (actions.type) {
    case "SONG_QUEUE_INIT_INSTANCE":
      return {
        songQueue: [],
        audioInstance: actions.audioInstance
      }
    case "SONG_QUEUE_CURRENT_PLAY":
      return {
        ...state,
        audioInfo: actions.audioInfo
      }
    case "SONG_QUEUE_PLAY_ONE_SONG_NOW":
      return {
        songQueue: [{
          ...actions.theSongNeedToPlay,
          musicSrc: actions.theSongNeedToPlay.fileSound,
          cover: actions.theSongNeedToPlay.avatar ? actions.theSongNeedToPlay.avatar : "https://play-lh.googleusercontent.com/D9X7m5dTNzjeSPxBqzh1RwrZLXJDFTpht9-8W8RJtiaOAlFxNvL5MnSDRxoDnQRYhz0",
          singer: actions.theSongNeedToPlay.singers.map(i => i.name).join(", "),
          lyric: actions.theSongNeedToPlay.fileLyric
        }],
        clearPriorAudioLists: true
      }
    case "SONG_QUEUE_PLAY_LIST_SONG_NOW":
      return {
        songQueue: actions.theListNeedToPlay.map(i => {
          return {
            ...i,
            musicSrc: i.fileSound,
            cover: i.avatar ? i.avatar : "https://play-lh.googleusercontent.com/D9X7m5dTNzjeSPxBqzh1RwrZLXJDFTpht9-8W8RJtiaOAlFxNvL5MnSDRxoDnQRYhz0",
            singer: i.singers.map(i => i.name).join(", "),
            lyric: i.fileLyric
          }
        }),
        clearPriorAudioLists: true
      }
    case "SONG_QUEUE_ADD_ONE_SONG":
      if (state.songQueue.findIndex(item => item.id === actions.theSongNeedToAdd.id) !== -1) {
        return {
          songQueue: [...state.songQueue],
          clearPriorAudioLists: false
        };
      } else return {
        songQueue: [...state.songQueue, {
          ...actions.theSongNeedToAdd,
          musicSrc: actions.theSongNeedToAdd.fileSound,
          cover: actions.theSongNeedToAdd.avatar ? actions.theSongNeedToAdd.avatar : "https://play-lh.googleusercontent.com/D9X7m5dTNzjeSPxBqzh1RwrZLXJDFTpht9-8W8RJtiaOAlFxNvL5MnSDRxoDnQRYhz0",
          singer: actions.theSongNeedToAdd.singers.map(i => i.name).join(", "),
          lyric: actions.theSongNeedToAdd.fileLyric
        }],
        clearPriorAudioLists: false
      };
    case "SONG_QUEUE_ADD_SONG_LIST":
      return {
        songQueue: [...state.songQueue, ...(actions.theListNeedToAdd.map(item => {
          return {
            ...item,
            musicSrc: item.fileSound,
            cover: item.avatar ? item.avatar : "https://play-lh.googleusercontent.com/D9X7m5dTNzjeSPxBqzh1RwrZLXJDFTpht9-8W8RJtiaOAlFxNvL5MnSDRxoDnQRYhz0",
            singer: item.singers.map(i => i.name).join(", "),
            lyric: item.fileLyric
          }
        }))],
        clearPriorAudioLists: false
      }
    case "SONG_QUEUE_CLEAR":
      return {
        songQueue: [],
        clearPriorAudioLists: true
      };
    case "SONG_QUEUE_REMOVE_ONE_SONG":
      return state.splice(state.findIndex(item => item.id === actions.theSongNeedToRemove.id), 1);
    default:
      return state;
  }
}