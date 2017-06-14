import Vue from 'vue'
import App from './App'
import router from './router'

// Temas
import './styles/theme.scss'
import 'animate.css'

// Fuentes
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
