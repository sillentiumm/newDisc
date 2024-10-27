
<template>
  <div class="modal">
    <div class="modal__content">
      <Button
        @click="close"
        class="modal__exit"
        :imageSrc="imageClose"
        imageAlt="закрыть"
        imageClass="btn__small"
      >
      </Button>
      <div class="modal__header">
        <h2>
          Вход в ваш аккаунт
        </h2>
      </div>
      <div class="modal__body">
        <Input
          text="Email"
          type=""
          v-model="emailValue"
          placeholder="Введите значение"
          :error="err.email"
        >
        </Input>

        <Input
          text="Пароль"
          type="password"
          v-model="passwordValue"
          placeholder="Введите пароль"
          :error="err.password"
        >
        </Input>

        <div class="modal__body__flex">
          <div class="modal__body__text">
            <div class="text-smal">У вас нет аккаунта?</div>
            <button
              @click="openRegister"
              class="btn__empty"
            >
              Зарегестрируйтесь
            </button>
          </div>
          <Button @click="login" text="Войти"></Button>
        </div>

        <div v-if="error" class="error">
          Пользователь с таким логином не найден
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>

import Button from '@/UI/Button.vue'
import Input from '@/UI/Input.vue'

import { authUser } from '@/api/api'
import { validEmail, validPassword } from '@/validation'
import router from '@/router'

import imageClose from '@/assets/images/icon/icon-close.svg'

export default {
  components: {
    Button,
    Input
  },
  data() {
    return {
      emailValue: '',
      passwordValue: '',
      error: false,
      err: {
        email: '',
        password: ''
      },
      imageClose: imageClose
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },

    openRegister () {
      this.$emit('openRegister')
    },

    async login() {
      this.error = false
      this.err.email = validEmail(this.emailValue)
      this.err.password = validPassword(this.passwordValue)
      if(this.err.email || this.err.password || this.err.confirm) return

      const data = {
        email: this.emailValue,
        password: this.passwordValue,
      }

      try {
        const result = await authUser(data)
        if(result.accessToken) {
          router.push({ name: 'tasklist' })
        }
        else {
          this.error = true
        }
      } catch (error) {
        console.error(error)
      }

    }
  }
}

</script>