import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {

    if(!song){
        return <div>Please Select a song</div>
    }

    return(
        <div>
            <h3>You choose:</h3>
            <h3 className="header">{song.title}</h3>
            <p>Realeased in {song.year}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {song: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);