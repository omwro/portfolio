import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faLinkedin, faSkype, faDiscord, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faAt, faLinkedin, faSkype, faDiscord, faCodepen, faGithub, faFontAwesome)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
