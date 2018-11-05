<template>
  <div class="four-panel container">
      <div class="title text-center mt50">
        <h2 class="mb30">{{appData.title}}</h2>

        <p v-for="(item, index) in appData.subTitle" :key="index" >
            {{item}}<br />
        </p>

        <div class="bc des" v-for="(item, index) in appData.des" :key="index + 100" >
            {{item}}<br />
        </div>

        
      </div>

      <!-- swiper -->
      <swiper :options="swiperOption">
        <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>

        <swiper-slide v-for="(item, index) in appData.list" :key="index">
          <div class="item_c pr">
            <img :src="R.sevenPanelIconList[item.resIndex]" />
            <div class="item_text pa">
              <div class="title mt10" data-swiper-parallax="-100">{{item.title}}</div>
              <div class="text mt30" data-swiper-parallax="-300">
                <p>{{item.content}}</p>
              </div>
            </div>
          </div>
          
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      </swiper>

  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'fourPanel',
  data () {
    return {
      swiperOption: {
          speed: 600,
          parallax: true,
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
    }
  },
  computed:{
  },
  methods: {
  },
  components: {
    swiper,
    swiperSlide
  },
  props: {
    appData: {
      type: Object,
      default: {}
    },
    R:{
      type:Object,
      default:{}
    }
  }

}
</script>

<style scoped>
.title span{
  color: #666;
}
.title span:first-child{
  color: #333;
}
.title>h2{
  font-size: 30px;
}
.row img{
  max-width: 100%;
}
.gItem>p{
  left: 15px;
  bottom: 0px;
  color: #dbdbdb;
}
.des{
  max-width: 70%;
}
.swiper-slide {
    font-size: 18px;
    color:#fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: transparent!important;
    justify-content: space-around!important;
  }
  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
    background-image: url(/static/images/surmon-1.jpg);
  }
  .swiper-slide .title {
    font-size: 18px;
    font-weight: 300;
  }
  .swiper-slide .subtitle {
    font-size: 21px;
  }
  .swiper-slide .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
  }
  
  .item_c .item_text {
    left: 70%;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 20px;
    background: -webkit-gradient(linear,0 0,100% 100%,from(rgba(59,184,221,0.8)),to(rgba(29,58,109,0.8)));
    overflow: hidden;
  }
</style>
