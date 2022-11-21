import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faAt,
    faStar,
    faStarHalfAlt,
    faHandPointer,
    faExternalLinkAlt,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import {
    faFontAwesome,
    faLinkedin,
    faSkype,
    faDiscord,
    faCodepen,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import VueLazyload from "vue-lazyload";
import i18n from "./i18n";
import VueRouter from "vue-router";
import Index from "./pages/Index";
import CV from "./pages/CV";
import Vuex from "vuex";
import GitFlow from "gitflow-component";
import createPersistedState from "vuex-persistedstate";
import Moment from "moment/moment";

library.add(
    faAt,
    faLinkedin,
    faSkype,
    faDiscord,
    faCodepen,
    faGithub,
    faFontAwesome,
    faStar,
    faStarHalfAlt,
    faStarEmpty,
    faHandPointer,
    faExternalLinkAlt,
    faGlobe
);

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueLazyload);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(GitFlow);

const routes = [
    { path: "/", component: Index },
    { path: "/cv", component: CV },
    { path: "*", component: Index },
];

const router = new VueRouter({ routes, mode: "history" });

const store = new Vuex.Store({
    state: {
        // darkmode: window.matchMedia && window.matchMedia('prefers-color-scheme: dark').matches,
        darkmode: false,
        menu: false,
    },
    mutations: {
        toggleDarkmode(state) {
            state.darkmode = !state.darkmode;
        },
        toggleMenu(state) {
            state.menu = !state.menu;
        },
    },
    plugins: [createPersistedState()],
});

new Vue({
    router,
    store,
    render: (h) => h(App),
    i18n,
    Moment,
}).$mount("#app");
