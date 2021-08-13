<template>
  <div class="ordereditems-index">
    <h1>{{ message }}</h1>
    <div v-for="ordered_item in ordered_items" v-bind:key="ordered_item.id">
      <p>{{ ordered_item.product_id }}</p>
      <p>{{ ordered_item.quantity }}</p>
      <p>{{ ordered_item.status }}</p>
      <p>{{ ordered_item.dining_option }}</p>
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
      message: "Order Cart",
      ordered_items: [],
      // searchTerm: "",
    };
  },
  created: function () {
    this.indexOrderedItems();
  },
  methods: {
    indexOrderedItems: function () {
      axios.get("/ordered_items").then((response) => {
        console.log(response.data);
        this.ordered_items = response.data;
      });
    },
  },
};
</script>
