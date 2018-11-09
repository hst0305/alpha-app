<template>
  <div class="container">
    <div class="row mt50 multi-columns-row">

      <div class="col-md-6 col-sm-6 col-xs-12 tc">
        <h3>{{appData.title}}</h3>
        <p v-for="(item,index) in appData.desList" :key="index">
          {{item}}
        </p>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12 teamMT">
          <h3 class="mt-title">{{appData.newInfo.title}}</h3>
          <div class="row" v-for="(item,index) in appData.newInfo.list" :key="index+1000">

            <div class="col-md-3 col-sm-3 col-xs-3">
              <img :src="R.teamMT[index]" />
            </div>
            <div class="col-md-9 col-sm-3 col-xs-9">
              <a :href="item.link" target="_block">
                {{item.title}}
              </a>
            </div>
          </div>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'teamInfo',
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
.container {
    font: 400 12px/1.8 "Open Sans", sans-serif;
    color: #666;
    -webkit-font-smoothing: antialiased;
}
.container>div{
  margin-top:100px;
}
img{
  max-width:100%;
  margin-top:8px;
}
.iconList{
  margin-top:33px;
}

.teamMT h3{
  padding-left: 150px;
}
.teamMT a{
  margin-top:7px;
  display: block;
  color:#666;
  width:200px;
}
</style>
