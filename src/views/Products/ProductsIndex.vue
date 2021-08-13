<template>
  <div class="products-index">
    <h1>{{ message }}</h1>
    <div v-for="product in products" v-bind:key="product.id">
      <p>{{ product.id }}</p>
      <p>{{ product.item_name }}</p>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
      <br />
      <!-- <p>{{ product.image }}</p> -->
      <!-- <router-link v-bind:to="`/products/${product.id}`">
        <img v-bind:src="products.image" /> -->
      <!-- </router-link> -->
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Full Menu",
      products: [],
      // searchTerm: "",
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
