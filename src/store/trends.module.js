import { fetchTrends } from '@/services/api';

const state = {
    trendsData: []
};

const actions = {
    async getTrendsData({ commit }, companies) {
        const data = await fetchTrends(companies);
        commit('setTrendsData', data);
    }
};

const mutations = {
    setTrendsData(state, value) {
        state.trendsData = value;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}