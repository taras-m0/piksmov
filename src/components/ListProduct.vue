<template>
  <div class="card">
    <p class="card-title">{{ title }}</p>
    <img class="card-image" :src="image" alt="">
    <p class="card-price">Цена: {{ price }} {{ currency }}</p>

    <div>
      <input type="number" v-model="amount">
      <span>кг</span>
    </div>

    <button @click="addToCart"> В корзину </button>
  </div>
</template>

<script>
import cart from "../store/CartModel"

export default {
  name: "ListProduct",

  data(){
    return { amount: 0 }
  },

  props: {
    id: [Number, String],
    title: String,
    image: String,
    price: Number,
    currency: String
  },

  methods: {
    addToCart(){
      cart.addProduct(this.id, parseInt( this.amount ))
      this.amount = 0
    }
  }
}
</script>

<style>
.card {
  display: inline-block;
  width: 100%;
  border: 1px solid #908888;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}
.card-image {
  width: 100%;
}
.card button {
  padding: 5px;
  margin: 5px;
}

</style>
