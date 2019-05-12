import axios from 'axios';
import {config} from '@/config/index.ts';

export default class HackerNews{
    public static async fetchNewsList() {
        const response  = await axios.get(`${config.baseUrl}news/1.json`);
        return response.data;
    }

    public static async fetchAskList() {
        const response = await axios.get(`${config.baseUrl}ask/1.json`);
        return response.data;
    }

    public static async fetchJobsList() {
        const response = await axios.get(`${config.baseUrl}jobs/1.json`);
        return response.data;
    }
}