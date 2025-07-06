import axios from 'axios';


const api = axios.create({
    baseURL: `https://crud-backend-eta-fawn.vercel.app/api`,
});

export default api;