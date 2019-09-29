<template>
    <div class="mentioned-container">
        <h2>Most Mentioned In Media</h2>
        <div class="chart" v-for="stock in mostlyMentioned">
            <div class="go-to-stock">Details</div>
            <highcharts :options="createOptions(stock)"></highcharts>
        </div>
        <div class="other-stocks">
            <router-link :to="`/stock/${stock}`" v-for="stock in otherMentioned">
                {{ stock }}
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MostlyMentioned",
        computed: {
            mentionsData() {
                return this.$store.state.stocks.mentionsData;
            },
            mostlyMentioned() {
                let keys = Object.keys(this.mentionsData);
                keys.sort((a, b) => {
                    const elA = this.mentionsData[a][this.mentionsData[a].length - 1];
                    const elB = this.mentionsData[b][this.mentionsData[b].length - 1];
                    if (!elA) return 1;
                    if (!elB) return -1;
                    let countA = elA && elA.count;
                    let countB = elB && elB.count;
                    if (countA > countB) {
                        return -1;
                    } else if (countA < countB) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
                return keys.splice(0, 2);
            },
            otherMentioned() {
                let keys = Object.keys(this.mentionsData);
                return keys.splice(2, keys.length - 1);
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
                        categories: this.mentionsData[stock].map(el => this.getMonthByTimestamp(el.time))
                    },
                    yAxis: {
                        title: {
                            text: 'Mentions'
                        }
                    },
                    series: [{
                        name: stock + ' mentions',
                        data: this.mentionsData[stock].map(el => el.count)
                    }]
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
        }
    }
</script>

<style lang="scss" scoped>
    .mentioned-container {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        h2 {
            width: 100%;
            display: block;
        }
        .chart {
            width: 45%;
            position: relative;
        }
        .go-to-stock {
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
        .other-stocks {
            width: 100%;
            height: 40%;
            padding-top: 50px;
            a {
                display: inline-block;
                padding: 0 15px;
                color: #fff;
                font-size: 14px;
                line-height: 38px;
                background-color: #000;
                height: 40px;
                border-radius: 20px;
                margin: 10px;
            }
        }
    }
</style>
