<template>
  <div class="eight-panel">
  <div class="footerInfo">
    <div class="container">
      <div class="row mt30">
				<div class="col-lg-3 col-md-6">
          <div class="bc tc mt30">
					  <img class="f_logo" :src="R.footerLogo" alt="">
          </div>
				</div>
				<div class="col-lg-3 col-md-6">
					<h4>{{appData.business.title}}</h4>
					<p class="xm-p" v-for="(item, index) in appData.business.list" :key="index">
            {{item.lab + item.val}}
          </p>
				</div>
				<div class="col-lg-4 col-md-6">
					<h4>{{appData.contact.title}}</h4>
					<p class="xm-p" v-for="(item, index) in appData.contact.list" :key="index">
            {{item.lab + item.val}}
          </p>
				</div>
				<div class="col-lg-2 col-md-6">
					<h4>{{appData.attention.title}}</h4>
          <div class="bc tc">
					  <img class="f_wx" :src="R.footerWx" alt="" width="138">
          </div>
				</div>
			</div>
    </div>
  </div>

    <div class="copyright tc">
      <p class="mt30">{{appData.copyright.icp}}</p>
      <p>{{appData.copyright.name}}</p>
    </div>


  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'eightPanel',
  data () {
    return {
      
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
.container{
  color: #eee;
  font-size: 14px;
}
h4{
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 12px;
    margin-top:30px;
}
h4::before, h4::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
}
h4::before {
    right: 0;
    background: #555;
}
h4::after {
    background: #18d26e;
    width: 60px;
}
.f_logo,.f_wx{
  max-width: 100%;
}
.row{
  background:url("../assets/wz.png") no-repeat center 110px;
  padding-bottom:60px;
}

.copyright{
  color: white;
}
.footerInfo{
  background-color: #111;
}
</style>
