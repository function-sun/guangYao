<template>
  <div class="windframdetail">
      <div class="detailPic">
          <div class="niushoushanF" v-if="windTurbines==='1'">
                <span v-for="(item, index) in periodData" :key="index" :class="'zhubian'+Number(index+1).toString()" class="commonZhu" @click="fromPredPage === 'function' ? watchDetail(item) : watchElectricDetail(item)"></span>
                <span v-for="(iten, index) in collectorAllWind" :key="index+'0'" :class="'jidianxain'+Number(index+1).toString()" @click="fromPredPage === 'function' ? watchcollectorDetail(iten) : getelecollectorEchart(iten)" class="commonJidian"></span>
                <div class="niushoushanF_9">
                    <span v-for="(item, index) in niuArr9" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                       <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="niushoushanF_8">
                    <span v-for="(item, index) in niuArr8" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="niushoushanF_7">
                    <span v-for="(item, index) in niuArr7" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="niushoushanF_6">
                    <span v-for="(item, index) in niuArr6" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="niushoushanF_5">
                    <span v-for="(item, index) in niuArr5" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="niushoushanF_4">
                    <span v-for="(item, index) in niuArr4" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="niushoushanF_3">
                    <span v-for="(item, index) in niuArr3" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="niushoushanF_2">
                    <span v-for="(item, index) in niuArr2" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="niushoushanF_1">
                    <span v-for="(item, index) in niuArr1" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
          </div>
          <div class="qinshanshanF" v-else-if="windTurbines==='2'">
                <span v-for="(item, index) in periodData" :key="index" :class="'zhubian'+Number(index+1).toString()" class="commonZhu" @click="fromPredPage === 'function' ? watchDetail(item) : watchElectricDetail(item)"></span>
                <span v-for="(iten, index) in collectorAllWind" :key="index+'0'" :class="'jidianxain'+Number(index+1).toString()" @click="fromPredPage === 'function' ? watchcollectorDetail(iten) : getelecollectorEchart(iten)" class="commonJidian"></span>
                <div class="qinshanshanF_1">
                    <span v-for="(item, index) in qingArr1" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="qinshanshanF_2">
                    <span v-for="(item, index) in qingArr2" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="qinshanshanF_3">
                    <span v-for="(item, index) in qingArr2All" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="qinshanshanF_4">
                    <span v-for="(item, index) in qingArr3All" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="qinshanshanF_5">
                    <span v-for="(item, index) in qingArr4All" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="qinshanshanF_6">
                    <span v-for="(item, index) in qingArr3" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="qinshanshanF_7">
                    <span v-for="(item, index) in qingArr4" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="qinshanshanF_8">
                    <span v-for="(item, index) in qingArr5All" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="qinshanshanF_9">
                    <span v-for="(item, index) in qingArr6All" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="qinshanshanF_10">
                    <span v-for="(item, index) in qingArr6" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="qinshanshanF_11">
                    <span v-for="(item, index) in qingArr5" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
          </div>
          <div class="shibanquanF" v-else-if="windTurbines==='3'">
                <span v-for="(item, index) in periodData" :key="index" :class="'zhubian'+Number(index+1).toString()" class="commonZhu" @click="fromPredPage === 'function' ? watchDetail(item) : watchElectricDetail(item)"></span>
                <span v-for="(iten, index) in collectorAllWind" :key="index+'0'" :class="'jidianxain'+Number(index+1).toString()" @click="fromPredPage === 'function' ? watchcollectorDetail(iten) : getelecollectorEchart(iten)" class="commonJidian"></span>
                <div class="shibanquanF_1">
                    <span v-for="(item, index) in shiArr1" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="shibanquanF_2">
                    <span v-for="(item, index) in shiArr2" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="shibanquanF_3">
                    <span v-for="(item, index) in shiArr3" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="shibanquanF_4">
                    <span v-for="(item, index) in shiArr4" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="shibanquanF_5">
                    <span v-for="(item, index) in shiArr5" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="shibanquanF_6">
                    <span v-for="(item, index) in shiArr6" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="shibanquanF_7">
                    <span v-for="(item, index) in shiArr7" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="shibanquanF_8">
                    <span v-for="(item, index) in shiArr8" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="shibanquanF_9">
                    <span v-for="(item, index) in shiArr9" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="shibanquanF_10">
                    <span v-for="(item, index) in shiArr10" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="shibanquanF_11">
                    <span v-for="(item, index) in shiArr11" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
          </div>
          <div class="xiangshanF" v-else-if="windTurbines==='4'">
                <span v-for="(item, index) in periodData" :key="index" :class="'zhubian'+Number(index+1).toString()" class="commonZhu" @click="fromPredPage === 'function' ? watchDetail(item) : watchElectricDetail(item)"></span>
                <span v-for="(iten, index) in collectorAllWind" :key="index+'0'" :class="'jidianxain'+Number(index+1).toString()" @click="fromPredPage === 'function' ? watchcollectorDetail(iten) : getelecollectorEchart(iten)" class="commonJidian"></span>
                <div class="xiangshanF_1">
                    <span v-for="(item, index) in xiangArr1All" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="xiangshanF_2">
                    <span v-for="(item, index) in xiangArr2All" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="xiangshanF_3">
                    <span v-for="(item, index) in xiangArr1" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="xiangshanF_4">
                    <span v-for="(item, index) in xiangArr2" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="xiangshanF_5">
                    <span v-for="(item, index) in xiangArr3" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="xiangshanF_6">
                    <span v-for="(item, index) in xiangArr4" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
          </div>
          <div class="mahuangshanF" v-else-if="windTurbines==='5'">
                <span v-for="(item, index) in periodData" :key="index" :class="'zhubian'+Number(index+1).toString()" class="commonZhu" @click="fromPredPage === 'function' ? watchDetail(item) : watchElectricDetail(item)"></span>
                <span v-for="(iten, index) in collectorAllWind" :key="index+'0'" :class="'jidianxain'+Number(index+1).toString()" @click="fromPredPage === 'function' ? watchcollectorDetail(iten) : getelecollectorEchart(iten)" class="commonJidian"></span>
                <div class="mahuangshanF_1">
                    <span v-for="(item, index) in maArr1" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="mahuangshanF_2">
                    <span v-for="(item, index) in maArr2" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="mahuangshanF_3">
                    <span v-for="(item, index) in maArr3" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
                <div class="mahuangshanF_4">
                    <span v-for="(item, index) in maArr4" :key="index" class="frams" @click="fromPredPage === 'function' ? watchWrieDetail(item) : watcheleWrieDetail(item)">
                        <span>#{{item.wtgNo}}</span>
                    </span>
                </div>
          </div>
      </div>
      <fram-dia ref="framDialog" :fromPredPage="fromPredPage" :pickStartTime="pickStartTime" :pickEndTime="pickEndTime" :typeOption="typeOption" :indexOption="indexOption" :columData="columData" :windTurbines="windTurbines"></fram-dia>
  </div>
