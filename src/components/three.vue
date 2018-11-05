<template>
  <div class="three-panel container">
      <div class="row">
        <div class="picIcon col-xs-12 col-sm-6 col-sm-pull-6">
          <div class="bc_c">
            <div class="bc_t">
              <img :src="R.threePanelIcon" alt="">
            </div>
          </div>
        </div>
        <div class="pText col-xs-12 col-sm-6 col-sm-push-6 wow fadeInRight animated" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInRight;">
          <div class="bc_c">
            <div class="bc_t">
              <h2 class="title">{{appData.title}}</h2>
              <p class="subTitle">{{appData.subTtitle}}</p>
              <p class="des">{{appData.des}}</p>
              <a class="btn-normal" :href="appData.detail_link" target="_blank">了解更多</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'threePanel',
  data () {
    return {
    }
  },
  methods: {
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
h2.title{
  font-size: 30px;
}
.subTitle{
  color: #303030;
  font-size: 16px;
}
.container,.row{
  height: 100%;
}
.bc_c{
   display:table;
   height:100%; 
}

.bc_c>.bc_t{
   display: table-cell;
   vertical-align: middle;
   max-width: 100%;

}
.bc_c>.bc_t>img{
  max-width: 100%;
}
.des{
  color:#666;
}
</style>
