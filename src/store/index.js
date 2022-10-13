import api from '../../api/price.js';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    price: '',
    amount: '',
    summa: '',
    nonce: 0,
    log: []

  },
  mutations: {
    price(state, value){
      state.price = parseFloat(value.toString())
      this.commit('log', `commit price: ${value}`)
      this.commit('calcSumma')
    },

    amount(state, value){
      state.amount = parseInt(value.toString())
      this.commit('log', `commit amount: ${value}`)
      this.commit('calcSumma')
    },

    summa(state, value){
      state.summa = parseInt(value.toString())
      this.commit('log', `commit summa: ${value}`)
      state.price = value
      state.amount = 1
    },

    calcSumma(state){
      state.summa = state.price * state.amount
    },

    incr(state){
      state.nonce++
    },

    log(state, message){
      this.state.log.unshift(message)
    }
  },
  getters:{
  },

  actions: {
    send(ctx, data){
      if(this.__sending){
        return Promise.reject(new Error('double send'))
      }

      this.__sending = 1
      return api.save({
        price: ctx.state.price,
        amount:  ctx.state.amount,
        summa:  ctx.getters.summa,
        nonce: ctx.state.nonce
      }).then((reply) => {
        ctx.commit('incr')
        ctx.commit('log', {
          reply, storage: window.localStorage.priceData
        })
        this.__sending = undefined
      }).catch((err) => {
        this.__sending = undefined
        return Promise.reject(err)
      })
    }
  },
  modules: {
  }
})