</template>

<script>
import framDia from './windFramDialog.vue'
export default {
    components:{
        framDia
    },
    props:{
        preLeftMeun:{
            type: Number,
            default: 0
        },
        windTurbines:{ //1-牛首山 2-青山 3-石板全 4-香山 5-麻黄山
            type: String,
            default: '1'
        },
        periodData:{ //期次数据
            type:Array,
            default: function() {
                return []
            }
        },
        fromPredPage:{
            type: String,
            default: ''
        },
        WturAllData:{ //风机数据
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
            detailClum:[],
            collectorAllWind:[],
            niuArr1:[],
            niuArr2:[],
            niuArr3:[],
            niuArr4:[],
            niuArr5:[],
            niuArr6:[],
            niuArr7:[],
            niuArr8:[],
            niuArr9:[],
            qingArr1All:[],
            qingArr2All:[],
            qingArr3All:[],
            qingArr4All:[],
            qingArr5All:[],
            qingArr6All:[],
            qingArr7All:[],
            qingArr8All:[],
            qingArr1:[],
            qingArr2:[],
            qingArr3:[],
            qingArr4:[],
            qingArr5:[],
            qingArr6:[],
            shiArr1:[],
            shiArr2:[],
            shiArr3:[],
            shiArr4:[],
            shiArr5:[],
            shiArr6:[],
            shiArr7:[],
            shiArr8:[],
            shiArr9:[],
            shiArr10:[],
            shiArr11:[],
            xiangArr1All:[],
            xiangArr2All:[],
            xiangArr3All:[],
            xiangArr4All:[],
            xiangArr1:[],
            xiangArr2:[],
            xiangArr3:[],
            xiangArr4:[],
            maArr1:[],
            maArr2:[],
            maArr3:[],
            maArr4:[]
        }
    },
    mounted() {
        this.distribution()
    },
    methods:{
        // 分布风机情况
        distribution() {
            let that = this
            that.WturAllData.forEach(item =>{
                if (item.code) {
                    if (that.windTurbines === '1') {
                        that['niuArr'+item.code] = item.list
                    } else if (that.windTurbines === '2') {
                        that['qingArr'+item.code+'All'] = item.list
                    } else if (that.windTurbines === '3') {
                        that['shiArr'+item.code] = item.list
                    } else if (that.windTurbines === '4') {
                        that['xiangArr'+item.code+'All'] = item.list
                    } else if (that.windTurbines === '5') {
                        that['maArr'+item.code] = item.list
                    }
                }
            })
            if (that.windTurbines === '2') {
                that.qingArr1 = that.qingArr1All.slice(0, 1)
                that.qingArr2 = that.qingArr1All.slice(1, that.qingArr1All.length+1)
                that.qingArr3 = that.qingArr7All.slice(0, 5)
                that.qingArr4 = that.qingArr7All.slice(5, that.qingArr7All.length+1)
                that.qingArr5 = that.qingArr8All.slice(0, 1)
                that.qingArr6 = that.qingArr8All.slice(1, that.qingArr8All.length+1)
            } else if (that.windTurbines === '4') {
                that.xiangArr1 = that.xiangArr3All.slice(0, 11)
                that.xiangArr2 = that.xiangArr3All.slice(11, that.xiangArr3All.length+1)
                that.xiangArr3 = that.xiangArr4All.slice(0, 5)
                that.xiangArr4 = that.xiangArr4All.slice(5, that.xiangArr4All.length+1)
            }
        },
        // 查看风电场期次详情
        watchDetail(item) {
            this.$refs.framDialog.dialogVisible = true
            this.$refs.framDialog.title = item.projectName
            this.$refs.framDialog.loading = true
            if (this.preLeftMeun === 2) {
                this.$refs.framDialog.getperiodEchart(item.projectNo, this.fromPredPage)
            } else if (this.preLeftMeun === 4) {
                this.$refs.framDialog.getperiodassessmentEchart(item.projectNo, this.fromPredPage)
            }
            this.$refs.framDialog.detailClum = this.detailClum
            if (this.detailClum.length>0) {
                if (this.preLeftMeun === 2) {
                    this.$refs.framDialog.getTableDetailData(item.projectNo, this.fromPredPage)
                } else if (this.preLeftMeun === 4) {
                    this.$refs.framDialog.getTableassessmentDetailData(item.projectNo, this.fromPredPage)
                }
                
            }
        },
        // 查看集电线详情
        watchcollectorDetail(item) {
            this.$refs.framDialog.dialogVisible = true
            this.$refs.framDialog.title = item.collectorwireNo + '号集电线'
            this.$refs.framDialog.loading = true
            if (this.preLeftMeun === 2) {
                this.$refs.framDialog.getcollectorEchart(item, this.fromPredPage)
            } else if (this.preLeftMeun === 4) {
                this.$refs.framDialog.getcollectorassessmentEchart(item, this.fromPredPage)
            }
            this.$refs.framDialog.detailClum = this.detailClum
            if (this.detailClum.length>0) {
                if (this.preLeftMeun === 2) {
                    this.$refs.framDialog.getCollectTable(item, this.fromPredPage)
                } else if (this.preLeftMeun === 4) {
                    this.$refs.framDialog.getCollectassessmentTable(item, this.fromPredPage)
                }
            }
        },
        // 查看风机详情
        watchWrieDetail(item) {
            this.$refs.framDialog.dialogVisible = true
            this.$refs.framDialog.title = item.wtgNo + '号风机'
            this.$refs.framDialog.loading = true
            if (this.preLeftMeun === 2) {
                this.$refs.framDialog.getWrieCharts(item.wtgNo, this.fromPredPage)
            } else if (this.preLeftMeun === 4) {
                this.$refs.framDialog.getWrieassessmentCharts(item.wtgNo, this.fromPredPage)
            }            
            this.$refs.framDialog.detailClum = this.detailClum
            if (this.detailClum.length>0) {
                if (this.preLeftMeun === 2) {
                    this.$refs.framDialog.getWrieTable(item.wtgNo, this.fromPredPage)
                } else if (this.preLeftMeun === 4) {
                    this.$refs.framDialog.getWrieassessmentTable(item.wtgNo, this.fromPredPage)
                }
            }
        },
        // 查看风电场期次详情--电量
        watchElectricDetail(item) {
            this.$refs.framDialog.dialogVisible = true
            this.$refs.framDialog.title = item.projectName
            this.$refs.framDialog.loading = true
            if (this.preLeftMeun === 1) {
                this.$refs.framDialog.getperiodEchart(item.projectNo, this.fromPredPage)
            } else if (this.preLeftMeun === 2) {
                this.$refs.framDialog.getperiodassessmentEchart(item.projectNo, this.fromPredPage)
            }
            this.$refs.framDialog.detailClum = this.detailClum
            if (this.detailClum.length>0) {
                if (this.preLeftMeun === 1) {
                    this.$refs.framDialog.getTableDetailData(item.projectNo, this.fromPredPage)
                } else if (this.preLeftMeun === 2) {
                    this.$refs.framDialog.getTableassessmentDetailData(item.projectNo, this.fromPredPage)
                }
                
            }
        },
        // 查看集电线详情--电量
        getelecollectorEchart(item) {
            this.$refs.framDialog.dialogVisible = true
            this.$refs.framDialog.title = item.collectorwireNo + '号集电线'
            this.$refs.framDialog.loading = true
            if (this.preLeftMeun === 1) {
                this.$refs.framDialog.getcollectorEchart(item, this.fromPredPage)
            } else if (this.preLeftMeun === 2) {
                this.$refs.framDialog.getcollectorassessmentEchart(item, this.fromPredPage)
            }
            this.$refs.framDialog.detailClum = this.detailClum
            if (this.detailClum.length>0) {
                if (this.preLeftMeun === 1) {
                    this.$refs.framDialog.getCollectTable(item, this.fromPredPage)
                } else if (this.preLeftMeun === 2) {
                    this.$refs.framDialog.getCollectassessmentTable(item, this.fromPredPage)
                }
            }
        },
        // 查看风机详情--电量
        watcheleWrieDetail(item) {
            this.$refs.framDialog.dialogVisible = true
            this.$refs.framDialog.title = item.wtgNo + '号风机'
            this.$refs.framDialog.loading = true
            if (this.preLeftMeun === 1) {
                this.$refs.framDialog.getWrieCharts(item.wtgNo, this.fromPredPage)
            } else if (this.preLeftMeun === 2) {
                this.$refs.framDialog.getWrieassessmentCharts(item.wtgNo, this.fromPredPage)
            }            
            this.$refs.framDialog.detailClum = this.detailClum
            if (this.detailClum.length>0) {
                if (this.preLeftMeun === 1) {
                    this.$refs.framDialog.getWrieTable(item.wtgNo, this.fromPredPage)
                } else if (this.preLeftMeun === 2) {
                    this.$refs.framDialog.getWrieassessmentTable(item.wtgNo, this.fromPredPage)
                }
            }
        }
    }
}
</script>

