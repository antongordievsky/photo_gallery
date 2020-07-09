import axios, {AxiosInstance} from 'axios';

class AuthorizeService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://interview.agileengine.com/',
        });
    }

    public async auth(apiKey: string) {
        const result = await this.axiosInstance.post('/auth', {
            apiKey,
        });

        return result.data.token;
    }
}

export default new AuthorizeService();
