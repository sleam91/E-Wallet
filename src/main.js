import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      cardList: [{
        id: 1,
        cardNumber: "1234 5678 1233 1231",
        name: "Sebastian Alvarez",
        valThru: "10/22",
        ccv: 456,
        vendor: "Bitcoin Inc"
      }, {
        id: 2,
        cardNumber: "2342 2344 7657 1231",
        name: "Blip Blop",
        valThru: "12/21",
        ccv: 564,
        vendor: "Evil Corp"
      }, {
        id: 3,
        cardNumber: "9999 3234 8768 7876",
        name: "Blip Blop",
        valThru: "01/21",
        ccv: 987,
        vendor: "Ninja Bank"
      }]
    }
  },
  methods: {
    getCardList() {
      return this.cardList
    },
    getCard(id) {
      return this.cardList.find(card => card.id == id)
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
