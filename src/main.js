// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import VueOnsen from 'vue-onsenui' // This already imports 'onsenui'
import App from './App'
import router from './router'
import store from './store'
//import VueCordova from 'vue-cordova'

//Vue.use(VueCordova)
Vue.use(VueOnsen)

/* eslint-disable no-new */
document.addEventListener('deviceready', function() {
  new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
  })
})