<template>
  <div class="header-dark">
    <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
      <div class="container">
        <router-link to="/home" class="navbar-brand">DAC</router-link>
        <div class="collapse navbar-collapse" id="navcol-1">
          <ul class="nav navbar-nav mr-auto">
            <li class="nav-item" role="presentation">
              <router-link to="/library" class="nav-link">Tủ sách</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/history" class="nav-link">Lịch sử</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/wishlist" class="nav-link"
                >Yêu thích</router-link
              >
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
    <div class="modal-mask" v-if="showModal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <Login @close="showModal = false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./Login.vue";

export default {
  name: "Header",
  data() {
    return {
      showModal: false,
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
      cursor: pointer;

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
        cursor: pointer;

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

@media (min-width: 768px) {
  .header-dark {
    .navbar {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
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
