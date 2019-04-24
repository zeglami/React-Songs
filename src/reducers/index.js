import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "no scrubs", duration: "2:30" },
    { title: "Macarena", duration: "3:30" },
    { title: "all star", duration: "4:30" },
    { title: "I want it that way", duration: "5:30" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
