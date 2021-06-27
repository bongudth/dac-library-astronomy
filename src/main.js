import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes  from "./routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: Routes
})

// router.beforeEach((to, from, next) => {
//   if (to.query.delay) {
//     setTimeout(() => {
//       next()
//     }, Number(to.query.delay))
//   } else {
//     next()
//   }
// })

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
