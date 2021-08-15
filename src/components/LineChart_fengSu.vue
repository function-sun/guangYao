<template>
  <div class="chartTable">
        <div class="showchartTable">
            <div id="myChart" :style="{width: '1200px', height: '350px'}"></div>
            <div class="tableDetail">
                <el-table :data="tableData" border style="width: 100%" v-if="preLeftMeun === 1 || preLeftMeun === 2">
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
  </div>
</template>

<script>
export default {
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
            detailClum:[]
        }
    },
    mounted() {
    },
    methods:{
        handleSizeChange(val) {
            this.pageVo.pageSize = val
        },
        handleCurrentChange(val) {
            this.pageVo.pageCur = val
        },
        showDetailFn() {
            this.showDetail = true
            this.$emit('showDetail', this.showDetail)
            this.$nextTick(()=>{
                if (this.$refs.framDetail) {
                    this.$refs.framDetail.detailClum = this.detailClum
                }
            })
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