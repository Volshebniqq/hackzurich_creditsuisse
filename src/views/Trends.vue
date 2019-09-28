<template>
    <div class="trends-container">
        <h1>Trending now</h1>
        <div class="chart" v-for="stock in trendingStocks">
            <highcharts :options="createOptions(stock)"></highcharts>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Trends',
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
    h1 {
        display: block;
        width: 100%;
    }
    .chart {
        width: 45%;
        height: 45%;
    }
}
</style>