import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
    status: '',
    token: null,
    user: null,

}

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}