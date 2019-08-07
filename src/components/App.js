import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

function App() {
  return (
    <div style={{padding: 10}}>
      <h1 className="ui center aligned header">Want to know some curiosity??</h1>
      <div className="ui container grid">
        <div className="ui row">
          <div className="eight wide column">
            <SongList />
          </div>
          <div className="ui icon message eight wide column">
            <SongDetail />
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
