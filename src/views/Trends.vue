<template>
    <div class="trends-container">
        <h1>Trending now</h1>
        <div class="loader-container">
            <loader v-if="isLoading" />
        </div>
        <div class="chart" v-for="stock in trendingStocks">
            <div class="go-to-clients" @click="goToClients(stock)">Show clients</div>
            <highcharts :options="createOptions(stock)"></highcharts>
        </div>
    </div>
</template>

<script>
    import Loader from '@/components/Loader';
    export default {
        name: 'Trends',
        components: { Loader },
        computed: {
          trendingStocks() {
              const stocks = Object.keys(this.$store.state.trends.trendsData);
              if (stocks.length > 4) {
                  return stocks.splice(0, 4);
              }  else {
                  return stocks;
              }
          },
            trendsData() {
              return this.$store.state.trends.trendsData;
            },
            isLoading() {
              return this.$store.state.trends.isLoading;
            }
        },
        data() {
            return {
                chartOptions: {

                }
            }
        },
        methods: {
            createOptions(stock) {
                return {
                    title: {
                        text: stock
                    },
                    xAxis: {
                        label: 'asd',
                        categories: this.trendsData[stock].map(el => el.formattedTime)
                    },
                    yAxis: {
                        title: {
                            text: 'Trend points'
                        }
                    },
                    series: [{
                        name: stock + ' trend',
                        data: this.trendsData[stock].map(el => el.value[0])
                    }]
                }
            },
            goToClients(stock) {
                this.$store.commit('clients/setFilters', stock);
                this.$router.push('/clients');
            }
        }
    }
</script>

<style lang="scss" scoped>
.trends-container {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    min-height: 100vh;
    .loader-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    h1 {
        display: block;
        width: 100%;
    }
    .chart {
        width: 45%;
        height: 45%;
        position: relative;
        .go-to-clients {
            position: absolute;
            top: -15px;
            right: 15px;
            padding: 0 15px;
            color: #fff;
            font-size: 14px;
            line-height: 38px;
            background-color: #000;
            height: 40px;
            border-radius: 20px;
            z-index: 10;
            cursor: pointer;
        }
    }
}
</style>