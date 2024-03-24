import axios from 'axios';

const W = axios.create(
    {
    baseURL: import.meta.env.VITE_WETH_URL
})

export const getW =()=>
    W.get("/")