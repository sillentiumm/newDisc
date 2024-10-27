
<template>
  <div class="modal">
    <div class="modal__content">
      <Button
        @click="close"
        :imageSrc="imageClose"
        imageAlt="закрыть"
        imageClass="btn__small"
        class="modal__exit"
      >
      </Button>
      <div class="modal__header">
        <h2>
          Регистрация
        </h2>
      </div>
      <div class="modal__body">
        <Input
          text="Email"
          type=""
          v-model="loginValue"
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

        <Input
          text="Пароль еще раз"
          type="password"
          v-model="confirmValue"
          placeholder="Ввод"
          :error="err.confirm"
        >
        </Input>

        <div class="modal__body__flex">
          <div class="modal__body__text">
            <div class="text-smal">У вас есть аккаунта?</div>
            <button @click.stop="openLogin" class="btn__empty">Войдите</button>
          </div>
          <Button @click="register" text="Зарегестрироваться"></Button>
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

import { registerUser } from '@/api/api'
import { validEmail, validPassword } from '@/validation'

import imageClose from '@/assets/images/icon/icon-close.svg'

export default {
  components: {
    Button,
    Input
  },
  data() {
    return {
      loginValue: '',
      passwordValue: '',
      confirmValue: '',
      error: '',
      err: {
        email: '',
        password: '',
        confirm: ''
      },
      
      imageClose: imageClose
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },

    openLogin () {
      this.$emit('openLogin')
    },

    async register() {
      this.err.email = validEmail(this.loginValue)
      this.err.password = validPassword(this.passwordValue)
      this.err.confirm = validPassword(this.confirmValue)
      if(this.err.email || this.err.password || this.err.confirm) return

      const data = {
        email: this.loginValue,
        password: this.passwordValue,
        confirm_password: this.confirmValue
      }
      
      try {
        const result = await registerUser(data)
        if(result) this.openLogin()
      } catch (error) {
        console.error(error);
      }

    },

  }
}

</script>