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

export const Player = ({ listSongs }) => {
    const [isPlaying, toggleIsPlaying] = useState(false);

    return (
        <Container className="sticky bottom-0 bg-white bg-opacity-90 backdrop-blur-md z-50 py-5 border-t-2">
            <Row>
                <Col className="player__infor">
                    <User
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        name="Ariana Wattson"
                    >
                        <Text>Name of Song</Text>
                    </User>
                </Col>
                <Col className="player__func">
                    <Row justify="center" align="center">
                        <IconShuffle className="icon-sm" />
                        <IconSkipPrev className="icon-sm" />
                        {
                            isPlaying ? <IconPause onClick={() => toggleIsPlaying(!isPlaying)} /> : <IconPlay onClick={() => toggleIsPlaying(!isPlaying)} />
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
                    listSongs.length > 0 &&
                    <Waveform togglePlaying={(val) => toggleIsPlaying(val)} isPlaying={isPlaying} audio={listSongs[0]} />
                }
            </Container>
        </Container>
    );
};