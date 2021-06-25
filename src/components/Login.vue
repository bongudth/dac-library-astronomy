<template>
  <div class="loginbox">
    <form onsubmit="event.preventDefault()" class="box">
      <h1>Đăng nhập</h1>
      <p class="text-muted">Vui lòng nhập họ tên và mật khẩu!</p>
      <input type="text" name="" placeholder="Họ tên" />
      <input type="password" name="" placeholder="Mật khẩu" />
      <a class="forgot text-muted" href="#">Quên mật khẩu?</a>
      <input type="submit" name="" value="Đăng nhập" href="#" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped lang="scss">
.loginbox {
  width: 100%;
  display: flex;
  justify-content: center;
}
.box {
  width: 500px;
  padding: 40px;
  position: absolute;
  background: #010101;
  text-align: center;
  transition: 0.25s;
}

.box input[type="text"],
.box input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #c77361;
  padding: 10px 10px;
  width: 250px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}

.box h1 {
  color: white;
  text-transform: uppercase;
  font-weight: 500;
}

.box input[type="text"]:focus,
.box input[type="password"]:focus {
  width: 300px;
  border-color: #824958;
}

.box input[type="submit"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #824958;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
}

.box input[type="submit"]:hover {
  background: #824958;
}

.forgot {
  text-decoration: underline;
}
</style>
