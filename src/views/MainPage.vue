<template>
  <div class="section main">
    <div class="container">
      <Header @openLogin="changeLoginVisible" ></Header>
      <div class="main__content">
        <div class="main__left">
          <h1>
            Мои заметки
          </h1>
          <h3>
            Не забывай о важном, <br> храни его в облаке.
          </h3>
        </div>
        <div class="main__right">
          <img src="@/assets/images/main-bg.png" alt="фон">
        </div>
      </div>
    </div>
    <Login 
      v-if="loginVisible"
      @openRegister="openRegister"
      @close="changeLoginVisible"
    >
    </Login>
    <Register
    v-if="registerVisible"
      @openLogin="openLogin"
      @close="changeRegisterVisible"
    >
    </Register>
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

import router from '@/router'

export default {
  components: {
    Header,
    Login,
    Register
  },
  data() {
    return {
      loginVisible: false,
      registerVisible: false
    }
  },
  methods: {
    changeLoginVisible() {
      this.loginVisible = !this.loginVisible
    },

    changeRegisterVisible() {
      this.registerVisible = !this.registerVisible
    },

    openRegister() {
      this.loginVisible = false
      this.registerVisible = true
    },

    openLogin() {
      this.loginVisible = true
      this.registerVisible = false
    },
  },
  mounted() {
    if(localStorage.getItem('JWT')) router.push({ name: 'tasklist' })
  }
}

</script>