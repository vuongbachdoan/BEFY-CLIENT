import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;
const getSongs = () => {
    return axios.get(
        `${URL}/api/v1/app`
    )
}
const getChart = () => {
    return axios.get(
        `${URL}/api/v1/app/chart`
    );
}

const getAudio = (id) => {
    return axios.get(
        `${URL}/api/v1/app/song/${id}`
    );
}

export const musicService = {
    getSongs,
    getChart,
    getAudio
}