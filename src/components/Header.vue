<script>
import cart from "../store/CartModel";

export default {
  name: 'Header',
  props: {
    currency: String,
  },

  data() {
    return { cart };
  }
}
</script>

<style scoped>
  .header {
    padding: 10px;
    background: #e5e5e5;
  }
</style>

<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ cart.getFullPrice() }} {{ currency }}</h3>
  </div>
</template>
