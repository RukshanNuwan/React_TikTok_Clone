import axios from 'axios';

const base_url = axios.create({
  baseURL: 'https://tiktok-cln-mern-backend.herokuapp.com'
});

export default base_url;
