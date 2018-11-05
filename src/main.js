// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import Vue from 'vue'
//import App from './App'

//Vue.config.productionTip = false

/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})*/
import Vue from 'vue'
import VueFullPage from 'vue-fullpage.js'
import 'vue-fullpage/vue-fullpage.css'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
//import ElementUI from 'element-ui';
//Vue.use(ElementUI);
import VueVideoPlayer from 'vue-video-player'

// require videojs style
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)

Vue.use(VueFullPage)

new Vue({
  el: '#app',
  render: h => h(App)
})
