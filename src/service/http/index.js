import axios from 'axios';

const baseUrl = 'https://api.github.com/';
const config = {
  baseURL: baseUrl,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  },
}
const HTTP = axios.create(config)

export default HTTP;