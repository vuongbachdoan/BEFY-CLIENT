import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSongDetails, setCurrentSongIndex, setIsSongPlaying, setSong } from '../../core/state/reducers/reducerMusic';
import { musicService } from '../services/musicService';

const Waveform = ({ waveRef }) => {
    const dispatch = useDispatch();
    const currentSong = useSelector((state) => state.music.currentSong);
    const currentPlaylist = useSelector((state) => state.music.currentPlaylist);
    const currentSongIndex = useSelector((state) => state.music.currentSongIndex);

    const containerRef = useRef();
    const waveSurferRef = useRef();

    useEffect(() => {
        const waveSurfer = WaveSurfer.create({
            container: containerRef.current,
            responsive: true,
            barWidth: 1,
            barHeight: 1,
            cursorWidth: 0,
            height: 20,
            waveColor: "#CCC",
            progressColor: "#0F766E"
        });
        waveSurfer.load(currentSong);

        waveSurfer.on('ready', () => {
            waveSurfer.play();
            waveSurferRef.current = waveSurfer;
            waveRef.current = waveSurferRef.current;
        });

        waveSurfer.on('finish', () => {
            dispatch(setIsSongPlaying(false));
            if (currentSongIndex < currentPlaylist.length - 1) {
                const newPos = currentSongIndex + 1;
                dispatch(setCurrentSongIndex(newPos));
                dispatch(setCurrentSongDetails(currentPlaylist[newPos]));

                musicService.getAudio(currentPlaylist[newPos].encodeId)
                    .then(
                        (res) => {
                            dispatch(setIsSongPlaying(true));
                            dispatch(
                                setSong(
                                    res.data.data.lossless ??
                                    res.data.data['128'] ??
                                    res.data.data['320']
                                )
                            )
                        }
                    )
            }
        })

        return () => {
            waveSurfer.destroy();
        };
    }, [currentSong]);

    return (
        <WaveSurferWrap>
            <div ref={containerRef} />
        </WaveSurferWrap>
    );
};

Waveform.propTypes = {
    audio: PropTypes.string.isRequired,
};
const WaveSurferWrap = styled.div`
  display: grid;
  align-items: center;
`;

export default Waveform;