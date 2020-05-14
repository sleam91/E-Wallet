import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data(){
    return{
      cardList:['card1','card2','card3']
    }
  },
  methods:{
    getCardList(){
      return this.cardList
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
