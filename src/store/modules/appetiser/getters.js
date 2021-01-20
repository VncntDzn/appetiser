
const statusGetter = state => state.status;
const tokenGetter = state => state.token;
const userGetter = state => state.user;
const emailGetter = state => state.emailVerified;

export default {
    statusGetter,
    tokenGetter,
    userGetter,
    emailGetter
}