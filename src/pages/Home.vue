<template>
<div class="home">
  <Social />  
  <SolarSystem />
</div>
</template>

<script>
import Social from "../components/Social.vue"
import SolarSystem from "../components/SolarSystem.vue"

export default {
  name: "Home",
  components: {
    Social,
    SolarSystem,
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
}
</style>