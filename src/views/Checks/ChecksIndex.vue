<template>
  <div class="checks-index">
    <h1>{{ message }}</h1>
    <div v-for="check in checks" v-bind:key="check.id">
      <p>{{ check.id }}</p>
      <p>{{ check.subtotal }}</p>
      <p>{{ check.tax }}</p>
      <p>{{ check.total }}</p>
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
      message: "All Checks",
      checks: [],
      // searchTerm: "",
    };
  },
  created: function () {
    this.indexChecks();
  },
  methods: {
    indexChecks: function () {
      axios.get("/checks").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
  },
};
</script>
