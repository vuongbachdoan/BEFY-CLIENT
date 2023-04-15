import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';

const Waveform = ({ audio, isPlaying, togglePlaying }) => {
    const containerRef = useRef();
    const waveSurferRef = useRef({
        isPlaying: () => false,
    });

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
        waveSurfer.load(audio);
        waveSurfer.on('ready', () => {
            waveSurferRef.current = waveSurfer;
        });

        return () => {
            waveSurfer.destroy();
        };
    }, [audio]);

    useEffect(() => {
        if(isPlaying) {
            waveSurferRef.current.playPause();
        }
        togglePlaying(waveSurferRef.current.isPlaying());
    }, [isPlaying])

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