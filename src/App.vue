<template>
  <div id="app">
    <Header />
    <BookList />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import BookList from "./components/BookList.vue";

export default {
  name: "App",
  components: {
    Header,
    BookList
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Patrick Hand";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url(./assets/image/background.jpg);
  background-size: contain;
  background-repeat: repeat;  
}
</style>
