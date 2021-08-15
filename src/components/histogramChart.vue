<template>
    <div class="histogramChart">
        <div class="showchartTable" v-if="!showDetail">
            <div id="myHisChart" :style="{width: '1200px', height: '350px'}"></div>
            <el-button class="watchDetail" @click="showDetailFn">查看风电场详情</el-button>
            <div class="tableDetail">
                <el-table :data="tableData" border style="width: 100%" v-if="(fromPredPage === 'function' && preLeftMeun === 4) || (fromPredPage === 'electric' && preLeftMeun === 2)">
                    <el-table-column v-for="(item, index) in columData" :key="index" align="center">
                        <template slot="header">
                            <span>{{item.label}}</span>
                        </template>
                        <template slot-scope="scope">
                            <span>{{scope.row[item.value] ? scope.row[item.value] : '-'}}</span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="showDetail" v-else>
            <wind-farm-details ref="framDetail" :fromPredPage="fromPredPage" :pickStartTime="pickStartTime" :pickEndTime="pickEndTime" :typeOption="typeOption" :indexOption="indexOption" :preLeftMeun="preLeftMeun" :windTurbines="windTurbines" :periodData="periodData" :collectorAllWind="collectorAllWind" :WturAllData="WturAllData" :columData="columData"></wind-farm-details>
        </div>
    </div>
</template>

<script>
import windFarmDetails from '../components/windFarmDetail.vue'
export default {
    components: {
        windFarmDetails
    },
    data () {
        return {
            showDetail:false,
            periodData:[], //根据风场查询期次数据
            detailClum:[],
            collectorAllWind:[],
            WturAllData:[]
        }
    },
    props:{
        tableData:{
            type:Array,
            default: function() {
                return []
            }
        },
        columData:{
            type:Array,
            default: function() {
                return []
            }
        },
        preLeftMeun:{
            type: Number,
            default: 0
        },
        windTurbines:{
            type: String,
            default: ''
        },
        typeOption:{
            type: Number,
            default: 0
        },
        indexOption:{
            type: Number,
            default: 0
        },
        pickStartTime:{
            type: String,
            default: ''
        },
        pickEndTime:{
            type: String,
            default: ''
        },
        fromPredPage:{
            type: String,
            default: ''
        }
    },
    methods:{
        showDetailFn() {
            this.showDetail = true
            this.$emit('showDetail', this.showDetail)
            this.$nextTick(()=>{
                if (this.$refs.framDetail) {
                    this.$refs.framDetail.detailClum = this.detailClum
                    this.$refs.framDetail.collectorAllWind = this.collectorAllWind.sort(this.sortBy('collectorwireNo'))
                }
            })
        },
        sortBy(attr,rev){
            //第二个参数没有传递 默认升序排列
            if(rev ==  undefined){
                rev = 1;
            }else{
                rev = (rev) ? 1 : -1;
            }
            return function(a,b){
                a = a[attr];
                b = b[attr];
                if(a < b){
                    return rev * -1;
                }
                if(a > b){
                    return rev * 1;
                }
                return 0;
            }
        },
        getHistogram(xaxis, legendFn, seriesFn) {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myHisChart'))
            myChart.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: legendFn
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {show: false},
                        data: xaxis
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: seriesFn
            })
        },
    }
}
</script>

<style lang="less">
.histogramChart{
    margin: 10px 0;
    .watchDetail{
        margin-top:20px;
        background:#5997BE;
        color:#fff;
        height: 30px;
        padding-top: 8px;
    }
    .tableDetail{
        margin-top: 10px;
        .el-table td, .el-table th{
            padding:6px 0 !important;
        }
        .el-table{
            .el-table__body-wrapper{
                height:318px;
                overflow-y: auto;
            }
        }
    }
}
</style>