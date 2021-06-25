<template>
  <div class="header-dark">
    <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
      <div class="container">
        <a class="navbar-brand" href="#">DAC</a>
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
            id="show-modal"
            @click="showModal = true"
            class="btn btn-light action-button"
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </nav>
    <div class="modal-mask" v-if="showModal" @close="showModal = false">
      <div class="modal-wrapper">
        <div class="modal-container">
          <modal>
            <Login />
          </modal>
        </div>
      </div>
    </div>
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
import Login from "./Login.vue";

export default {
  name: "Header",
  data() {
    return {
      showModal: true,
    };
  },
  components: {
    Login,
  },
};
</script>

<style scoped lang="scss">
.header-dark {
  .navbar {
    background: transparent;
    color: #fff;
    .navbar-brand {
      font-weight: bold;
      color: inherit;
      &:hover {
        color: #f0f0f0;
      }
    }
    .navbar-collapse {
      border-color: #636363;
    }
    .action-button {
      background: #824958;
      border-radius: 20px;
      font-size: inherit;
      color: #fff;
      box-shadow: none;
      border: none;
      text-shadow: none;
      padding: 0.5rem 0.8rem;
      transition: background-color 0.25s;
      &:active {
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
      &:hover {
        background: #b97b8a;
      }
    }
  }
  .navbar.navbar-dark {
    .navbar-nav {
      .nav-link {
        color: #d9d9d9;
        &:focus {
          color: #fcfeff !important;
          background-color: transparent;
        }
        &:hover {
          color: #fcfeff !important;
          background-color: transparent;
        }
      }
    }
  }
  .hero {
    margin-top: 60px;
    h1 {
      color: #fff;
      font-size: 40px;
      margin-top: 20px;
    }
  }
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
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
@media (min-width: 768px) {
  .header-dark {
    .navbar {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
    }
    .hero {
      margin-top: 20px;
      h1 {
        margin-bottom: 30px;
        line-height: 1.5;
      }
    }
  }
}
@media (min-width: 992px) {
  .header-dark {
    .navbar.navbar {
      .navbar-nav {
        .nav-link {
          padding-left: 1.2rem;
          padding-right: 1.2rem;
        }
      }
    }
  }
}
</style>
