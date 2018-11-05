<template>
  <div class="first-panel">
    <!--
    <img class="logo2" :src="R.logoBig" />
    <p class="app-des-cn">{{appData.des_cn}}</p>
    <p class="app-des-en">{{appData.des_en}}</p>

    <div class="container mt50">
      <div class="row">
        <div class="col-xs-4 col-sm-2" v-for="item in iconList" :key="item.resIndex">
          <div class="iconPic">
            <img :src="R.firstPanelIconList[ item.resIndex ]" :alt="item.name">
          </div>
          <p class="iconName">{{item.name}}</p>
        </div>
      </div>
    </div>
    -->
    <div class="video">
      <video-player  class="video-player-box"
                     ref="videoPlayer"
                     :options="playerOptions"
                     :playsinline="true"
                     customEventName="customstatechangedeventname"
                     >
      </video-player>
    </div> 
    <div class="title">
      <div class="titan-title-size" >We would like to present to you,</div>
      <div class="titan-title-size-4">Arbitrage Crypto Trader</div>
      <div class="titan-title-size">trading crypto-currency terminal for trading on two exchanges simultaneously!</div>
    </div>
  </div>
</template>

<script>
import webm from '@/assets/main.webm'
export default {
  name: 'firstPanel',
  data () {
    return {
      playerOptions: {
          muted: true,
          loop: true,
          controls: false,
          autoplay: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/webm",
            src: webm
          }],
        }
    }
  },
  methods: {
    onActivity:function(){
      this.$refs.videoPlayer.player.play()
    }
  },
  computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
  },
  props: {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.first-panel {
    width: 100%;
    text-align: center;
    background: url(../assets/fp-bg.jpg) no-repeat top center;
    background-color: #34495e;
    background-size: cover;
    height: 100%;
    overflow: hidden;
    position:relative;
}
.first-panel .video{
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
}
.logo2{
  margin-top:75px;
}
.app-des-cn {
    padding-top: 50px;
    letter-spacing: 18px;
    font-size: 30px;
    color: #fff;
    text-align: center;
}
.app-des-en {
    font-size: 22px;
    color: #fff;
    text-align: center;
    letter-spacing: 2px;
    padding: 0 15px;
}
.iconName{
  color: #44c4dc;
}


.titan-title-size-4 {
    letter-spacing: 24px;
    font-weight: 400;
    font-size: 48px;
    color:white;
}
div.title{
  position:absolute;
  top:200px;
  width:100%;
  color:#ffffff;
}
.titan-title-size {
    letter-spacing: 4px;
    font-size: 15px;
    padding:30px 0;
}
</style>
<style>
.video-player ,.video-js,vjs-tech{
  width:100%;
  height:100%;
}
video{
  object-fit:cover;
}
</style>
