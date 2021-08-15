<template>
  <div class="proheader">
    <el-container>
        <el-header>
            <span>智能营销管理系统</span>
            <div class="exit">
                <img src="../assets/iconNeed/icon_tuichu_white.png" />
                <span>退出</span>
            </div>
        </el-header>
        <div class="proMenu">
            <el-menu class="el-menu-demo" mode="horizontal" :default-active="leftIndex" @select="handleSelect"
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
    </el-container>
  </div>
</template>

<script>
export default {
    name:'headerCom',
    data() {
        return {
            leftIndex: '1',
        }
    },
    watch:{
        $route: {
            handler: function(route) {
                if (route.path === '/index') {
                    this.leftIndex = '1'
                } else if (route.path === '/functionPrediction') {
                    this.leftIndex = '2-1'
                } else if (route.path === '/electionPrediction') {
                    this.leftIndex = '2-2'
                }
                this.showHeader = route.path === '/login' ? false : true
            },
            immediate: true
        }
    },
    methods:{
        handleSelect(index){
            this.leftIndex = index
            // this.showfunctionalPrediction = false
            // this.electricQuantityrediction = false
            if (index === '1') {
                this.$router.push({path: '/index'})
            } else if(index === '2-1') {
                this.$router.push({path: '/functionPrediction'})
            } else if(index === '2-2') {
                this.$router.push({path: '/electionPrediction'})
            }
            console.log(index)
        },
    }
}
</script>

<style lang="less">
.proheader{
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
}
</style>