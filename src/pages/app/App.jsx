import styled from "styled-components";
import { useEffect, useState } from "react";
import { Sidebar } from "../../shared/layout/Sidebar";
import { Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { Table, Text, User } from '@nextui-org/react';
import { musicService } from "../../shared/services/musicService";
import { ReactComponent as IconMore } from "../../assets/image/icon_more.svg";
import { Player } from "../../shared/layout/Player";
import { Header } from "../../shared/layout/Header";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPlaylist, setCurrentSongDetails, setCurrentSongIndex, setIsSongPlaying, setSong } from "../../core/state/reducers/reducerMusic";

export const App = () => {
    const dispatch = useDispatch();
    const isSongPlaying = useSelector((state) => state.music.isSongPlaying);
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [songs, setSongs] = useState([]);
    const [topSongs, setTopSongs] = useState([]);
    useEffect(() => {
        musicService.getSongs()
            .then(
                (res) => setSongs(res.data.data[0].items)
            );
        musicService.getChart()
            .then(
                (res) => {
                    setTopSongs(res.data.data.data.items);
                    dispatch(setCurrentPlaylist(res.data.data.data.items));
                }
            );
    }, []);

    const fetchAudio = (id, detailAudio, index) => {
        dispatch(setIsSongPlaying(true));
        dispatch(setCurrentSongIndex(index));
        dispatch(setCurrentSongDetails(detailAudio));
        musicService.getAudio(id)
            .then(
                (res) => {
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

    return (
        <div className="relative min-h-screen lg:flex">
            <Header isOpen={isOpen} handleOpen={(val) => setIsOpen(val)} />

            <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-20 transition-opacity bg-black opacity-30 lg:hidden" ></div >
            <Sidebar isOpen={isOpen} />

            <main id="content" className="flex-1 z-10 space-y-6 overflow-y-auto bg-teal-50 lg:h-screen md:space-y-8">
                <header className="flex items-center justify-between h-20 px-6 bg-white border-b">
                    <div className="relative flex items-center">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>

                        <input type="text" className="py-2.5 pl-10 pr-4 text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-200 rounded-lg sm:w-auto w-36 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Search" />
                    </div>

                    <div className="flex items-center">
                        <div className="relative">
                            <button className="transition-colors duration-300 rounded-lg sm:px-4 sm:py-2 focus:outline-none hover:bg-gray-100" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                <span className="sr-only">User Menu</span>
                                <div className="flex items-center md:-mx-2 ">
                                    <div className="hidden md:mx-2 md:flex md:flex-col md:items-end md:leading-tight">
                                        <span className="font-semibold text-sm text-gray-800">Dhaiflaah</span>
                                        <span className="text-sm text-gray-600">Lecturer</span>
                                    </div>

                                    <img className="flex-shrink-0 w-10 h-10 overflow-hidden bg-gray-100 rounded-full md:mx-2" src="https://randomuser.me/api/portraits/men/68.jpg" alt="user profile photo" />
                                </div>
                            </button>

                            <transition
                                enter-active-className="transition duration-200 ease-out"
                                enter-from-className="transform scale-95 opacity-0"
                                enter-to-className="transform scale-100 opacity-100"
                                leave-active-className="transition duration-75 ease-in"
                                leave-from-className="transform scale-100 opacity-100"
                                leave-to-className="transform scale-95 opacity-0"
                            >
                                {
                                    dropdownOpen &&
                                    <div className="absolute right-0 z-50 w-56 p-2 bg-white border rounded-lg top-16 lg:top-20">
                                        <div onClick={() => setDropdownOpen(false)} className="px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-100">Profile</div>
                                        <div onClick={() => setDropdownOpen(false)} className="px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-100">Messages</div>
                                        <div onClick={() => setDropdownOpen(false)} className="px-4 py-2 text-gray-800 transition-colors duration-300 rounded-lg cursor-pointer hover:bg-gray-100">To-Do's</div>
                                    </div>
                                }
                            </transition>
                        </div>

                        {
                            dropdownOpen &&
                            <div className="fixed inset-0 z-30" onClick={() => setDropdownOpen(false)}></div>
                        }

                        <button className="relative p-2 mx-3 text-gray-400 transition-colors duration-300 rounded-full hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100">
                            <span className="sr-only">Notifications</span>
                            <span className="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-blue-700 rounded-full"></span>
                            <span className="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-blue-700 rounded-full animate-ping"></span>

                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>

                        <button className="p-2 text-gray-400 transition-colors duration-300 rounded-full focus:outline-none hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100">
                            <span className="sr-only">Log out</span>

                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        </button>
                    </div>
                </header >

                <section className="flex flex-col w-full px-6 md:justify-between md:items-center md:flex-row">
                    <div>
                        <h2 className="text-3xl font-medium text-gray-800">Dashboard</h2>
                        <p className="mt-2 text-sm text-gray-500">Mobile UX/UI Design Course</p>
                    </div>

                    <div className="flex flex-col mt-6 md:flex-row md:mt-0">
                        <button className="py-3 border-0 focus:outline-none text-gray-600 transition-colors duration-300 rounded-lg hover:text-gray-900 bg-transparent">
                            <div className="flex items-center justify-center -mx-1">
                                <span className="mx-1 text-sm capitalize text-gray-600 hover:text-gray-900">Explore more</span>
                                <IconMore className="icon-medium" />
                            </div>
                        </button>
                    </div>
                </section>

                <SwiperWrapper className="flex flex-col w-full px-6 md:justify-between md:items-center md:flex-row">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                        slidesPerView={3}
                    >
                        {
                            songs.map((song) => {
                                return <SwiperSlide>
                                    <BannerImage className="shadow-md shadow-gray-200 ">
                                        <img className="transition duration-200 ease-in-out" src={song.banner} alt="banner songs" />
                                    </BannerImage>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </SwiperWrapper>

                <TableSection style={{ position: "relative" }} className="relativegrid grid-cols-1 gap-8 mx-6 bg-white">
                    <Table
                        bordered
                        shadow={false}
                        color="success"
                        aria-label="Example pagination  table"
                        css={{
                            height: "auto",
                            minWidth: "100%",
                        }}
                        selectionMode="single"
                    >
                        <Table.Header>
                            <Table.Column>SONG</Table.Column>
                            <Table.Column>ARTISTS</Table.Column>
                            <Table.Column>DURATION</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {
                                topSongs.map((item, index) => {
                                    return (
                                        <Table.Row key={item.encodeId}>
                                            <Table.Cell>
                                                <User
                                                    src={item.thumbnail}
                                                    name={item.title}
                                                    onClick={() => fetchAudio(item.encodeId, item, index)}
                                                />
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Text onClick={() => fetchAudio(item.encodeId, item, index)}>{item.artistsNames}</Text>
                                            </Table.Cell>
                                            <Table.Cell>
                                                <Text onClick={() => fetchAudio(item.encodeId, item, index)}>{new Date(item.duration * 1000).toISOString().slice(14, 19)}</Text>
                                            </Table.Cell>
                                        </Table.Row>
                                    )
                                })
                            }
                        </Table.Body>
                        <Table.Pagination
                            shadow
                            noMargin
                            align="center"
                            rowsPerPage={10}
                            onPageChange={(page) => console.log({ page })}
                            color={"success"}
                        />
                    </Table>
                </TableSection>
                <Player />
            </main >
        </div >
    );
}

const SwiperWrapper = styled.section`
    width: calc(100vw - 72px - 24px);
`;

const BannerImage = styled.div`
    margin: 12px;
    width: calc(100% - 24px) !important;
    border-radius: 25px;
    overflow: hidden;

    &:hover {
        img {
            transform: scale(1.1);
        }
    }
`;

const TableSection = styled.div`
    z-index: 1;
    position: relative;
`