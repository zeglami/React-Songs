import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "bad guy", duration: "2:30" },
    { title: "aicha", duration: "3:30" },
    { title: "Unbroken ", duration: "4:30" },
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
