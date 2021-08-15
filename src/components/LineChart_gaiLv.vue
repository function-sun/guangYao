<template>
  <div class="chartTable">
        <div class="showchartTable">
            <div id="myChart" :style="{width: '1200px', height: '350px'}"></div>
            <div class="tableDetail">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column prop="dataTime" label="时间"></el-table-column>
                    <el-table-column prop="p0" label="实际出力"></el-table-column>
                    <el-table-column prop="value" label="预测出力"></el-table-column>
                    <el-table-column prop="avgValue" label="平均值"></el-table-column>
                    <el-table-column prop="mlValue" label="最大可能值"></el-table-column>
                    <el-table-column prop="maxInterval50" label="P50上限"></el-table-column>
                    <el-table-column prop="minInterval50" label="P50下限"></el-table-column>
                    <el-table-column prop="maxInterval55" label="P55上限"></el-table-column>
                    <el-table-column prop="minInterval55" label="P55下限"></el-table-column>
                    <el-table-column prop="maxInterval60" label="P60上限"></el-table-column>
                    <el-table-column prop="minInterval60" label="P60下限"></el-table-column>
                    <el-table-column prop="maxInterval65" label="P65上限"></el-table-column>
                    <el-table-column prop="minInterval65" label="P65下限"></el-table-column>
                    <el-table-column prop="maxInterval70" label="P70上限"></el-table-column>
                    <el-table-column prop="minInterval70" label="P70下限"></el-table-column>
                    <el-table-column prop="maxInterval75" label="P75上限"></el-table-column>
                    <el-table-column prop="minInterval75" label="P75下限"></el-table-column>
                    <el-table-column prop="maxInterval80" label="P80上限"></el-table-column>
                    <el-table-column prop="minInterval80" label="P80下限"></el-table-column>
                    <el-table-column prop="maxInterval85" label="P85上限"></el-table-column>
                    <el-table-column prop="minInterval85" label="P85下限"></el-table-column>
                    <el-table-column prop="maxInterval90" label="P90上限"></el-table-column>
                    <el-table-column prop="minInterval90" label="P90下限"></el-table-column>
                    <el-table-column prop="maxInterval95" label="P95上限"></el-table-column>
                    <el-table-column prop="minInterval95" label="P95下限"></el-table-column>
                    <el-table-column prop="maxValue" label="最大值"></el-table-column>
                    <el-table-column prop="minValue" label="最小值"></el-table-column>
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
        preLeftMeun:{
            type: Number,
            default: 0
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