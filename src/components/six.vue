<template>
  <div class="four-panel container">
      <div class="title text-center mt50">
        <h2 class="mb30">{{appData.title}}</h2>
        <span v-for="(item, index) in appData.des" :key="index" >
            {{item}}<br />
        </span>
      </div>

      <div class="row mt50">
          <img class="bc" :src="R.sixPanelIcon">
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
</style>
