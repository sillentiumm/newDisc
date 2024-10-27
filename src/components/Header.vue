
<template>
  <header class="header">
    <img class="header-logo" src="@/assets/images/logo.svg" alt="logo">
    <Button
      v-if="!email"
      @click="openLogin"
      text="Вход"
      :imageSrc="imageEnterUrl"
      imageAlt="Войти"
    >
    </Button>
    <div v-else @click="changeLogoutVisible" class="header__flex">
      <div class="text-small desktop"> {{ email }} </div>
      <Button
        :imageSrc="imageUserUrl"
        imageAlt="выйти"
        class="btn__dark"
        imageClass="btn__user"
      >
      </Button>

      <div v-if="logoutVisible" @click.stop="logout" class="header__logout">
        <button class="header__logout__btn text-small-bold">Выйти</button>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>

<script>

import Button from '@/UI/Button.vue'

import { logout } from '@/api/api'

import imageEnterUrl from '@/assets/images/icon/icon-enter.svg'
import imageUserUrl from '@/assets/images/icon/icon-user.svg'

export default {
  components: {
    Button
  },
  data() {
    return {
      email: '',
      logoutVisible: false,

      imageEnterUrl: imageEnterUrl,
      imageUserUrl: imageUserUrl
    }
  },
  methods: {
    openLogin() {
      this.$emit('openLogin')
    },

    changeLogoutVisible() {
      this.logoutVisible = !this.logoutVisible
    },

    async logout() {
      logout()
    }
  },
  mounted() {
    if(localStorage.getItem('email')) this.email = localStorage.getItem('email')
  }
}

</script>
