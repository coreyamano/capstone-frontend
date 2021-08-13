<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/products">Menu</router-link> |
      <router-link to="/ordered_items">Ordered Items</router-link> |
      <router-link to="/checks">Check Out</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<style></style>
