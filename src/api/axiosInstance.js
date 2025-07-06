import axios from 'axios';


const api = axios.create({
    baseURL: `https://crud-backend-jd3px0mnu-markfartushniaks-projects.vercel.app/api`,
});

export default api;