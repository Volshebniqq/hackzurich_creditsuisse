import { fetchMentionsData } from '@/services/api';

const state = {
    mentionsData: []
};

const actions = {
    async getMentionsData({ commit }, companies) {
        let data = { };
        await Promise.all(companies.map(async company => {
            data[company] = await fetchMentionsData(company);
        }));
        commit('setMentionsData', data);
    }
};

const mutations = {
    setMentionsData(state, value) {
        state.mentionsData = value;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}