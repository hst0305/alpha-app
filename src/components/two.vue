<template>
  <div class="two-panel container">
        <div class="tc pt30">
          <h2 class="title">{{appData.title}}</h2>
          <span v-for="(item, index) in appData.des" :key="index" >
            {{item}}<br />
          </span>
          <a class="btn-normal" :href="appData.detail_link" target="_blank">了解更多</a>
        </div>

        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4" v-for="item in appData.hy_list" :key="item.resIndex">
              <div class="picItem mb15 pr">
                <img class="bc" :src="R.twoPanelIconList[ item.resIndex ]">
                <h5 class="picItem-title pa">{{item.name}}</h5>
                <div class="solution-item-cover"></div>
              </div>
          </div>
        </div>   
  </div>
</template>

<script>
export default {
  name: 'twoPanel',
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
.picItem{
  overflow: hidden;
}
.picItem>img{
  max-width: 100%;
}
.picItem-title{
  left: 5px;
  top: 5px;
  color: #fff;
  font-size: 14px;
}
.picItem-title:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 40px;
    height: 2px;
    background: #fff;
    opacity: 0.5;
}

</style>
