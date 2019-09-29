<template>
    <div class="stock-container">
        <h1>{{ stockName }}</h1>
        <div class="loader-container" v-if="isLoading">
            <loader />
        </div>
        <highcharts :options="createOptions()" />
        <highcharts :options="createPie" />
    </div>
</template>

<script>
    import {fetchSentimentalData, fetchMentionsData} from "../services/api";
    import Loader from '@/components/Loader';
    export default {
        components: { Loader },
        data() {
            return {
                stockName: this.$route.params.name,
                sentimentalData: {},
                mentionsData: [],
                isLoading: false
            }
        },
        computed: {
            positive() {
                let sum = 0;
                this.sentimentalData.forEach(el => {
                    sum += el.pos;
                });
                return sum / this.sentimentalData * 100
            },
            negative() {
                let sum = 0;
                this.sentimentalData.forEach(el => {
                    sum += el.neg;
                });
                return sum / this.sentimentalData * 100
            },
            neutral() {
                let sum = 0;
                this.sentimentalData.forEach(el => {
                    sum += el.neu;
                });
                return sum / this.sentimentalData * 100
            }
        },
        methods: {
            async getMentionsData() {
                this.mentionsData = await fetchMentionsData(this.stockName);
            },
            async getSentimentalData() {
                this.sentimentalData = await fetchSentimentalData(this.stockName);
            },
            createOptions() {
                return {
                    title: {
                        text: this.stockName
                    },
                    xAxis: {
                        categories: this.mentionsData.map(el => this.getMonthByTimestamp(el.time))
                    },
                    yAxis: {
                        title: {
                            text: 'Mentions'
                        }
                    },
                    series: [{
                        name: this.stockName + ' mentions',
                        data: this.mentionsData.map(el => el.count)
                    }]
                }
            },
            createPie() {
                return {
                    chart: {
                        type: 'pie'
                    },
                    title: {
                        text: 'Sentimental Analysis Result',
                    },
                    series: [
                        {
                            data: [
                                {
                                    name: 'Positive',
                                    drilldown: 'Positive',
                                    y: this.positive
                                },
                                {
                                    name: 'Neutral',
                                    drilldown: 'Neutral',
                                    y: this.neutral
                                },
                                {
                                    name: 'Negative',
                                    drilldown: 'Negative',
                                    y: this.negative
                                }
                            ]
                        }
                    ]

                }
            },
            getMonthByTimestamp(timestamp) {
                const date = new Date(timestamp);
                const month = date.getMonth();
                switch (month) {
                    case 0:
                        return 'Jan';
                    case 1:
                        return 'Feb';
                    case 2:
                        return 'Mar';
                    case 3:
                        return 'Apr';
                    case 4:
                        return 'May';
                    case 5:
                        return 'Jun';
                    case 6:
                        return 'Jul';
                    case 7:
                        return 'Aug';
                    case 8:
                        return 'Sep';
                    case 9:
                        return 'Oct';
                    case 10:
                        return 'Nov';
                    case 11:
                        return 'Dec';
                }
            }
        },
        watch: {
            stockName: {
                immediate: true,
                async handler() {
                    this.isLoading = true;
                    Promise.all([
                        await this.getMentionsData(),
                        await this.getSentimentalData()
                    ]);
                    this.isLoading = false;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .stock-container {
        min-height: 100vh;
        position: relative;
        padding: 20px;
        .loader-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
        }
    }
</style>

