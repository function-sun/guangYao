<template>
  <div class="electricPage">
        <el-row class="electricMain">
            <el-col :span="3" class="electricMain_left">
                <el-menu
                default-active="1"
                @select="handleSelect"
                class="el-menu-vertical-demo"
                background-color="#F9F9F9"
                text-color="#7E7C7C"
                active-text-color="#5997BE">
                <el-menu-item v-for="(item, idx) in electricData" :key="idx" :index="(idx +1).toString()">
                    <span slot="title">{{item}}</span>
                </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="21" class="electricMain_right">
                <span class="titleSty">{{showTitle}}</span>
                <div class="filterRow" v-if="!isShowDetail">
                    <span style="margin-top: 3px;">风电场：</span>
                    <el-select v-model="windTurbines" placeholder="请选择" @change="changePlanNo">
                        <el-option
                        v-for="item in windTurbinedata"
                        :key="item.windplantNo"
                        :label="item.name"
                        :value="item.windplantNo">
                        </el-option>
                    </el-select>
                    <!-- <span style="margin-top: 3px;" v-if="elepreLeftMeun === 2">模型：</span>
                    <el-select v-model="chooseMoudel" placeholder="请选择" @change="changeModuelNo" v-if="elepreLeftMeun === 2">
                        <el-option
                        v-for="item in ModuelList"
                        :key="item.modelNo"
                        :label="item.itemName"
                        :value="item.modelNo">
                        </el-option>
                    </el-select> -->
                    <span style="margin-top: 3px;" v-if="elepreLeftMeun === 2">类型：</span>
                    <el-select v-model="typeOption" placeholder="请选择" @change="changetypeNo" v-if="elepreLeftMeun === 2">
                        <el-option
                        v-for="item in typeList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <span style="margin-top: 3px;" v-if="elepreLeftMeun === 2">指标：</span>
                    <el-select v-model="indexOption" placeholder="请选择" @change="changeIndexNo" v-if="elepreLeftMeun === 2">
                        <el-option
                        v-for="item in indexList"
                        :disabled="item.disabled"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <span style="margin-top: 3px;">时间：</span>
                    <el-date-picker
                        v-model="pickerTime"
                        type="datetimerange"
                        :picker-options="pickerOptions"
                        :clearable='false'
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                    <el-button style="margin-left: 10px;" @click="getAllData">搜索</el-button>
                    <el-button style="margin-left: 10px;" @click="deleteAll">重置</el-button>
                </div>
                <div class="echartsTable">
                    <line-chart-go ref="lineChartsgo" fromPredPage="electric" :pickStartTime="pickStartTime" :pickEndTime="pickEndTime" :windTurbines="windTurbines" @showDetail="showDetail" :loading="loading" :preLeftMeun="elepreLeftMeun" :columData="columData" :tableData="tableData" v-if="elepreLeftMeun === 1"></line-chart-go>
                    <histogram-chart ref="hisCharts" fromPredPage="electric" :pickStartTime="pickStartTime" :pickEndTime="pickEndTime" :typeOption="typeOption" :indexOption="indexOption" :windTurbines="windTurbines" @showDetail="showDetail" :loading="loading" :preLeftMeun="elepreLeftMeun" :columData="columData" :tableData="tableData" v-if="elepreLeftMeun === 2"></histogram-chart>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import LineChartGo from '../components/LineChart_gongLv.vue'
