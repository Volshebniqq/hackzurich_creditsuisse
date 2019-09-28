import { fetchClients, fetchPortfolio } from "@/services/schnitzel.api";

const state = {
    clients: [],
    allDistinctStocks: []
};

const actions = {
    async getClients({ commit, dispatch }) {
        let { object: clients } = await fetchClients();
        let allDistinctStocks = [];
        clients = await Promise.all(clients.map(async client => {
           let portfolio = await dispatch('getClientPortfolio', client);
           let unique = [...new Set(portfolio)];
           client.portfolio = unique;
           allDistinctStocks = [...new Set(unique)];
           return client;
        }));
        commit('setClients', clients);
        commit('setDistinctStocks', allDistinctStocks);
        console.log(allDistinctStocks);
        dispatch('trends/getTrendsData', allDistinctStocks, { root: true });
    },

    async getClientPortfolio({}, client) {
        if (!client.accounts[0]) return;
        const { object: accounts } = await fetchPortfolio(client.accounts[0].id);
        return accounts.map(el => el.issuer);
    }
};

const mutations = {
    setClients(state, value) {
        state.clients = value;
    },
    setDistinctStocks(state, value) {
        state.allDistinctStocks = value;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
