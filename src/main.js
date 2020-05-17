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
        vendor: "vendor-bitcoin.svg",
        chip:"chip-dark.svg",
        colors: {
          backgroundColor: "rgba(255, 180, 66)",
          color: "black"
      }
      }, {
        id: 2,
        cardNumber: "2342 2344 7657 1231",
        name: "Oopsie Doopsie",
        valThru: "12/21",
        ccv: 564,
        vendor: "vendor-evil.svg",
        chip:"chip-light.svg",
        colors: {
          backgroundColor: "rgba(233, 47, 78)",
          color: "white"
      }
      }, {
        id: 3,
        cardNumber: "9999 3234 8768 7876",
        name: "Blip Blop",
        valThru: "01/21",
        ccv: 987,
        vendor: "vendor-ninja.svg",
        chip:"chip-light.svg",
        colors: {
          backgroundColor: "rgba(54, 54, 54)",
          color: "white"
      }
        
      },{
        id: 4,
        cardNumber: "0000 1111 2222 7777",
        name: "Pop Peep",
        valThru: "06/23",
        ccv: 234,
        vendor: "vendor-blockchain.svg",
        chip:"chip-light.svg",
        colors: {
          backgroundColor : "rgba(127, 80, 228)",
          color: "white"
      }
        
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
