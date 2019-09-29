<template>
    <div class="clients-container">
        <h2>{{ filters }} Clients</h2>
        <mdb-datatable
                v-if="rows.length"
                :data="{ columns, rows }"
                striped
                bordered
                reactive
                :time="1000"
        />
    </div>
</template>

<script>
    import { mdbDatatable } from 'mdbvue';
    export default {
        name: 'Clients',
        components: { mdbDatatable },
        computed: {
            rows() {
                let clients = this.$store.state.clients.clients.map(el => {
                    let portfolio = '';
                    if (el.portfolio && el.portfolio.length) {
                        el.portfolio.forEach((tag, idx) => {
                            portfolio += tag;
                            if (idx !== el.portfolio.length - 1) {
                                portfolio += ', ';
                            }
                        });
                    }
                    return {
                        ...el,
                        portfolio
                    }
                });
                if (this.filters.length) {
                    clients = clients.filter(el => el.portfolio.includes(this.filters));
                }
                return clients;
            },
            filters() {
                return this.$store.state.clients.filters;
            }
        },
        data() {
            return {
                columns: [
                    {
                        label: 'First Name',
                        field: 'surname',
                        sort: 'asc'
                    },
                    {
                        label: 'Last Name',
                        field: 'lastname',
                        sort: 'asc'
                    },
                    {
                        label: 'City',
                        field: 'city',
                        sort: 'asc'
                    },
                    {
                        label: 'Portfolio',
                        field: 'portfolio'
                    }
                ],

            }
        }
    }
</script>

<style lang="scss" scoped>
    .clients-container {
        padding: 20px;
    }
    .dataTables_length {
        display: none!important;
    }
</style>
