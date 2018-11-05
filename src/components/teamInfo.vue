<template>
  <div class="container">
    <div class="row mt50 multi-columns-row">

      <div class="col-md-6 col-sm-6 col-xs-12 tc">
        <h3>团队介绍</h3>
        <p>团队信息团队信息团队信息</p>
        <p>团队信息团队信息团队信息</p>
        <p>团队信息团队信息团队信息</p>
        <p>团队信息团队信息团队信息</p>
        <p>团队信息团队信息团队信息</p>
        <p>团队信息团队信息团队信息</p>
        <p>团队信息团队信息团队信息</p>
        <p>团队信息团队信息团队信息</p>
        <p>团队信息团队信息团队信息</p>
        <p>团队信息团队信息团队信息</p>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12">
        <div class="row">
        
          <div class="col-md-3 col-sm-3 col-xs-3">
            <img src="../assets/game1.png" />
            <img src="../assets/game1.png" />
            <img src="../assets/game1.png" />
            <img src="../assets/game1.png" />
            <img src="../assets/game1.png" />
          </div>
          <div class="col-md-9 col-sm-3 col-xs-9">
            <h3>媒体报道</h3>
            <p>报道信息报道信息报道信息</p>
            <p>报道信息报道信息报道信息</p>
            <p>报道信息报道信息报道信息</p>
            <p>报道信息报道信息报道信息</p>
            <p>报道信息报道信息报道信息</p>
            <p>报道信息报道信息报道信息</p>
            <p>报道信息报道信息报道信息</p>
            <p>报道信息报道信息报道信息</p>
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
img{
  max-width:100%;
  margin-top:8px;
}
</style>
