<template>
    <div class="clients-container">
        <h2>Clients</h2>

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
                return this.$store.state.clients.clients;
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