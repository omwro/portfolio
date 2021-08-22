import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAt, faStar, faStarHalfAlt, faHandPointer } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'
import { faFontAwesome, faLinkedin, faSkype, faDiscord, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'
import VueTinySlider from 'vue-tiny-slider';
import VueLazyload from 'vue-lazyload'
import Notifications  from "vue-notification";
import i18n from './i18n'

library.add(faAt, faLinkedin, faSkype, faDiscord, faCodepen, faGithub, faFontAwesome, faStar, faStarHalfAlt, faStarEmpty, faHandPointer)

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueLazyload)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Notifications)

new Vue({
  render: h => h(App),
  components: {
    'tiny-slider': VueTinySlider
  },
  i18n
}).$mount('#app')