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
          </ul>
          <span class="navbar-text"
            ><a href="#" class="login">Đăng nhập</a></span
          ><a class="btn btn-light action-button" role="button" href="#"
            >Đăng ký</a
          >
        </div>
      </div>
    </nav>
    <div class="container hero">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h1 class="text-center">Tủ sách thiên văn</h1>
        </div>
      </div>
    </div>
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
  padding-top: 0;
  padding-bottom: 0;
  color: #fff;
  border-radius: 0;
  box-shadow: none;
  border: none;
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
  background: #B97B8A;
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
  font-family: "Lora", serif;
  font-size: 40px;
  margin-top: 20px;
  margin-bottom: 80px;
}

@media (min-width: 768px) {
  .header-dark .hero h1 {
    margin-bottom: 50px;
    line-height: 1.5;
  }
}
</style>
