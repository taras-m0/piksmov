<template>
  <div class="cart-list">
    <div v-for="item in spisok_dlya_rendera">
      {{ item }}
    </div>
    <div>Itogo: {{ fullPrice }} {{ currency }}</div>
  </div>
</template>

<script>
import cart from "../store/CartModel";

export default {
  data(){
    return { cart }
  },

  props: {
    currency: String
  },

  computed: {
    spisok_dlya_rendera() {
      return cart.getListProducts().reverse();
    },

    fullPrice() {
      return cart.getFullPrice()
    }
  },
};
</script>

<style>

</style>
