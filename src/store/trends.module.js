import { fetchTrends } from '@/services/api';

const state = {
    trendsData: [],
    isLoading: false
};

const actions = {
    async getTrendsData({ commit }, companies) {
        commit('setIsLoading', true);
        const data = await fetchTrends(companies);
        commit('setTrendsData', data);
        commit('setIsLoading', false);
    }
};

const mutations = {
    setTrendsData(state, value) {
        state.trendsData = value;
    },
    setIsLoading(state, value) {
        state.isLoading = value;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}