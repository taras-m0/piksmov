import api from '../../api/price.js';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    price: '',
    amount: '',
    qty: '',
    nonce: 0,
    log: []

  },
  mutations: {
    price(state, value){
      state.price = parseFloat(value.toString())
      this.commit('calcSumma')
      setTimeout(() => {
        this.commit('log', `commit price: ${value}`)
      }, 300)
    },

    qty(state, value){
      state.qty = parseInt(value.toString())
      this.commit('calcSumma')
      setTimeout(() => {
        this.commit('log', `commit qty: ${value}`)
      })
    },

    amount(state, value){
      state.amount = parseInt(value.toString())
      setTimeout(() => {
        this.commit('log', `commit amount: ${value}`)
      })
      state.price = value
      state.qty = 1
    },

    calcSumma(state){
      state.amount = state.price * state.qty
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
      ctx.commit('incr')
      return api.save({
        price: ctx.state.price,
        qty:  ctx.state.qty,
        amount: ctx.state.amount,
        nonce: ctx.state.nonce
      }).then((reply) => {
        ctx.commit('log', {
          reply, storage: window.localStorage.priceData
        })
        this.__sending = undefined
      }).catch((err) => {
        this.__sending = undefined
        ctx.commit('log', {
          err, storage: window.localStorage.priceData
        })
        return Promise.reject(err)
      })
    }
  },
  modules: {
  }
})
