<template>
  <div id="app">
    <div class="form">
      <form @submit.prevent.stop="send">
        <div>
          <input placeholder="Цена" :value="price" @input="setPrice">
          <label>{{ price }}</label>
        </div><div>
          <input placeholder="Кол-во" :value="amount" @input="setAmount">
          <label>{{ amount }}</label>
        </div><div>
          <input :value="summa" disabled>
          <label>{{ summa }}</label>
        </div><div>
          <button type="submit">отпрвить</button>
          <pre>{{ localStorage }}</pre>
        </div>

      </form>
    </div>

    <pre class="d9">
      {{  formatJ( log ) }}
    </pre>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      localStorage: window.localStorage.priceData ?? '',
    };
  },

  computed: {
    ...mapState(['amount', 'price', 'log']),
    ...mapGetters(['summa'])
  },

  methods: {
    ...mapActions(['send']),

    setPrice(val){
      this.$store.commit('price', val.target.value)
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
</style>
