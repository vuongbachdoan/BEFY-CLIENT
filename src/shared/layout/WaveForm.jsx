import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSongPlaying, setSong } from '../../core/state/reducers/reducerMusic';

const Waveform = () => {
    const dispatch = useDispatch();
    const isSongPlaying = useSelector((state) => state.music.isSongPlaying);
    const currentSong = useSelector((state) => state.music.currentSong);
    const containerRef = useRef();
    const waveSurferRef = useRef({
        isPlaying: () => false,
    });

    useEffect(() => {
        if (currentSong) {
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
                waveSurferRef.current = waveSurfer;
            });

            return () => {
                waveSurfer.destroy();
            };
        }
    }, [currentSong]);

    useEffect(() => {
        if (isSongPlaying ) {
            waveSurferRef.current.playPause();
        }
        dispatch(setIsSongPlaying(waveSurferRef.current.isPlaying()));
    }, [isSongPlaying])

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