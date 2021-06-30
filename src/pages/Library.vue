<template>
  <div>
    <div class="container hero">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h1 class="text-center">TỦ SÁCH THIÊN VĂN</h1>
        </div>
      </div>
    </div>
    <BookList />
  </div>
</template>

<script>
import BookList from "../components/BookList.vue";

export default {
  name: "Library",
  components: {
    BookList
  },
};
</script>

<style lang="scss" scoped>
.hero {
  margin-top: 60px;

  h1 {
    color: #fff;
    font-size: 40px;
    margin-top: 20px;
  }
}

@media (min-width: 768px) {
  .hero {
    margin-top: 20px;

    h1 {
      margin-bottom: 30px;
      line-height: 1.5;
    }
  }
}
</style>