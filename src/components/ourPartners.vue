<template>
  <div class="container">
    <div class="row">
      <h2 class="module-title bc t-font">{{appData.title}}</h2>
    </div>
    <div class="row multi-columns-row">

      <div class="col-md-3 col-sm-6 col-xs-12 mt50 tc par-list" v-for="(item,index) in appData.list" :key="index">
          <h3>{{item.title}}</h3>
          <img class="mt10" :src="R.ourPartners[index]" />
          <p class="mt10">{{item.content}}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'exchange',
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
    R: {
      type: Object,
      default: {}
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.par-list img{
  width: 100px;
  height: 100px;
}
.container {
    background: #fff;
    font: 400 12px/1.8 "Open Sans", sans-serif;
    color: #666;
    -webkit-font-smoothing: antialiased;
}
i{font-size:42px;}
.t-font{
  font-family: "Roboto Condensed", sans-serif;
}
.module-title{
  text-transform: uppercase;
  color: #FFF;
  background-color: rgba(24,28, 66, 0.9);
  padding: 3px 5px 3px 5px;
  min-width: 400px;
  letter-spacing: 4px;
  text-align: center;
  font-weight: 400;
  font-size: 30px;
  margin-top:50px;
}
.features-title{
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 400;
  font-size: 14px;
  color: #181c42;
  margin: 16px 0 15px;
}
.features-item{
  color:#666;
}
</style>
