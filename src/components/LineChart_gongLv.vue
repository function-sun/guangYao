<template>
  <div class="chartTable">
        <div class="showchartTable" v-show="!showDetail">
            <div id="myChart" :style="{width: '1200px', height: '350px'}"></div>
            <el-button class="watchDetail" @click="showDetailFn">查看风电场详情</el-button>
            <div class="tableDetail" v-loading="loading">
                <el-table :data="tableData" border style="width: 100%" v-if="(fromPredPage === 'function' && preLeftMeun === 2) || (fromPredPage === 'electric' && preLeftMeun === 1)">
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
        <div class="showDetail" v-if="showDetail">
            <wind-farm-details ref="framDetail" :fromPredPage="fromPredPage" :pickStartTime="pickStartTime" :pickEndTime="pickEndTime" :preLeftMeun="preLeftMeun" :windTurbines="windTurbines" :periodData="periodData" :collectorAllWind="collectorAllWind" :WturAllData="WturAllData" :columData="columData"></wind-farm-details>
        </div>
  </div>
</template>

<script>
import windFarmDetails from '../components/windFarmDetail.vue'
export default {
    components: {
        windFarmDetails
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
        },
        loading:{
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            pageVo:{
                pageCur:1,
                pageSize:10,
                totle:0
            },
            tableDataFn:[],
            showDetail:false,
            periodData:[], //根据风场查询期次数据
            detailClum:[],
            collectorAllWind:[],
            WturAllData:[]
        }
    },
    mounted() {
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
        getLine(xaxis, legendFn, seriesFn){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: legendFn
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    splitNumber: 6,
                    data: xaxis
                },
                yAxis: {
                    type: 'value'
                },
                series: seriesFn
            })
        }
    }
}
</script>

<style lang="less">
.chartTable{
    margin: 10px 0;
    .showchartTable{
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
                    max-height:318px;
                    overflow-y: auto;
                }
            }
        }
    }
}
</style>