import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardList: [
      //   {
      //   "id": 1,
      //   "cardNumber": "1234 5678 1233 1231",
      //   "name": "Sebastian Alvarez",
      //   "valThru": "10/22",
      //   "ccv": 456,
      //   "vendor": "vendor-bitcoin.svg",
      // }, {
      //   "id": 2,
      //   "cardNumber": "2342 2344 7657 1231",
      //   "name": "Oopsie Doopsie",
      //   "valThru": "12/21",
      //   "ccv": 564,
      //   "vendor": "vendor-evil.svg",
      // }, {
      //   "id": 3,
      //   "cardNumber": "9999 3234 8768 7876",
      //   "name": "Blip Blop",
      //   "valThru": "01/21",
      //   "ccv": 987,
      //   "vendor": "vendor-ninja.svg",
      // }, {
      //   "id": 4,
      //   "cardNumber": "0000 1111 2222 7777",
      //   "name": "Pop Peep",
      //   "valThru": "06/23",
      //   "ccv": 234,
      //   "vendor": "vendor-blockchain.svg",
      // }
    ],
    chosenCardId: 0,
    idCounter: 0
  },
  getters: {
    getCard: state => id => state.cardList.find(card => card.id == id),
    getCardStack: state => state.cardList.filter(card => card.id !== state.chosenCardId),
  },
  mutations: {
    setInitialCards(state, cards) {
      state.cardList = cards
    },
    addCard(state, card) {
      state.cardList.push(card);
      // localStorage.setItem('idCounter', card.id)
    },
    removeCard(state, id) {
      state.chosenCardId = 0
      state.cardList = state.cardList.filter(card => card.id != id)
    },
    setInitialId(state) {
      // if (localStorage.getItem('idCounter')) {
      //   state.idCounter = localStorage.getItem('idCounter')
      // } else {
      // console.log(state.cardList[state.cardList.length-1]||"nope")
      if (state.cardList.length) {
        state.idCounter = state.cardList[state.cardList.length - 1].id
      }
      // localStorage.setItem('idCounter', state.idCounter)
      // }
    },
    setChosenCardId(state, id) {
      state.chosenCardId = id
    },
  },
  actions: {
    async getCardsFromDB(context) {
      let cards = await API.getAllCards()
      context.commit('setInitialCards', cards)
      context.commit('setInitialId')
    },
    async addCard(context, card) {
      await API.createCard(card)
      context.commit('addCard', card)
    },
    async removeCard(context, id) {
      await API.removeCard(id)
      context.commit('removeCard', id)
    },
    setChosenCardId(context, id) {
      context.commit('setChosenCardId', id)
    },
  },
  modules: {
  }
})
