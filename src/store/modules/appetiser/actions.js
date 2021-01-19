import axios from 'axios';

const doRegister = async ({ commit }, payload) => {

    return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST');
        axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/register', payload)
            .then(res => {
                const token = res.data.access_token;
                const user = res.data.user;
                localStorage.setItem('token', token);
                // Add the following line:
                axios.defaults.headers.common['Authorization'] = token;
                commit('AUTH_SUCCESS', token, user)
                resolve(res)
            })
            .catch(err => {
                commit('AUTH_FAILED', err)
                localStorage.removeItem('token')
                reject(err)
            })
    })

};

export default {
    doRegister
}