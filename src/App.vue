<template>
    <div id="app">
        <div class="wrapper">
            <sidebar />
            <div class="content">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
    import { fetchClients } from '@/services/schnitzel.api';
    import Sidebar from '@/components/Sidebar';
    export default {
        name: 'App',
        components: { Sidebar },
        created() {
            this.$store.dispatch('clients/getClients');
        },
        watch: {
            $route(val, prev) {
                if (prev.name === 'clients') {
                    this.$store.commit('clients/setFilters', '');
                }
            }
        }
    }
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial;
    }
    .wrapper {
        height: 100vh;
        display: flex;
        justify-content: space-between;
        .content {
            flex: 1;
            height: 100vh;
            overflow-y: scroll;
        }
    }
</style>
