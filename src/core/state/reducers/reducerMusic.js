import { createSlice } from "@reduxjs/toolkit";

export const musicSlice = createSlice({
    name: 'MUSIC',
    initialState: {
        currentSong: null,
        isSongPlaying: false
    },
    reducers: {
        setSong: (state, action) => {
            state.currentSong = action.payload;
        },
        setIsSongPlaying: (state, action) => {
            state.isSongPlaying = action.payload;
        }
    }
});

export const { setSong, setIsSongPlaying } = musicSlice.actions;