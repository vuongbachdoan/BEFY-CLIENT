import { createSlice } from "@reduxjs/toolkit";

export const musicSlice = createSlice({
    name: 'MUSIC',
    initialState: {
        currentSong: null,
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
        }
    }
});

export const { setSong, setIsSongPlaying, setCurrentSongDetails } = musicSlice.actions;