import histogramChart from '../components/histogramChart.vue'
export default {
    name:'elepredictionIndex',
    components: {
        LineChartGo,
        histogramChart
    },
    props:{
        fromPredPage:{
            type: String,
            default: ''
        }
    },
    data () {
      return {
        loading:false,
            electricData: [],
            windTurbines:'1',
            chooseMoudel:'', // 模型
            ModuelList: [], 
            windplantNum:1, // 风电场对应的num
            modelNoFN:0, // 模型对应的num
            pickerTime: [], //时间
            pickStartTime: '',
            pickEndTime: '',
            showTitle:'短期电量预测',
            elepreLeftMeun:1, // 侧边栏对应num
            columData: [],
            tableData: [],
            isShowDetail:false,
            collectorAllWind: [],
            WturAllData: [],
            typeOption: 0, //类型
            indexOption: 0, // 指标
            typeList:[],
            indexList:[],
            windTurbinedata:[],
            pickerOptions:{
                disabledDate(time) {
                    let curDate = (new Date()).getTime();
                    let three = 15 * 24 * 3600 * 1000;
                    let threeMonths = curDate - three;
                    let threeMonthss = curDate + three;
                    return time.getTime() > threeMonthss || time.getTime() < threeMonths;
                }
            }
      }
    },
    created() {
        this.electricData = ['短期电量预测','短期电量评估','超短期电量预测','超短期电量预测评估','民用电量预测','全省供电能力预测','中长期电量预测']
        this.typeList = [
            {
                label: '日统计',
                value: 0
            },
            {
                label: '月统计',
                value: 1
            }
        ]
        this.indexList = [
            {
                label: '均方根误差',
                value: 0
            },
            {
                label: '准确率',
                value: 1
            },
            {
                label: '相关系数',
                value: 2
            },
            {
                label: '平均绝对误差',
                value: 3
            },
            {
                label: '偏差',
                value: 4
            },
            {
                label: '合格率',
                value: 5,
                disabled: true
            },
            {
                label: '上传率',
                value: 6,
                disabled: true
            },
            {
                label: '准确率考核电量',
                value: 7,
                disabled: true
            },
            {
                label: '合格率考核电量',
                value: 8,
                disabled: true
            }
        ]
        this.init()
    },
    methods:{
      init() {
        this.pickerTime = []
        this.windTurbines = '1'
        this.windplantNum = 1
        this.showTitle = '短期电量预测'
        this.getListOption()
        this.getTableColumData(this.elepreLeftMeun)
        this.getChartsData(this.elepreLeftMeun)
        this.getPeriod(this.elepreLeftMeun)
        this.getdetailClumData()
      },
      // 获取风电场列表
    getListOption() {
        let that = this
        let url = '/predict/api/share/getWindplantList'
        that.$http.get(url).then(datas=>{
            if (datas && datas.data && datas.data.list.length>0) {
                let arr = []
                datas.data.list.forEach(item =>{
                    let arrObj = {
                        name: item.name,
                        windplantNo: item.windplantNo.toString()
                    }
                    arr.push(arrObj)
                })
                that.windTurbinedata = arr
            }
        })
    },
      showDetail(val) {
            this.isShowDetail = val
    },
    handleSelect(index) {
        this.pickerTime = []
        this.pickStartTime = ''
        this.pickEndTime = ''
        this.electricData.forEach((item, idx) =>{
            if (index === (idx+1).toString()) {
                this.showTitle = item
            }
        })
        this.isShowDetail = false
        if (!this.isShowDetail) {
            if (this.elepreLeftMeun === 1) {
                this.$refs.lineChartsgo.showDetail = false
            } else if(this.elepreLeftMeun === 2) {
                this.$refs.hisCharts.showDetail = false
            }
        }
        this.elepreLeftMeun = index * 1
        this.getPeriod(this.elepreLeftMeun)
        if (this.elepreLeftMeun === 1) {
            this.getdetailClumData()
            this.getTableColumData(this.elepreLeftMeun)
            this.getChartsData(this.elepreLeftMeun)
        } else if (this.elepreLeftMeun === 2) {
            this.getdetailClumData()
            this.getHisChartsData(this.elepreLeftMeun)
            this.getTableColumData(this.elepreLeftMeun)
        }
    },
        // 获取echarts图数据--短期电量预测
        getChartsData(leftMenuNum) {
            let that = this
            let url = ''
            if (leftMenuNum === 1) {
                url = '/predict/api/dqdlyc/getWindFarmDqdlycChartData'
            }
            let params = {
                windplantNo: that.windplantNum,
                "params[beginDataTime]": that.pickStartTime,
                "params[endDataTime]": that.pickEndTime
            }
            that.$http.get(url,params).then(datas=>{
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
                    if (leftMenuNum === 1) {
                        this.$refs.lineChartsgo.getLine(datas.data.dateList, legend, series)
                    }
                }
            })
        },
        // 获取echarts柱状图数据--短期电量评估
        getHisChartsData(leftMenuNum) {
            let that = this
            let url = ''
            if (leftMenuNum === 2) {
                url = '/predict/api/dqdlpg/getWindFarmDqdlpgChartData'
            }
            let params = {
                windplantNo: that.windplantNum,
                evaluationIndex: that.indexOption,
                statisticType: that.typeOption,
                beginDataTime: that.pickStartTime,
                endDataTime: that.pickEndTime
            }
            that.$http.get(url,params).then(datas=>{
                if (datas && datas.data) {
                    let legend = []
                    let series = []
                    if (datas.data.dataFormatList.length>0) {
                        datas.data.dataFormatList.forEach(item =>{
                            let seriesObj = {
                                name: item.name,
                                type: 'bar',
                                data: item.data
                            }
                            legend.push(item.name)
                            series.push(seriesObj)
                        })
                    }
                    this.$refs.hisCharts.getHistogram(datas.data.dateList, legend, series)
                }
            })
        },
        getAllData() {
            console.log(this.pickerTime)
            this.pickStartTime = this.pickerTime.length>0 ? this.getTime(this.pickerTime[0]) : ''
            this.pickEndTime = this.pickerTime.length>0 ? this.getTime(this.pickerTime[1]) : ''
            if (this.elepreLeftMeun === 1) {
                this.getChartsData(this.elepreLeftMeun)
            } else if (this.elepreLeftMeun === 2) {
                this.getHisChartsData(this.elepreLeftMeun)
            }
            this.getTableColumData(this.elepreLeftMeun)
        },
        //转换时间
        getTime(date){
            var y = date.getFullYear();  
            var m = date.getMonth() + 1;  
            m = m < 10 ? ('0' + m) : m;  
            var d = date.getDate();  
            d = d < 10 ? ('0' + d) : d;  
            var h = date.getHours();  
            h=h < 10 ? ('0' + h) : h;  
            var minute = date.getMinutes();  
            minute = minute < 10 ? ('0' + minute) : minute;  
            // var second=date.getSeconds();  
            // second=second < 10 ? ('0' + second) : second;  
            // return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second; 
            let timeF = ''
            if (this.elepreLeftMeun === 2) {
                timeF = y + '-' + m + '-' + d
                return timeF
            } else {
                timeF = y + '-' + m + '-' + d+' '+h+':'+minute 
                return this.changePickDate(timeF)
            }
        },
        changePickDate(val) {
            let endss = val.substring(val.length-2, val.length) * 1
            let startTime = val.substring(0, val.length-2)
            let allTime = ''
            if (0 <= endss &&  endss < 10) {
                allTime = startTime + '00'
            } else if (10 <= endss &&  endss  < 20) {
                allTime = startTime + '10'
            } else if (20 <= endss &&  endss  < 30) {
                allTime = startTime + '20'
            } else if (30 <= endss &&  endss  < 40) {
                allTime = startTime + '30'
            } else if (40 <= endss &&  endss  < 50) {
                allTime = startTime + '40'
            } else if (50 <= endss &&  endss  < 60) {
                allTime = startTime + '50'
            }
            console.log(allTime)
            return allTime
        },
        deleteAll() {
            this.pickerTime = []
            this.pickStartTime = ''
            this.pickEndTime = ''
            this.windTurbines = '1'
            this.windplantNum = 1
            // if (this.preLeftMeun === 3) {
            //     this.getModuelList()
            // } else if (this.preLeftMeun < 3) {
            //     this.getTableColumData(this.preLeftMeun)
            //     this.getChartsData(this.preLeftMeun)
            // }
        },
        //改变风电场对应值
        changePlanNo(val) {
            this.windplantNum = val
            if (this.elepreLeftMeun === 1) {
                this.getPeriod(val)
            }
        },
        changetypeNo(val) {
            this.typeOption = val
        },
        changeIndexNo(val) {
            this.indexOption = val
        },
        // 根据风电场号查询期次
        getPeriod() {
            let that = this
            this.collectorAllWind = []
            this.WturAllData = []
            let url = '/predict/api/share/getWindplantprojectListByWindplantNo'
            let params = {
                windplantNo: that.windTurbines
            }
            that.$http.get(url, params).then(datas=>{
                if (datas && datas.data && datas.data.list.length>0) {
                    let periodDataAll = datas.data.list
                    let userArr = []
                    periodDataAll.forEach(item =>{
                        userArr.unshift(item)
                        that.getCollector(item.projectNo)
                    })
                    if (that.elepreLeftMeun === 1) {
                        that.$refs.lineChartsgo.periodData = userArr
                    } else if (that.elepreLeftMeun === 2) {
                        that.$refs.hisCharts.periodData = userArr
                    }
                }
            })
        },
        // 根据期次查询集电线
        getCollector(num) {
            let that = this
            let url = '/predict/api/share/getCollectorwireprojectListByProjectNo'
            let params = {
                windplantNo: that.windTurbines,
                projectNo: num.toString()
            }
            that.$http.get(url, params).then(datas=>{
                if (datas && datas.data && datas.data.list.length>0) {
                    let periodDataAll = datas.data.list
                    periodDataAll.forEach(item =>{
                        that.collectorAllWind.push(item)
                        that.getWturAll(num, item.collectorwireNo)
                    })
                    if (that.elepreLeftMeun === 1) {
                        that.$refs.lineChartsgo.collectorAllWind = that.collectorAllWind
                    } else if (that.elepreLeftMeun === 2) {
                        that.$refs.hisCharts.collectorAllWind = that.collectorAllWind
                    }
                }
            })
        },
        // 根据集电线查询风机
        getWturAll(num, num2) {
            let that = this
            let url = '/predict/api/share/getWturListByProjectNo'
            let params = {
                windplantNo: that.windTurbines,
                projectNo: num.toString(),
                collectorwireNo: num2.toString()
            }
            that.$http.get(url, params).then(datas=>{
                if (datas && datas.data && datas.data.list.length>0) {
                    let WturAll = datas.data.list
                    let obj = {
                        code: num2,
                        list: WturAll
                    }
                    that.WturAllData.push(obj)
                    if (that.elepreLeftMeun === 1) {
                        that.$refs.lineChartsgo.WturAllData = that.WturAllData
                    } else if (that.elepreLeftMeun === 2) {
                        that.$refs.hisCharts.WturAllData = that.WturAllData
                    }
                }
            })
        },
        changeModuelNo(val) {
            this.modelNoFN = val
        },
        // 获取表格数据--短期电量预测
        getTableColumData(leftMenuNum) {
            let that = this
            that.loading = true
            this.columData = []
            let url = ''
            if (leftMenuNum === 1 || leftMenuNum === 2) {
                url = '/predict/api/share/getWindFarmModel' // 表头服务                
            }
            let params = {
                windplantNo: that.windplantNum
            }
            that.$http.get(url, params).then(datas =>{
                if (datas && datas.data && datas.data.list) {
                    let column = []
                    datas.data.list.dataTime = '时间'
                    // datas.data.list.totalPower = ''
                    for(let item in datas.data.list){
                        let clumnObj = {
                            label: datas.data.list[item],
                            value: item
                        }
                        column.push(clumnObj)
                    }
                    that.columData = column
                }
                that.getTableData(leftMenuNum)
            })
        },
        getTableData(leftMenuNum) {
            let that = this
            that.tableData = []
            let url = ''
            if (leftMenuNum === 1) {
                url = '/predict/api/dqdlyc/getWindFarmDqdlycTableData' // 列表数据服务
            } else if (leftMenuNum === 2) {
                url = '/predict/api/dqdlpg/getWindFarmDqdlpgTableData' // 列表数据服务
            }
            let params = {
                windplantNo: that.windplantNum.toString(),
                beginDataTime: that.pickStartTime,
                endDataTime: that.pickEndTime
            }
            if(leftMenuNum === 2) {
                params.evaluationIndex = that.indexOption
                params.statisticType = that.typeOption
            }
            let paramsv = that.parseParam(params)
            that.$http.post(url, paramsv).then(datas =>{
                if (datas && datas.rows.length>0) {
                    that.tableData = datas.rows
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
        // 获取期次、集电线、风机详情的表头
        getdetailClumData() {
            let that = this
            let url = '/predict/api/share/getPeriodModel'
            let params = {
                windplantNo: that.windplantNum
            }
            that.$http.get(url, params).then(datas =>{
                if (datas && datas.data && datas.data.list) {
                    let column = []
                    datas.data.list.dataTime = '时间'
                    // datas.data.list.totalPower = ''
                    for(let item in datas.data.list){
                        let clumnObj = {
                            label: datas.data.list[item],
                            value: item
                        }
                        column.push(clumnObj)
                    }
                    if (that.elepreLeftMeun === 1) {
                        that.$refs.lineChartsgo.detailClum = column
                    } else if (that.elepreLeftMeun === 2) {
                        that.$refs.hisCharts.detailClum = column
                    }
                }
            })
        },
    }
}
</script>

<style lang="less">
.electricPage{
    .electricMain{
        height:650px;
        .electricMain_left{
            height:100%;
            background: #F9F9F9;
        }
        .electricMain_right{
            padding:20px;
            background: #fff;
            .titleSty{
                border-left: 4px solid #5997BE;
                padding-left: 5px;
                font-size: 14px;
            }
            .filterRow{
                margin-top: 20px;
                .el-select{
                    width: 150px;
                    margin-right:10px;
                    .el-input__inner{
                        height:30px;
                    }
                    .el-input__suffix{
                        .el-select__caret{
                            line-height:30px;
                        }
                    }
                }
                .el-date-editor{
                    height: 30px;
                    padding: 0px 10px;
                    .el-input__inner{
                        height:30px;
                    }
                    .el-input__icon{
                        line-height:30px !important;
                    }

                }
                .el-button{
                    background:#5997BE;
                    color:#fff;
                    height: 30px;
                    padding-top: 8px;
                }
            }
        }
    }
}
</style>