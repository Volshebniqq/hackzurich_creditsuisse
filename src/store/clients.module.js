import { fetchClients, fetchPortfolio } from "@/services/schnitzel.api";

const state = {
    clients: []
};

const actions = {
    async getClients({ commit, dispatch }) {
        const { object: clients } = await fetchClients();
        clients.forEach(async client => {
           client.portfolio = await dispatch('getClientPortfolio', client);
        });
        commit('setClients', clients);
    },

    async getClientPortfolio(client) {
        if (!client.accounts[0]) return;
        const data = await fetchPortfolio(client.accounts[0].id);
        console.log(data);
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