<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Patrick Hand";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url(./assets/image/background.jpg);
  background-size: cover;
}
</style>
