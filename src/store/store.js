import Vue from "vue";
import Vuex from "vuex";
import clients from './clients.module';
import trends from './trends.module';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: { clients, trends }
});
