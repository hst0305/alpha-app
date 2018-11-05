<template>
  <div class="four-panel container">
      <div class="title text-center mt50">
        <h2 class="mb30">{{appData.title}}</h2>
        <span v-for="(item, index) in appData.des" :key="index" >
            {{item}}<br />
        </span>
      </div>

      <div class="row mt50">

        <div class="col-xs-12 col-sm-6 col-md-3" v-for="item in appData.list" :key="item.resIndex">
          <div class="gItem pr">
            <img :src="R.fivePanelIconList[ item.resIndex ]">
            <p class="pa">{{item.name}}</p>
          </div>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
  name: 'fourPanel',
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
.title{
  color: white;
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
</style>
