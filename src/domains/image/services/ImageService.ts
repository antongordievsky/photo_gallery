import axios, {AxiosInstance} from 'axios';
import {ImageDetail} from '../types';

class ImageService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://interview.agileengine.com/',
        });
    }

    public async getImages(token: string, page = 1) {
        const result = await this.axiosInstance.get('/images', {
            params: {
                page,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return result.data;
    }

    public async getImage(token: string, id: string): Promise<ImageDetail> {
        const imageUri = `/images/${id}`;
        const result = await this.axiosInstance.get(imageUri, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return result.data;
    }
}

export default new ImageService();
