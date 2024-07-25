import axios from 'axios';

const http = axios.create({
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default http;

export const isValidUrl = (url: string): boolean => {
  if (typeof url !== 'string') return false;
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};
