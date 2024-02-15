import httpClient from "./httpClient";

const login = async ({email, password}) => {
        const result = await httpClient.post('login', { email: email, password: password})
        localStorage.setItem('user-token', ...result)
        return result;
    }

export default {
    login,
}