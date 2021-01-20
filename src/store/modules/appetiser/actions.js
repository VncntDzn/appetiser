import axios from 'axios';

const doRegister = async ({ commit }, payload) => {

    return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST');
        axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/register', payload)
            .then(res => {
                const token = res.data.data.access_token;
                const user = res.data.data.user;
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


const doLogin = async ({ commit }, payload) => {

    return new Promise((resolve, reject) => {
        commit('AUTH_REQUEST');
        axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/login', payload)
            .then(res => {
                const token = res.data.data.access_token;
                const user = res.data.data.user;
                localStorage.setItem('token', token);

                /*  console.log(user.email_verified) */
                // Add the following line:
                axios.defaults.headers.common['Authorization'] = token;
                commit('AUTH_SUCCESS', { token, user })
                resolve(res)
            })
            .catch(err => {
                commit('AUTH_FAILED', err)
                localStorage.removeItem('token')
                reject(err)
            })
    })

};

const doVerification = async ({ commit }, payload) => {
    try {
        commit('AUTH_REQUEST')

        const response = await axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/verification/verify', {
            "token": payload.token,
            "via": "email"
        }, {
            headers: {
                Authorization: `Bearer ${payload.accessToken}`
            },
        });

        const user = response.data.data;
        commit('AUTH_SUCCESS', user)
    } catch (e) {
        console.log(e);
        commit('AUTH_FAILED', e)
    }
}

const doLogout = ({ commit }) => {
    return new Promise((resolve) => {
        commit('LOGOUT')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
    })
};

export default {
    doRegister,
    doLogin,
    doVerification,
    doLogout
}