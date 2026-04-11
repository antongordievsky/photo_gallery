import axios, {AxiosInstance} from 'axios';
import {ImageDetail, ImageProfile} from '../types';

const PAGE_SIZE = 30;

interface PicsumPhoto {
    id: string | number;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

function mapToProfile(p: PicsumPhoto): ImageProfile {
    const id = String(p.id);
    return {
        id,
        croppedPicture: `https://picsum.photos/id/${id}/300/300`,
    };
}

function mapToDetail(p: PicsumPhoto): ImageDetail {
    const id = String(p.id);
    return {
        id,
        croppedPicture: `https://picsum.photos/id/${id}/300/300`,
        author: p.author,
        camera: '—',
        fullPicture: p.download_url,
        tags: `${p.width}×${p.height} · ${p.url}`,
    };
}

class ImageService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'https://picsum.photos',
        });
    }

    public async getImages(page = 1) {
        const result = await this.axiosInstance.get<PicsumPhoto[]>('/v2/list', {
            params: {
                page,
                limit: PAGE_SIZE,
            },
        });

        const pictures = result.data.map(mapToProfile);
        const hasMore = result.data.length === PAGE_SIZE;

        return {pictures, hasMore};
    }

    public async getImage(id: string): Promise<ImageDetail> {
        const result = await this.axiosInstance.get<PicsumPhoto>(`/id/${id}/info`);
        return mapToDetail(result.data);
    }
}

export default new ImageService();
