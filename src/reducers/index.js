import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: "And Justice For All", year: "1988"},
        {title: "Fade To Black", year: "1984"},
        {title: "Nothing Else Matter", year: "1991"},
        {title: "Seek n' Destroy", year: "1982"},
        {title: "For Whom The Bell Tolls", year: "1983"}
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})