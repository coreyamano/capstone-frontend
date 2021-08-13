import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProductsIndex from "../views/Products/ProductsIndex.vue";
import ProductsShow from "../views/Products/ProductsShow.vue";
import OrderedItemsIndex from "../views/OrderedItems/OrderedItemsIndex.vue";
import ChecksIndex from "../views/Checks/ChecksIndex.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/products",
    name: "ProductsIndex",
    component: ProductsIndex,
  },
  {
    path: "/products/:id",
    name: "ProductsShow",
    component: ProductsShow,
  },
  {
    path: "/ordered_items",
    name: "OrderedItemsIndex",
    component: OrderedItemsIndex,
  },
  {
    path: "/checks",
    name: "ChecksIndex",
    component: ChecksIndex,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
