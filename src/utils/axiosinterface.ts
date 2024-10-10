import axios from 'axios';

export const cmsCdn = axios.create ({
    baseURL: process.env.NEXT_PUBLIC_CMS_CDN_URL,
})