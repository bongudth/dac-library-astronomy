<template>
  <div class="header-dark">
    <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
      <div class="container">
        <a class="navbar-brand" href="#">DAC</a
        ><button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navcol-1"
        >
          <span class="sr-only">Toggle navigation</span
          ><span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navcol-1">
          <ul class="nav navbar-nav mr-auto">
            <li class="nav-item" role="presentation">
              <a class="nav-link" href="#">Tủ sách</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" href="#">Lịch sử</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" href="#">Wishlist</a>
            </li>
          </ul>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            class="btn btn-light action-button"
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </nav>
    <div class="container hero">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h1 class="text-center">TỦ SÁCH THIÊN VĂN</h1>
        </div>
      </div>
    </div>
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
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
.header-dark .navbar {
  background: transparent;
  color: #fff;
}

@media (min-width: 768px) {
  .header-dark .navbar {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
}

.header-dark .navbar .navbar-brand {
  font-weight: bold;
  color: inherit;
}

.header-dark .navbar .navbar-brand:hover {
  color: #f0f0f0;
}

.header-dark .navbar .navbar-collapse span {
  margin-top: 5px;
}

.header-dark .navbar .navbar-collapse span .login {
  color: #d9d9d9;
  margin-right: 0.5rem;
  text-decoration: none;
}

.header-dark .navbar .navbar-collapse span .login:hover {
  color: #fff;
}

.header-dark .navbar .navbar-toggler {
  border-color: #747474;
}

.header-dark .navbar .navbar-toggler:hover,
.header-dark .navbar-toggler:focus {
  background: none;
}

.header-dark .navbar .navbar-toggler {
  color: #eee;
}

.header-dark .navbar .navbar-collapse,
.header-dark .navbar .form-inline {
  border-color: #636363;
}

@media (min-width: 992px) {
  .header-dark .navbar.navbar .navbar-nav .nav-link {
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }
}

.header-dark .navbar.navbar-dark .navbar-nav .nav-link {
  color: #d9d9d9;
}

.header-dark .navbar.navbar-dark .navbar-nav .nav-link:focus,
.header-dark .navbar.navbar-dark .navbar-nav .nav-link:hover {
  color: #fcfeff !important;
  background-color: transparent;
}

.header-dark .navbar .action-button,
.header-dark .navbar .action-button:active {
  background: #824958;
  border-radius: 20px;
  font-size: inherit;
  color: #fff;
  box-shadow: none;
  border: none;
  text-shadow: none;
  padding: 0.5rem 0.8rem;
  transition: background-color 0.25s;
}

.header-dark .navbar .action-button:hover {
  background: #b97b8a;
}

.header-dark .navbar .form-inline label {
  color: #ccc;
}

.header-dark .hero {
  margin-top: 60px;
}

@media (min-width: 768px) {
  .header-dark .hero {
    margin-top: 20px;
  }
}

.header-dark .hero h1 {
  color: #fff;
  font-size: 40px;
  margin-top: 20px;
}

@media (min-width: 768px) {
  .header-dark .hero h1 {
    margin-bottom: 30px;
    line-height: 1.5;
  }
}

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
}

.icon-link:hover {
  color: #fff;
}

.icon-link::before {
  content: "";
  position: absolute;
  transform: scale(0);
  transition: 0.3s cubic-bezier(0.95, 0.32, 0.37, 1.21);
}

.icon-link:hover::before {
  transform: scale(1);
}
</style>
