<template>
    <section class="citySwtich">
        <div class="cityHeader">
            <h2><em>选择城市</em><span>({{selectCity}})</span></h2>
        </div>
        <main class="cityMain">
            <!--城市列表-->
            <div class="list" ref="list">
                <div v-for="(cit,cityIndex) in city" :key="cityIndex" ref="citys" :class="cityIndex=='0'?'hot':''">
                    <!-- :class="cityIndex == num?'active':''" -->
                    <div class="hA">{{cit.hA=='☆'?'热门城市':cit.hA}}</div>
                    <div class="liBox">
                        <li v-for="(cityss,cityssIndex) in cit.citylist" :key="cityssIndex" @click="selectCityBtn(cityIndex,cityssIndex)">{{cityss}}</li>
                    </div>
                </div>
            </div>
            <div class="alpss" v-if="alpssShow">
                <span>{{alpss.hA}}</span>
            </div>
            <!--字母-->
            <ul class="alphabet">
                <li v-for="(al,alIndex) in city" :key="alIndex" @click="altab(alIndex)">{{al.hA}}</li>
                <!-- :class="alIndex == num?'active':''" -->
            </ul>
        </main>
    </section>
</template>
<script>
import Vue from 'vue'
import '@/assets/js/city.js'
export default {
    name:'citySwtich',
    data(){
        return{
            city:citys,
            selectCity:'',
            selectNum:'',
            num:'',
            cityShow:false,
            alpss:'',
            alpssShow:false
        }
    },
    computed:{
    },
    methods:{
        altab(index){
            var that = this
            that.num = index
            that.alpss = that.city[that.num]
            that.alpssShow = !that.alpssShow
            that.$refs.list.scrollTop = that.$refs.citys[that.num].offsetTop - that.$refs.citys[that.num].clientHeight
            setTimeout(() => {
                that.alpssShow = !that.alpssShow
            }, 500);
        },
        Ascroll(){
            var that = this
            var percentage = that.$refs.list.scrollTop  / (that.$refs.list.scrollHeight - that.$refs.list.clientHeight )
            that.num = Math.round(percentage * that.city.length)
            if(that.num == that.city.length){
                that.num = that.city.length - 1;
            }
        },
        selectCityBtn(sx,index){
            var that = this
            that.selectCity = []
            that.num = sx
            that.selectNum = index
            that.selectCity = that.city[that.num].citylist[that.selectNum]
            that.$emit('cityValue',that.cityShow,that.selectCity)
        }
    },
    mounted(){
        this.$refs.list.addEventListener('scroll',this.Ascroll)
    }
}
</script>
<style lang="scss" scroped>
@function px2rem($px){
   $rem :64.0px;
   @return ($px/$rem) + rem;
}
*{
    margin:0;
    padding:0;
}
html,body{
    width:100%;
    height:100%;
}
ul,li{
    list-style: none;
}
.citySwtich{
    position:fixed;
    top:0;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    z-index:9999;
    background:#fff;
    .cityHeader{
        height:px2rem(75px);
        min-height:px2rem(75px);
        border-bottom:px2rem(1px) solid #eee;
        display:flex;
        h2{
            display:flex;
            margin:0 auto;
            em{
                margin:auto;
                color:#fe4f53;
                font-size:px2rem(30px);
                font-weight:normal;
            }
            span{
                font-size:px2rem(16px);
                color:#000;
                margin:auto px2rem(16px);
            }
        }
    }
    .cityMain{
        flex:1;
        display:flex;
        padding:0 px2rem(36px);
        position:relative;
        background:#fff;
        .list{
            margin:0 auto;
            flex:1;
            overflow-y:scroll;
            .h5{
                height:px2rem(50px);
                line-height:px2rem(50px);
                font-size:px2rem(26px);
                color:#000;
            }
            .liBox{
                display:flex;
                flex-wrap:wrap;
                height:auto;
                margin:0 auto px2rem(40px);
                li{
                    margin:px2rem(12px) px2rem(20px) 0 0;
                    width:px2rem(175px);
                    height:px2rem(55px);
                    line-height:px2rem(55px);
                    text-align:center;
                    color:#666;
                    font-size:px2rem(24px);
                    border:px2rem(1px) solid #eee;
                    border-radius:px2rem(12px);
                } 
                li:nth-child(3n){
                    margin-right:0;
                }
            }
            .hA{
                font-size:px2rem(26px);
                margin:px2rem(16px) 0;
                width:px2rem(50px);
                height:px2rem(50px);
                background:#666;
                border-radius:50%;
                color:#fff;
                text-align:center;
                line-height:px2rem(50px);
            }
            .hA.active{
                background:#fe4f53;
            }
        }
        .hot{
            .hA{
                width:px2rem(160px);
                border-radius:px2rem(12px);
            }
            .liBox{
                li{
                    background:#eee;
                    border:0;
                }
            } 
        }
        .alpss{
            position:fixed;
            top:50%;
            left:50%;
            margin-top:-(px2rem(40px));
            margin-left:-(px2rem(40px));
            width:px2rem(80px);
            height:px2rem(80px);
            background:rgba(0,0,0,0.6);
            border-radius:px2rem(26px);
            display:flex;
            z-index:99999;
            span{
                font-size:px2rem(32px);
                color:#fff;
                margin:auto;
            }
        }
        .alphabet{
            padding:px2rem(16px) 0;
            position:absolute;
            top:10%;
            right:0;
            width:px2rem(36px);
            height:80%;
            display:flex;
            flex-direction:column;
            li{
                flex:1;
                font-size:px2rem(24px);
                color:#fe4f53;
                margin:auto;
            }
            li.active{
                color:#fe4f53;
                font-size:px2rem(30px);
            }
        }
    }
}
</style>