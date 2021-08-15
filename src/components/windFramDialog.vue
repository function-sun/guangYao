<template>
    <div class="framDialog">
        <el-dialog :title="title" :visible.sync="dialogVisible" v-loading="loading" width="1260px" :close-on-click-modal="false">
            <div id="myChartq" :style="{width: '1200px', height: '350px'}"></div>
            <div class="tableDetail">
                <el-table :data="tableData" border style="width: 100%">
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
            <span slot="footer" class="dialog-footer">
                <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props:{
        columData:{
            type:Array,
            default: function() {
                return []
            }
        },
        fromPredPage:{
            type: String,
            default: ''
        },
        windTurbines:{ //1-牛首山 2-青山 3-石板全 4-香山 5-麻黄山
            type: String,
            default: '1'
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
        }
    },
    data() {
        return {
            title:'',
            loading:false,
            dialogVisible:false,
            dialogVisibleS:false,
            tableData:[],
            detailClum:[]
        }
    },
    methods:{
        // 查看风电场期次详情--echarts--功率预测
        getperiodEchart(num, from) {
            let that = this
            let url = ''
            if (from === 'function') {
                url = '/predict/api/dqycgl/getPeriodDqycglChartData'  //--功率预测
            } else {
                url = '/predict/api/dqdlyc/getPeriodDqdlycChartData'  //--电量预测
            }
            let params = {
                windplantNo: that.windTurbines * 1,
                projectNo: num,
                'params[beginDataTime]':this.pickStartTime,
                'params[endDataTime]': this.pickEndTime
            }
            that.$http.get(url, params).then(datas=>{
                if (datas && datas.data) {
                    let legend = []
                    let series = []
                    if (datas.data.dataFormatList.length>0) {
                        datas.data.dataFormatList.forEach(item =>{
                            let seriesObj = {
                                name: item.name,
                                type: 'line',
                                stack: '总量',
                                data: item.data,
                                symbol: 'none'
                            }
                            legend.push(item.name)
                            series.push(seriesObj)
                        })
                    }
                    that.getLine(datas.data.dateList, legend, series)
                    that.loading = false    
                }
            })
        },
        // 查看集电线详情--echarts--功率预测
        getcollectorEchart(item, from) {
            let that = this
            let url = ''
            if (from === 'function') {
                url = '/predict/api/dqycgl/getCollectingWireDqycglChartData'  //--功率预测
            } else {
                url = '/predict/api/dqdlyc/getCollectingWireDqdlycChartData'  //--电量预测
            }
            let params = {
                windplantNo: that.windTurbines * 1,
                projectNo: item.projectNo,
                collectorwireNo: item.collectorwireNo,
                'params[beginDataTime]':this.pickStartTime,
                'params[endDataTime]': this.pickEndTime
            }
            that.$http.get(url, params).then(datas=>{
                if (datas && datas.data) {
                    let legend = []
                    let series = []
                    if (datas.data.dataFormatList.length>0) {
                        datas.data.dataFormatList.forEach(item =>{
                            let seriesObj = {
                                name: item.name,
                                type: 'line',
                                stack: '总量',
                                data: item.data,
                                symbol: 'none'
                            }
                            legend.push(item.name)
                            series.push(seriesObj)
                        })
                    }
                    that.getLine(datas.data.dateList, legend, series)
                    that.loading = false    
                }
            })
        },
        //查看风机详情--echarts--功率预测
        getWrieCharts(num, from) {
            let that = this
            let url = ''
            if (from === 'function') {
                url = '/predict/api/dqycgl/getFanDqycglChartData'  //--功率预测
            } else {
                url = '/predict/api/dqdlyc/getFanDqdlycChartData'  //--电量预测
            }
            let params = {
                windplantNo: that.windTurbines * 1,
                wtgNo: num,
                'params[beginDataTime]':this.pickStartTime,
                'params[endDataTime]': this.pickEndTime
            }
            that.$http.get(url, params).then(datas=>{
                if (datas && datas.data) {
                    let legend = []
                    let series = []
                    if (datas.data.dataFormatList.length>0) {
                        datas.data.dataFormatList.forEach(item =>{
                            let seriesObj = {
                                name: item.name,
                                type: 'line',
                                stack: '总量',
                                data: item.data,
                                symbol: 'none'
                            }
                            legend.push(item.name)
                            series.push(seriesObj)
                        })
                    }
                    that.getLine(datas.data.dateList, legend, series)
                    that.loading = false    
                }
            })
        },
        // 获取期次、集电线、风机表格数据--功率预测
        getTableDetailData(num, from) {
            let that = this
            let url = ''
            if (from === 'function') {
                url = '/predict/api/dqycgl/getPeriodDqycglTableData'  //--功率预测
            } else {
                url = '/predict/api/dqdlyc/getPeriodDqdlycTableData'  //--电量预测
            }
            let params = {
                windplantNo: that.windTurbines * 1,
                projectNo: num,
                beginDataTime: this.pickStartTime,
                endDataTime: this.pickEndTime
            }
            let paramsv = that.parseParam(params)
            that.$http.post(url, paramsv).then(datas =>{
                if (datas && datas.rows.length>0) {
                    this.tableData = datas.rows
                }
                that.loading = false
            })
        },
        getCollectTable(item, from) {
            let that = this
            let url = ''
            if (from === 'function') {
                url = '/predict/api/dqycgl/getCollectingWireDqycglTableData'  //--功率预测
            } else {
                url = '/predict/api/dqdlyc/getCollectingWireDqdlycTableData'  //--电量预测
            }
            let params = {
                windplantNo: that.windTurbines * 1,
                projectNo: item.projectNo,
                collectorwireNo: item.collectorwireNo,
                beginDataTime: this.pickStartTime,
                endDataTime: this.pickEndTime
            }
            let paramsv = that.parseParam(params)
            that.$http.post(url, paramsv).then(datas =>{
                if (datas && datas.rows.length>0) {
                    this.tableData = datas.rows
                }
                that.loading = false
            })
        },
        getWrieTable(num, from) {
            let that = this
            let url = ''
            if (from === 'function') {
                url = '/predict/api/dqycgl/getFanDqycglTableData'  //--功率预测
            } else {
                url = '/predict/api/dqdlyc/getFanDqdlycTableData'  //--电量预测
            }
            let params = {
                windplantNo: that.windTurbines,
                wtgNo: num.toString(),
                beginDataTime: this.pickStartTime,
                endDataTime: this.pickEndTime
            }
            let paramsv = that.parseParam(params)
            that.$http.post(url, paramsv).then(datas =>{
                if (datas && datas.rows.length>0) {
                    this.tableData = datas.rows
                }
                that.loading = false
            })
        },
        parseParam(param){
            var paramStr = ""
            for(let i in param) {
                paramStr += i + "=" + encodeURIComponent(param[i]) + '&';
            }
            
            return paramStr.substring(0, paramStr.length-1).toString()
        },
        getLine(xaxis, legendFn, seriesFn){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChartq'))
            // 绘制图表
            let options={
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
            }
            myChart.setOption(options)
            myChart.resize()
        },
        getAxisLine(xaxis, legendFn, seriesFn){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChartq'))
            // 绘制图表
            let options={
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
            }
            myChart.setOption(options)
            myChart.resize()
        },
        // 查看风电场期次详情--echarts--评估预测
        getperiodassessmentEchart(num, from) {
            let that = this
            let url = ''
            if (from === 'function') {
                url = '/predict/api/dqycpg/getPeriodDqycpgChartData'  //--功率预测
            } else {
                url = '/predict/api/dqdlpg/getPeriodDqdlpgChartData'  //--电量预测
            }
            let params = {
                windplantNo: that.windTurbines * 1,
                projectNo: num,
                evaluationIndex: this.indexOption,
                statisticType: this.typeOption,
                beginDataTime: this.pickStartTime,
                endDataTime: this.pickEndTime
            }
            that.$http.get(url, params).then(datas=>{
                if (datas && datas.data) {
                    let legend = []
                    let series = []
                    if (datas.data.dataFormatList.length>0) {
                        datas.data.dataFormatList.forEach(item =>{
                            let seriesObj = {
                                name: item.name,
                                type: 'line',
                                stack: '总量',
                                data: item.data,
                                symbol: 'none'
                            }
                            legend.push(item.name)
                            series.push(seriesObj)
                        })
                    }
                    that.getAxisLine(datas.data.dateList, legend, series)
                    that.loading = false    
                }
            })
        },
        // 查看集电线详情--echarts--评估预测
        getcollectorassessmentEchart(item, from) {
            let that = this
            let url = ''
            if (from === 'function') {
                url = '/predict/api/dqycpg/getCollectingWireDqycpgChartData'  //--功率预测
            } else {
                url = '/predict/api/dqdlpg/getCollectingWireDqdlpgChartData'  //--电量预测
            }
            let params = {
                windplantNo: that.windTurbines * 1,
                projectNo: item.projectNo,
                collectorwireNo: item.collectorwireNo,
                evaluationIndex: this.indexOption,
                statisticType: this.typeOption,
                beginDataTime: this.pickStartTime,
                endDataTime: this.pickEndTime
            }
            that.$http.get(url, params).then(datas=>{
                if (datas && datas.data) {
                    let legend = []
                    let series = []
                    if (datas.data.dataFormatList.length>0) {
                        datas.data.dataFormatList.forEach(item =>{
                            let seriesObj = {
                                name: item.name,
                                type: 'line',
                                stack: '总量',
                                data: item.data,
                                symbol: 'none'
                            }
                            legend.push(item.name)
                            series.push(seriesObj)
                        })
                    }
                    that.getAxisLine(datas.data.dateList, legend, series)
                    that.loading = false    
                }
            })
        },
        //查看风机详情--echarts--评估预测
        getWrieassessmentCharts(num, from) {
            let that = this
            let url = ''
            if (from === 'function') {
                url = '/predict/api/dqycpg/getFanDqycpgChartData'  //--功率预测
            } else {
                url = '/predict/api/dqdlpg/getFanDqdlpgChartData'  //--电量预测
            }
            let params = {
                windplantNo: that.windTurbines * 1,
                wtgNo: num,
                evaluationIndex: this.indexOption,
                statisticType: this.typeOption,
                beginDataTime: this.pickStartTime,
                endDataTime: this.pickEndTime
            }
            that.$http.get(url, params).then(datas=>{
                if (datas && datas.data) {
                    let legend = []
                    let series = []
                    if (datas.data.dataFormatList.length>0) {
                        datas.data.dataFormatList.forEach(item =>{
                            let seriesObj = {
                                name: item.name,
                                type: 'line',
                                stack: '总量',
                                data: item.data,
                                symbol: 'none'
                            }
                            legend.push(item.name)
                            series.push(seriesObj)
                        })
                    }
                    that.getLine(datas.data.dateList, legend, series)
                    that.loading = false    
                }
            })
        },
        // 获取期次、集电线、风机表格数据--评估预测
        getTableassessmentDetailData(num, from) {
            let that = this
            let url = ''
            if (from === 'function') {
                url = '/predict/api/dqycpg/getPeriodDqycpgTableData'  //--功率预测
            } else {
                url = '/predict/api/dqdlpg/getPeriodDqdlpgTableData'  //--电量预测
            }
            let params = {
                windplantNo: that.windTurbines * 1,
                projectNo: num,
                evaluationIndex: this.indexOption,
                statisticType: this.typeOption,
                beginDataTime: this.pickStartTime,
                endDataTime: this.pickEndTime
            }
            let paramsv = that.parseParam(params)
            that.$http.post(url, paramsv).then(datas =>{
                if (datas && datas.rows.length>0) {
                    this.tableData = datas.rows
                }
                that.loading = false
            })
        },
        getCollectassessmentTable(item, from) {
            let that = this
            let url = ''
            if (from === 'function') {
                url = '/predict/api/dqycpg/getCollectingWireDqycpgTableData'  //--功率预测
            } else {
                url = '/predict/api/dqdlpg/getCollectingWireDqdlpgTableData'  //--电量预测
            }
            let params = {
                windplantNo: that.windTurbines * 1,
                projectNo: item.projectNo,
                collectorwireNo: item.collectorwireNo,
                evaluationIndex: this.indexOption,
                statisticType: this.typeOption,
                beginDataTime: this.pickStartTime,
                endDataTime: this.pickEndTime
            }
            let paramsv = that.parseParam(params)
            that.$http.post(url, paramsv).then(datas =>{
                if (datas && datas.rows.length>0) {
                    this.tableData = datas.rows
                }
                that.loading = false
            })
        },
        getWrieassessmentTable(num, from) {
            let that = this
            let url = ''
            if (from === 'function') {
                url = '/predict/api/dqycpg/getFanDqycpgTableData'  //--功率预测
            } else {
                url = '/predict/api/dqdlpg/getFanDqdlpgTableData'  //--电量预测
            }
            let params = {
                windplantNo: that.windTurbines,
                wtgNo: num.toString(),
                evaluationIndex: this.indexOption,
                statisticType: this.typeOption,
                beginDataTime: this.pickStartTime,
                endDataTime: this.pickEndTime
            }
            let paramsv = that.parseParam(params)
            that.$http.post(url, paramsv).then(datas =>{
                if (datas && datas.rows.length>0) {
                    this.tableData = datas.rows
                }
                that.loading = false
            })
        }
    }
}
</script>

<style lang="less">
.framDialog{
    .el-dialog{
        margin-top: 3vh !important;
        .el-dialog__footer{
            text-align: center;
            .el-button{
                background:#5997BE;
                color:#fff;
                height: 30px;
                padding-top: 8px;
            }
        }
    }
    .tableDetail{
        margin-top: 10px;
        .el-table td, .el-table th{
            padding:6px 0 !important;
        }
        .el-table{
            .el-table__body-wrapper{
                max-height:177px;
                overflow-y: auto;
            }
        }
    }
}
</style>