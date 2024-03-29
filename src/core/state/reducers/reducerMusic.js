import { createSlice } from "@reduxjs/toolkit";

export const musicSlice = createSlice({
    name: 'MUSIC',
    initialState: {
        currentPlaylist: [],
        currentSong: null,
        currentSongIndex: null,
        currentSongDetails: {},
        isSongPlaying: false
    },
    reducers: {
        setSong: (state, action) => {
            state.currentSong = action.payload;
        },
        setIsSongPlaying: (state, action) => {
            state.isSongPlaying = action.payload;
        },
        setCurrentSongDetails: (state, action) => {
            state.currentSongDetails = action.payload;
        },
        setCurrentPlaylist: (state, action) => {
            state.currentPlaylist = action.payload;
        },
        setCurrentSongIndex: (state, action) => {
            state.currentSongIndex = action.payload;
        }
    }
});

export const { setSong, setIsSongPlaying, setCurrentSongDetails, setCurrentPlaylist, setCurrentSongIndex } = musicSlice.actions;