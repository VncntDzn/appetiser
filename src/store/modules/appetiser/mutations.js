const AUTH_REQUEST = (state) => {
    state.status = 'loading'
};
const AUTH_SUCCESS = (state, { token, user }) => {
    state.status = 'Success!'
    state.token = token;
    state.user = user;
    state.emailVerified = user.email_verified;


};
const AUTH_FAILED = (state, err) => {
    state.status = err;

};
const LOGOUT = (state) => {
    state.status = '';
    state.token = '';
    state.user = '';
    state.emailVerified = false;
};


export default {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILED,
    LOGOUT
}