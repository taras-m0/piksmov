<template>
  <div class="product-list">
    <product v-for="product in products"
             :key="product.id"
             :currency="currency"
             v-bind="product"
             class="product-list__product"
    ></product>
  </div>
</template>

<script>
import Product from "./ListProduct";
import ProductsList, { loadProducts } from "../store/ProductsListModel"

export default {
  components: { Product },

  props: {
    currency: String,
  },

  data() {
    return {
      products: ProductsList,
    };
  },

  async created() {
    // if mounted
    while (!this.__stop){
      await loadProducts()

      // delay 2 sec
      await (new Promise((resolve => {
        setTimeout(resolve, 2000)
      })))
    }
  },

  beforeDestroy() {
    this.__stop = 1;
  }
};
</script>

<style>
  .product-list {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
    grid-gap: 20px;
    align-items: stretch;
  }
</style>
