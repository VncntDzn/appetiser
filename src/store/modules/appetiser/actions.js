import axios from 'axios';

const doRegister = async ({ commit }, payload) => {
    try {
        const response = await axios.post('https://api.baseplate.appetiserdev.tech/api/v1/auth/register', payload);
        commit('DO_REGISTER', response.data);
    } catch (error) {
        console.log(error);
    }
};
/* 
const doLogin = async ({commit}, payload) => {

} */


export default {
    doRegister
}