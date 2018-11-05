<template>
    <div id="app">
        <nav class="container navbar navbar-default" role="navigation"> 
            <div class="container-fluid"> 
                <div class="navbar-header"> 
                    <img :src="R.logoSmall" />
                </div> 
                <ul id="menu" class="nav navbar-right"> 
                    <li class="fl ml30" v-for="item in staticData.navList" :key="item.id">
                        <a :href="'#'+item.pageIndex">{{item.name}}</a>
                    </li>
                </ul> 
            </div> 
        </nav>
        <full-page :options="options" id="fullpage">
            <div class="section fp-auto-height">
                <first-panel ref="fPanel" ></first-panel>
            </div>
            <div class="section fp-auto-height">
                <two-panel :appData=staticData.forTraders ></two-panel>
            </div>
            <div class="section fp-auto-height">
                <three-panel :appData=staticData.pageThree :R=R></three-panel>
            </div>
            <div class="section fp-auto-height">
                <four-panel :appData=staticData.pageFour :R=R></four-panel>
            </div>
            <div class="section fp-auto-height">
                <exchange-panel :appData=staticData.exchange ></exchange-panel>
            </div>
            <div class="section fp-auto-height">
                <team-panel :appData=staticData.ourPartners ></team-panel>
            </div>
            <div class="section fp-auto-height">
                <ourPartners-panel :appData=staticData.ourPartners ></ourPartners-panel>
            </div>
            <!--
            <div class="section section5 fp-auto-height">
                <five-panel :appData=staticData.pageFive :R=R></five-panel>
            </div>
            <div class="section fp-auto-height">
                <six-panel :appData=staticData.pageSix :R=R></six-panel>
            </div>
            <div class="section fp-auto-height">
                <seven-panel :appData=staticData.pageSeven :R=R></seven-panel>
            </div>
            -->
            <div class="section fp-auto-height">
                <eight-panel :appData=staticData.pageEight :R=R></eight-panel>
            </div>
        </full-page>
    </div>
</template>

<script>
import firstPanel from '@/components/first'
import twoPanel from '@/components/forTraders'
import threePanel from '@/components/three'
import fourPanel from '@/components/four'
import fivePanel from '@/components/five'
import sixPanel from '@/components/six'
import sevenPanel from '@/components/seven'
import eigthPanel from '@/components/eight'
import exchangePanel from '@/components/exchange'
import ourPartnersPanel from '@/components/ourPartners' 
import teamInfo from '@/components/teamInfo'

import R from './resource'
import appData from '../static/data.json'

  export default {
    name: 'app',
    data () {
      return {
        options: {
          afterLoad: this.afterLoad,
          licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
          scrollBar: true,
          menu: '#menu',
          navigation: true,
          navigationPosition:'right',
          fitToSection:false,
          anchors: appData.pageList,
          sectionsColor: ['#34495e', '#ffffff', '#f8f8f8', '#ffffff', '#ffffff', '#f8f8f8', '#ffffff', '#000000']
        },
        staticData:appData,
        R:R
      }
    },
    components:{
        "first-panel":firstPanel,
        "two-panel":twoPanel,
        "three-panel":threePanel,
        "four-panel":fourPanel,
        "five-panel":fivePanel,
        "six-panel":sixPanel,
        "seven-panel":sevenPanel,
        "eight-panel":eigthPanel,
        "exchange-panel":exchangePanel,
        "ourPartnersPanel":ourPartnersPanel,
        "team-panel":teamInfo
    },
    mounted:function(){
        //console.log(appData);
    },
    methods: {
      afterLoad (a,b) {
        if(b.index == 0){
          this.$refs.fPanel.onActivity();
        }
      },
    }
  }
</script>

<style>
    a {
        color:white;
    }
    nav{
        position: relative;
        height: 60px;
        margin-bottom: -60px;
        z-index: 999;
        /* overflow: hidden; */
        font-size: 14px;
    }
    div.section{
        overflow: hidden;
    }
    .section5{
        background:url("./assets/gamebg.jpg") no-repeat top center;
    }
</style>