<style lang="less">
.windframdetail{
    .detailfilter{
        padding: 10px;
        width: 1260px;
        border-bottom: 1px solid #5997BE;
        .detailfilter_tip{
            .el-icon-warning::before{
                color: orange;
                font-size: 20px;
            }
        }
        .detailfilter_main{
            margin-left: 21px;
            .qiciPic{
                width:32px;
                height:27px;
                display: inline-block;
                background-size: contain;
                background-repeat: no-repeat;
                background-image: url('../assets/windFramPicture/qiciPic.png');
            }
            .qiciPic1{
                width:32px;
                height:20px;
                display: inline-block;
                background-size: contain;
                background-repeat: no-repeat;
                background-image: url('../assets/windFramPicture/qiciPic2.png');
            }
            .qiciPic2{
                width:25px;
                height:27px;
                display: inline-block;
                background-size: contain;
                background-repeat: no-repeat;
                background-image: url('../assets/windFramPicture/qiciPic3.png');
            }
            .periodS{
                display: inline-block;
                width: 30px;
                height: 17px;
                background: red;
                border-radius: 5px;
            }
            .collectorWireS{
                display: inline-block;
                width: 30px;
                height: 17px;
                background: #f5973c;
                border-radius: 5px;
            }
        }
    }
    .detailPic{
        .commonZhu{
            position: absolute;
            display: inline-block;
            width: 30px;
            height: 17px;
            cursor: pointer;
            background: #d30c0f;
            border-radius: 5px;
        }
        .commonJidian{
            position: absolute;
            display: inline-block;
            width: 30px;
            height: 17px;
            cursor: pointer;
            background: #e76d00;
            border-radius: 5px;
        }
        .niushoushanF{
            width:1260px;
            height:560px;
            background-image: url('../assets/windFramPicture/niushoushan_v.png');
            position: relative;
            .zhubian1{
                top: 202px;
                left: 252px;
            }
            .zhubian2{
                top: 367px;
                left: 253px;
            }
            .jidianxain9{
                top: 160px;
                left: 398px;
            }
            .jidianxain8{
                top: 202px;
                left: 415px;
            }
            .jidianxain7{
                top: 239px;
                left: 415px;
            }
            .jidianxain6{
                top: 278px;
                left: 427px;
            }
            .jidianxain5{
                top: 311px;
                left: 427px;
            }
            .jidianxain4{
                top: 348px;
                left: 427px;
            }
            .jidianxain3{
                top: 386px;
                left: 427px;
            }
            .jidianxain2{
                top: 423px;
                left: 427px;
            }
            .jidianxain1{
                top: 464px;
                left: 427px;
            }
            .niushoushanF_9{
                position:absolute;
                left: 450px;
                top: 20px;
            }
            .niushoushanF_8{
                position:absolute;
                left: 470px;
                top: 78px;
            }
            .niushoushanF_7{
                position:absolute;
                left: 480px;
                top: 137px;
            }
            .niushoushanF_6{
                position:absolute;
                left: 502px;
                top: 195px;
            }
            .niushoushanF_5{
                position:absolute;
                left: 502px;
                top: 254px;
            }
            .niushoushanF_4{
                position:absolute;
                left: 502px;
                top: 317px;
            }
            .niushoushanF_3{
                position:absolute;
                left: 502px;
                top: 377px;
            }
            .niushoushanF_2{
                position:absolute;
                left: 502px;
                top: 439px;
            }
            .niushoushanF_1{
                position:absolute;
                left: 502px;
                top: 498px;
            }
            .frams{
                width:33px;
                height:45px;
                display: inline-block;
                margin-right:8px;
                background-image: url(../assets/windFramPicture/run_Icon.gif);
                span{
                    position: relative;
                    top: 48px;
                    left: 8px;
                    font-size: 14px;
                    font-weight: 600;
                }
            }
        }
        .qinshanshanF{
            width:1260px;
            height:560px;
            background-image: url('../assets/windFramPicture/qingshan_v.png');
            position: relative;
            .zhubian2{
                top: 68px;
                left: 565px
            }
            .zhubian1{
                top: 67px;
                left: 717px;
            }
            .jidianxain8{
                top: 200px;
                left: 1186px
            }
            .jidianxain7{
                top: 107px;
                left: 1099px;
            }
            .jidianxain6{
                top: 369px;
                left: 1185px;
            }
            .jidianxain5{
                top: 448px;
                left: 1186px;
            }
            .jidianxain4{
                top: 448px;
                left: 33px;
            }
            .jidianxain3{
                top: 368px;
                left: 33px;
            }
            .jidianxain2{
                top: 288px;
                left: 33px;
            }
            .jidianxain1{
                top: 109px;
                left: 33px;
            }
            .qinshanshanF_1{
                position:absolute;
                left: 72px;
                top: 144px;
            }
            .qinshanshanF_2{
                position:absolute;
                left: 73px;
                top: 222px;
            }
            .qinshanshanF_3{
                position:absolute;
                left: 76px;
                top: 303px;
            }
            .qinshanshanF_4{
                position:absolute;
                left: 75px;
                top: 382px;
            }
            .qinshanshanF_5{
                position:absolute;
                left: 74px;
                top: 462px;
            }
            .qinshanshanF_6{
                position:absolute;
                left: 896px;
                top: 148px;
            }
            .qinshanshanF_7{
                position:absolute;
                left: 773px;
                top: 222px;
            }
            .qinshanshanF_8{
                position:absolute;
                left: 734px;
                top: 302px;
            }
            .qinshanshanF_9{
                position:absolute;
                left: 734px;
                top: 383px;
            }
            .qinshanshanF_10{
                position:absolute;
                left: 734px;
                top: 463px;
            }
            .qinshanshanF_11{
                position:absolute;
                left: 1144px;
                top: 222px;
            }
            .frams{
                width:33px;
                height:45px;
                display: inline-block;
                margin-right:8px;
                background-image: url(../assets/windFramPicture/run_Icon.gif);
                span{
                    position: relative;
                    top: 51px;
                    left: 0px;
                    font-size: 14px;
                    font-weight: 600;
                }
            }
        }
        .shibanquanF{
            width:1260px;
            height:560px;
            background-image: url('../assets/windFramPicture/shibanquan_v.png');
            position: relative;
            .zhubian3{
                top: 192px;
                left: 536px;
            }
            .zhubian1{
                top: 452px;
                left: 694px;
            }
            .zhubian2{
                top: 192px;
                left: 693px;
            }
            .jidianxain11{
                top: 395px;
                left: 1255px
            }
            .jidianxain10{
                top: 480px;
                left: 1255px;
            }
            .jidianxain9{
                top: 533px;
                left: 715px;
            }
            .jidianxain8{
                top: 309px;
                left: 1249px
            }
            .jidianxain7{
                top: 139px;
                left: 1249px;
            }
            .jidianxain6{
                top: 533px;
                left: 515px;
            }
            .jidianxain5{
                top: 483px;
                left: 63px;
            }
            .jidianxain4{
                top: 393px;
                left: 63px;
            }
            .jidianxain3{
                top: 310px;
                left: 63px;
            }
            .jidianxain2{
                top: 220px;
                left: 63px;
            }
            .jidianxain1{
                top: 132px;
                left: 63px;
            }
            .shibanquanF_1{
                position:absolute;
                left: 5px;
                top: 64px;
            }
            .shibanquanF_2{
                position:absolute;
                left: 5px;
                top: 153px;
            }
            .shibanquanF_3{
                position:absolute;
                left: 5px;
                top: 242px;
            }
            .shibanquanF_4{
                position:absolute;
                left: 5px;
                top: 323px;
            }
            .shibanquanF_5{
                position:absolute;
                left: 5px;
                top: 412px;
            }
            .shibanquanF_6{
                position:absolute;
                left: 5px;
                top: 498px;
            }
            .shibanquanF_7{
                position:absolute;
                left: 825px;
                top: 56px;
                .frams{
                    margin-bottom: 24px;
                }
            }
            .shibanquanF_8{
                position:absolute;
                left: 825px;
                top: 194px;
                .frams{
                    margin-bottom: 24px;
                }
            }
            .shibanquanF_9{
                position:absolute;
                left: 825px;
                top: 323px;
            }
            .shibanquanF_10{
                position:absolute;
                left: 825px;
                top: 414px;
            }
            .shibanquanF_11{
                position:absolute;
                left: 825px;
                top: 498px;
            }
            .frams{
                width:33px;
                height:45px;
                display: inline-block;
                margin-right:8px;
                background-image: url(../assets/windFramPicture/run_Icon.gif);
                span{
                    position: relative;
                    top: 51px;
                    left: 0px;
                    font-size: 14px;
                    font-weight: 600;
                }
            }
        }
        .xiangshanF{
            width:1260px;
            height:560px;
            background-image: url('../assets/windFramPicture/xiangshan_v.png');
            position: relative;
            .zhubian1{
                top: 113px;
                left: 637px;
            }
            .jidianxain4{
                top: 507px;
                left: 1136px;
            }
            .jidianxain3{
                top: 263px;
                left: 1141px;
            }
            .jidianxain2{
                top: 390px;
                left: 33px;
            }
            .jidianxain1{
                top: 290px;
                left: 33px;
            }
            .xiangshanF_1{
                position:absolute;
                left: 66px;
                top: 317px;
            }
            .xiangshanF_2{
                position:absolute;
                left: 66px;
                top: 406px;
            }
            .xiangshanF_3{
                position:absolute;
                left: 732px;
                top: 282px;
            }
            .xiangshanF_4{
                position:absolute;
                left: 937px;
                top: 349px;
            }
            .xiangshanF_5{
                position:absolute;
                left: 701px;
                top: 369px;
            }
            .xiangshanF_6{
                position:absolute;
                left: 727px;
                top: 439px;
            }
            .frams{
                width:33px;
                height:45px;
                display: inline-block;
                margin-right:8px;
                background-image: url(../assets/windFramPicture/run_Icon.gif);
                span{
                    position: relative;
                    top: 48px;
                    left: 0px;
                    font-size: 14px;
                    font-weight: 600;
                }
            }
        }
        .mahuangshanF{
            width:1260px;
            height:560px;
            background-image: url('../assets/windFramPicture/mahuangshan_v.png');
            position: relative;
            .zhubian1{
                top: 151px;
                left: 641px;
            }
            .jidianxain3{
                top: 390px;
                left: 1204px;
            }
            .jidianxain4{
                top: 265px;
                left: 1257px;
            }
            .jidianxain2{
                top: 392px;
                left: 33px;
            }
            .jidianxain1{
                top: 261px;
                left: 33px;
            }
            .mahuangshanF_1{
                position:absolute;
                left: -8px;
                top: 312px;
            }
            .mahuangshanF_2{
                position:absolute;
                left: 82px;
                top: 421px;
            }
            .mahuangshanF_3{
                position:absolute;
                left: 739px;
                top: 314px;
            }
            .mahuangshanF_4{
                position:absolute;
                left: 643px;
                top: 421px;
            }
            .frams{
                width:33px;
                height:45px;
                display: inline-block;
                margin-right:14px;
                background-image: url(../assets/windFramPicture/run_Icon.gif);
                span{
                    position: relative;
                    top: 48px;
                    left: 0px;
                    font-size: 14px;
                    font-weight: 600;
                }
            }
        }
    }
}
</style>