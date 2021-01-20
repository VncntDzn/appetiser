const AUTH_REQUEST = (state) => {
    state.status = 'loading'
};
const AUTH_SUCCESS = (state, token, user) => {
    state.status = 'Success!'
    state.token = token;
    state.user = user;
};
const AUTH_FAILED = (state, err) => {
    state.status = err;

}


export default {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILED
}