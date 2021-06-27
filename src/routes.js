import Home from "./pages/Home.vue";
import Library from "./pages/Library.vue";
import History from "./pages/History.vue";
import Wishlist from "./pages/Wishlist.vue";

export default [
  { path: '/home', component: Home },
  { path: '/library', component: Library },
  { path: '/history', component: History },
  { path: '/wishlist', component: Wishlist }
]