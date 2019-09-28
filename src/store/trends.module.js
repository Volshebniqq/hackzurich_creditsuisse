import { fetchTrends } from '@/services/api';

const state = {
    trendsData: []
};

const actions = {
    async getTrendsData({ commit }, companies) {
        const data = await fetchTrends(companies);
        console.log(data);
    }
};

const mutations = {
    setTrendsData(state, value) {
        state.trendsData = value;
    }
};

export default {
    namepsafed: true,
    state,
    actions,
    mutations
}