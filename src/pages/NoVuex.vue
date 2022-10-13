<template>
  <div id="vuex">
    <div class="form">
      <form @submit.prevent.stop="model.send()">
        <div>
          <input placeholder="Цена" v-model="model.price">
          <label>{{ model.price }}</label>
        </div><div>
        <input placeholder="Кол-во" v-model="model.qty">
        <label>{{ model.qty }}</label>
      </div><div>
        <input placeholder="Сумма" v-model="model.amount">
        <label>{{ model.amount }}</label>
      </div><div>
        <button type="submit">отпрвить</button>
        <pre>{{ copyStorage.priceData }}</pre>
      </div>

      </form>
    </div>

    <div class="out">
      <div class="out-row" v-for="row in model.log">
        <pre>{{ formatJ(row)}}</pre>
      </div>
    </div>
  </div>

</template>

<script>
import copyStorage from "../../api/copyStorage";
import model from "../store/Model";

export default {
  name: 'NoVuex',
  data() {
    return {
      copyStorage,
      model
    };
  },

  methods: {
    formatJ(val){
      return JSON.stringify(val, null, "  ")
    }
  },
}
</script>


<style src="./common.css">
</style>
