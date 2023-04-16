import { Card, Col, Container, Row, Text, User, styled } from "@nextui-org/react";
import { ReactComponent as IconSkipPrev } from "../../assets/image/icon_skip-prev.svg";
import { ReactComponent as IconSkipNext } from "../../assets/image/icon_skip-next.svg";
import { ReactComponent as IconShuffle } from "../../assets/image/icon_shuffle.svg";
import { ReactComponent as IconLoop } from "../../assets/image/icon_loop.svg";
import { ReactComponent as IconPlay } from "../../assets/image/icon_play.svg";
import { ReactComponent as IconPause } from "../../assets/image/icon_pause.svg";
import { ReactComponent as IconPlaylist } from "../../assets/image/icon_playlist.svg";
import { ReactComponent as IconFavorite } from "../../assets/image/icon_favorite.svg";
import { ReactComponent as IconVolume } from "../../assets/image/icon_volume.svg";
import Waveform from "./WaveForm";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsSongPlaying } from "../../core/state/reducers/reducerMusic";

export const Player = () => {
    const dispatch = useDispatch();
    const isSongPlaying = useSelector((state) => state.music.isSongPlaying);
    const currentSong = useSelector((state) => state.music.currentSong);
    const currentSongDetails = useSelector((state) => state.music.currentSongDetails);

    const waveRef = useRef(null);

    const toggleWaveSurfer = () => {
        waveRef.current.playPause();
        dispatch(setIsSongPlaying(!isSongPlaying));
    }

    return (
        <Container className="sticky bottom-0 bg-white bg-opacity-90 backdrop-blur-md z-50 py-5 border-t-2">
            <Row>
                <Col className="player__infor">
                    <User
                        src={currentSongDetails.thumbnail}
                        name={currentSongDetails.title ?? 'Song Name'}
                    >
                        <Text>
                            {
                                currentSongDetails.artistsNames && currentSongDetails.duration ?
                                    `${currentSongDetails.artistsNames} • ${Math.floor(currentSongDetails.duration / 60).toString().padStart(2, '0')}:${(currentSongDetails.duration % 60).toString().padStart(2, '0')}` :
                                    'Artists Name • 00:00'
                            }
                        </Text>
                    </User>
                </Col>
                <Col className="player__func">
                    <Row justify="center" align="center">
                        <IconShuffle className="icon-sm" />
                        <IconSkipPrev className="icon-sm" />
                        {
                            currentSong && isSongPlaying ?
                                <IconPause onClick={toggleWaveSurfer} /> :
                                <IconPlay onClick={toggleWaveSurfer} />
                        }
                        <IconSkipNext className="icon-sm" />
                        <IconLoop className="icon-sm" />
                    </Row>
                </Col>
                <Col className="player__others">
                    <Row justify="end" align="center">
                        <IconPlaylist className="icon-sm" />
                        <IconFavorite className="icon-sm" />
                        <IconVolume className="icon-sm" />
                    </Row>
                </Col>
            </Row>
            <Container className="pt-3 flex justify-center">
                {
                    currentSong !== null &&
                    <Waveform waveRef={waveRef} />
                }
            </Container>
        </Container>
    );
};