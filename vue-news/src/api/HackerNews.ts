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

    public static async fetchUser(id: string) {
        const response = await axios.get(`${config.baseUrl}user/${id}.json`);
        return response.data;
    }

    public static async fetchItem(id: string){
        const response = await axios.get(`${config.baseUrl}item/${id}.json`);
        return response.data;
    }
}