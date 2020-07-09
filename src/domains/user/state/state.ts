import {User} from "@/domains/user/types";

export default {
    namespaced: true as true,
    state: {
        token: '',
        apiKey: '23567b218376f79d9415',
        isAuthorized: false,
    } as User,
    mutations: {
        setToken(state: User, token: string) {
            state.token = token;
        },
        setIsAuthorized(state: User) {
            state.isAuthorized = true;
        },
    },
}
