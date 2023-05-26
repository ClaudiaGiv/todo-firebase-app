import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import VueBlobJsonCsv from 'vue-blob-json-csv';

Vue.use(VueBlobJsonCsv)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
