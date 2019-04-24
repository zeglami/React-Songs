import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>slect a song</div>;
  }
  return (
    <div>
      <h3>detail for:</h3>

      <p> title:{song.title}</p>
      <p> duration : {song.duration}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
