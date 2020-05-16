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
        vendor: "vendor-bitcoin.svg"
      }, {
        id: 2,
        cardNumber: "2342 2344 7657 1231",
        name: "Blip Blop",
        valThru: "12/21",
        ccv: 564,
        vendor: "vendor-evil.svg"
      }, {
        id: 3,
        cardNumber: "9999 3234 8768 7876",
        name: "Blip Blop",
        valThru: "01/21",
        ccv: 987,
        vendor: "vendor-ninja.svg"
      }],
      chosenCardId:1
    }
  },
  methods: {
    getCardList() {
      return this.cardList
    },
    getCard(id) {
      return this.cardList.find(card => card.id == id)
    },
    setChosenCardId(id){
      this.chosenCardId=id
    },
    getChosenCardId(){
      return this.chosenCardId
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
