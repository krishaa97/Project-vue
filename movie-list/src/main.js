import Vue from 'vue'
import App from './App.vue'
import VAnimateCss from 'v-animate-css'

Vue.use(VAnimateCss);


new Vue({
  el: '#app',
  render: h => h(App)
})
