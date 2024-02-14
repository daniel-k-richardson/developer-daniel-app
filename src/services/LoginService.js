import httpClient from "./httpClient";

const login = async ({email, password}) => {
        const result = await httpClient.post('login', { emial: email, password: password})
        console.log('response of login1', result)
        return result;
    }

export default {
    login,
}