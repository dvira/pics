import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 089dec7c821fe202715d0b86ff0d8a63655b80c7c8b6fdff2e92bc0ba6844f38',
  },
});
