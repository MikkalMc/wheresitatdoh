import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify,
  template: '<App/>'
})
