import { fetchClients, fetchPortfolio } from "@/services/schnitzel.api";

const state = {
    clients: []
};

const actions = {
    async getClients({ commit, dispatch }) {
        let { object: clients } = await fetchClients();
        clients = await Promise.all(clients.map(async client => {
           client.portfolio = await dispatch('getClientPortfolio', client);
           return client;
        }));
        commit('setClients', clients);
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
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}