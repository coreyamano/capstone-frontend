<template>
  <div class="products-show">
    <h1>{{ message }}</h1>
    <div>
      <p>{{ product.id }}</p>
      <p>{{ product.item_name }}</p>
      <p>{{ product.description }}</p>
      <p>${{ product.price }}</p>
      <!-- <img v-bind:src="product.image" />
      <router-link v-bind:to="`/products/${product.id}/edit`">Edit</router-link> -->
      <p><button>Add Item</button></p>
      <!-- <p><button>Delete Product</button></p> -->
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "View Item",
      product: {},
    };
  },
  created: function () {
    this.productsShow();
  },
  methods: {
    productsShow: function () {
      axios.get(`/products/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.product = response.data;
      });
    },
  },
};
</script>