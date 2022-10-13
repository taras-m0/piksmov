<template>
  <div id="app">
    <div class="form">
      <form @submit.prevent.stop="send">
        <div>
          <input placeholder="Цена" :value="price" @input="setPrice">
          <label>{{ price }}</label>
        </div><div>
          <input placeholder="Кол-во" :value="qty" @input="setQty">
          <label>{{ qty }}</label>
        </div><div>
          <input placeholder="Сумма" :value="amount" @input="setAmount">
          <label>{{ amount }}</label>
        </div><div>
          <button type="submit">отпрвить</button>
          <pre>{{ copyStorage.priceData }}</pre>
        </div>

      </form>
    </div>

    <div class="out">
      <div class="out-row" v-for="row in log">
        <pre>{{ formatJ(row)}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import copyStorage from "../api/copyStorage";

export default {
  name: 'App',
  data() {
    return {
      copyStorage,
    };
  },

  computed: {
    ...mapState(['amount', 'price', 'qty', 'log']),
  },

  methods: {
    ...mapActions(['send']),

    setPrice(val){
      this.$store.commit('price', val.target.value)
    },

    setQty(val){
      this.$store.commit('qty', val.target.value)
    },

    setAmount(val){
      this.$store.commit('amount', val.target.value)
    },

    formatJ(val){
      return JSON.stringify(val, null, "  ")
    }
  },

  components: {
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

.form form, .labels {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
label, input {
  display: block;
}

.out {
  margin: 15px;
  padding: 10px;
  border: 1px solid black;
}
.out-row {
  margin: 5px 0;
}
</style>
