import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAt, faStar, faStarHalfAlt, faHandPointer, faExternalLinkAlt, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'
import { faFontAwesome, faLinkedin, faSkype, faDiscord, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'
import VueLazyload from 'vue-lazyload'
import i18n from './i18n'
import VueRouter from 'vue-router';
import Index from './pages/Index'
import CV from './pages/CV'

library.add(faAt, faLinkedin, faSkype, faDiscord, faCodepen, faGithub, faFontAwesome, faStar, faStarHalfAlt, faStarEmpty, faHandPointer, faExternalLinkAlt, faGlobe)

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueLazyload)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Index},
  {path: '/cv',component: CV},
  {path: '*', component: Index}
]

const router = new VueRouter({routes, mode: 'history'})

new Vue({
  router,
  render: h => h(App),
  i18n
}).$mount('#app')