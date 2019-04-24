import React from "react";
import SonglList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SonglList />
        </div>
        <SongDetail />
      </div>
    </div>
  );
};

export default App;
