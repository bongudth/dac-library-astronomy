<template>
  <section>
    <ul class="icon-list">
      <li class="icon-item">
        <a href="https://www.facebook.com/ThienVanDaNang" class="icon-link"
          ><i class="fab fa-facebook-f"></i
        ></a>
      </li>
      <li class="icon-item">
        <a
          href="https://www.instagram.com/thienvanhocdanang.dac/"
          class="icon-link"
          ><i class="fab fa-instagram"></i
        ></a>
      </li>
      <li class="icon-item">
        <a href="https://thienvandanang.com/" class="icon-link"
          ><i class="fas fa-globe-americas"></i
        ></a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
}

ul {
  padding-inline-start: 0;
}

.icon-list {
  width: 100%;
  max-width: 10rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.icon-item {
  list-style: none;
}

.icon-link {
  display: inline-flex;
  font-size: 2rem;
  text-decoration: none;
  color: var(--color-icon);
  transition: 0.5s linear;
  position: relative;

  &:hover {
    color: #fff;

    &::before {
      transform: scale(1);
    }
  }

  &::before {
    content: "";
    position: absolute;
    transform: scale(0);
    transition: 0.3s cubic-bezier(0.95, 0.32, 0.37, 1.21);
  }
}
</style>