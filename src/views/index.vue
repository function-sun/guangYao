<template>
  <div class="proIndex">
    <el-container>
        <el-header>
            <span>智能营销管理系统</span>
            <div class="exit">
                <img src="../assets/iconNeed/icon_tuichu_white.png" />
                <span>退出</span>
            </div>
        </el-header>
        <div class="proMenu">
            <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" default-active="1"
                background-color="#F9F9F9"
                text-color="#7E7C7C"
                active-text-color="#5997BE">
                <el-menu-item index="1">
                    <i :class="leftIndex==='1' ? 'icon_home' : 'icon_home_nav'"></i>
                    <span>首页</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <p :class="leftIndex==='2-1' || leftIndex==='2-2' ? 'icon_yuce' : 'icon_yuce_nav'"></p>
                        <span>预测</span>
                    </template>
                    <el-menu-item index="2-1">功能预测</el-menu-item>
                    <el-menu-item index="2-2">电量预测</el-menu-item>
                </el-submenu>
                <el-menu-item index="3">
                    <i :class="leftIndex==='3' ? 'icon_xianhuo' : 'icon_xianhuo_nav'"></i>
                    <span>现货交易</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i :class="leftIndex==='4' ? 'icon_changqi' : 'icon_changqi_nav'"></i>
                    <span>中长期交易</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <i :class="leftIndex==='5' ? 'icon_table' : 'icon_table_nav'"></i>
                    <span>报表管理</span>
                </el-menu-item>
                <el-menu-item index="6">
                    <i :class="leftIndex==='6' ? 'icon_gaojing' : 'icon_gaojing_nav'"></i>
                    <span>实时告警</span>
                </el-menu-item>
                </el-menu>
        </div>
        <el-main style="background: #f9f9f9;">
            <functional-prediction fromPredPage="function" :windTurbinedata="windTurbinedata" v-if="showfunctionalPrediction"></functional-prediction>
            <electric-quantity fromPredPage="electric" :windTurbinedata="windTurbinedata" v-if="electricQuantityrediction"></electric-quantity>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import functionalPrediction from './functionalPrediction'
import electricQuantity from './electricQuantityrediction'
export default {
    name: 'Index',
    components:{
        functionalPrediction,
        electricQuantity
    },
    data () {
        return {
            showfunctionalPrediction:false,
            electricQuantityrediction:false,
            windTurbinedata:[], //风电场列表
            leftIndex: '1'
        }
    },
    created() {
        this.predInit()
    },
    methods:{
        predInit(){
            this.getListOption()
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
        handleSelect(index){
            this.leftIndex = index
            this.showfunctionalPrediction = false
            this.electricQuantityrediction = false
            if (index === '1') {
                if (location.href.indexOf('/index') < 0) {
                    this.$router.push({path: '/index'})
                }
                
                // this.getdatas()
            }
            if(index === '2-1' || index === '2-2') {
                if (location.href.indexOf('/Prediction') < 0) {
                    this.$router.push({path: '/Prediction'})
                }
                if (index === '2-1') {
                    this.showfunctionalPrediction = true
                    this.electricQuantityrediction = false
                } else {
                    this.showfunctionalPrediction = false
                    this.electricQuantityrediction = true
                }
            }
            console.log(index)
        },
        getdatas() {
            let that = this
                let url = '/predict/api/glyc/getWindFarmGlycChartData'
                let params = {
                        windplantNo:1,
                        modelNo:1,
                        "params[beginDataTime]":'2021-08-05 10:00',
                        "params[endDataTime]":'2021-08-05 10:00'
                    }
                        
                
                this.$http.get(url,params).then(datas=>{
                    console.log(index)
                })
        }
    }

}
</script>

<style lang="less">
.proIndex{
    .el-header {
        display:flex;
        justify-content: space-between;
        background: #5997BE;
        color: #fff;
        line-height: 60px;
        height: 60px;
        .exit{
            display: flex;
            justify-content: flex-end;
            img{
                width: 24px;
                height: 24px;
                margin-top: 18px;
            }
        }
    }
    .proMenu{
        .el-menu-demo{
            height: 40px;
            .el-menu-item{
                height: 40px;
                line-height:40px;
                i{
                    width: 27px;
                    height: 24px;
                    display: inline-block;
                }
                .icon_home{
                    background-image: url(../assets/iconNeed/iconFont.png);
                    background-position: -13px -10px;
                }
                .icon_home_nav{
                    background-image: url(../assets/iconNeed/iconFont.png);
                    background-position: -13px -37px;
                }
                .icon_xianhuo{
                    background-image: url(../assets/iconNeed/iconFont.png);
                    background-position: -78px -10px;
                }
                .icon_xianhuo_nav{
                    background-image: url(../assets/iconNeed/iconFont.png);
                    background-position: -78px -37px;
                }
                .icon_changqi{
                    background-image: url(../assets/iconNeed/iconFont.png);
                    background-position: -107px -10px;
                }
                .icon_changqi_nav{
                    background-image: url(../assets/iconNeed/iconFont.png);
                    background-position: -107px -37px;
                }
                .icon_table{
                    background-image: url(../assets/iconNeed/iconFont.png);
                    background-position: -143px -10px;
                }
                .icon_table_nav{
                    background-image: url(../assets/iconNeed/iconFont.png);
                    background-position: -143px -36px;
                }
                .icon_gaojing{
                    background-image: url(../assets/iconNeed/iconFont.png);
                    background-position: -175px -10px;
                }
                .icon_gaojing_nav{
                    background-image: url(../assets/iconNeed/iconFont.png);
                    background-position: -175px -36px;
                }
            }
            .el-submenu{
                .el-submenu__title{
                    p{
                        width: 27px;
                        height: 24px;
                        display: inline-block;
                        margin: 0;
                    }
                    .icon_yuce{
                        background-image: url(../assets/iconNeed/iconFont.png);
                        background-position: -46px -10px;
                    }
                    .icon_yuce_nav{
                        background-image: url(../assets/iconNeed/iconFont.png);
                        background-position: -46px -37px;
                    }
                }
            }
        }
        .el-submenu{
            .el-submenu__title{
                height: 40px;
                line-height:40px;
            }
        }
    }
    .el-main{
        padding:0;
        min-height: 650px;
    }
}
</style>