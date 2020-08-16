import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAt, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'
import { faFontAwesome, faLinkedin, faSkype, faDiscord, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faAt, faLinkedin, faSkype, faDiscord, faCodepen, faGithub, faFontAwesome, faStar, faStarHalfAlt, faStarEmpty)

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
