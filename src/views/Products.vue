<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>Search: <input v-model="searchTerm" /></p>
    <div
      v-for="product in filterBy(product, searchTerm, 'item_name')"
      v-bind:key="product.id"
    >
      <p>{{ product.item_name }}</p>
      <p>{{ product.price }}</p>
      <p>{{ product.description }}</p>
      <p>{{ product.image }}</p>
      <router-link v-bind:to="`/products/${product.id}`">
        <img v-bind:src="products.image" />
      </router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "All Products!",
      products: [],
      searchTerm: "",
    };
  },
  created: function () {
    this.indexProducts();
  },
  methods: {
    indexProducts: function () {
      axios.get("/products").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
  },
};
</script>
