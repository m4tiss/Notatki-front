import axios from 'axios';
const instance = axios.create({
    baseURL: process.env.API_URL || 'https://notateczki-backend.onrender.com/api'
});
 
export default instance;
