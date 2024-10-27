
<template>
  <div class="modal">
    <div class="modal__content">
      <Button
        @click="close"
        :imageSrc="imageClose"
        imageClass="btn__small"
        imageAlt="закрыть"
        class="modal__exit"
      >
      </Button>
      <div class="modal__header">
        <h2>
          Добавление заметки
        </h2>
      </div>
      <div class="modal__body">
        <form @submit.prevent="createTask" action="">
          <Input
            text="Название заметки"
            type=""
            v-model="titleValue"
            placeholder="Введите значение"
          >
          </Input>

          <Textarea
            text="Текст заметки"
            v-model="textValue"
            placeholder="Введите текст"
          >
          </Textarea>

          <div class="tasklist__btn">
            <Button text="Добавить"></Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>

import Button from '@/UI/Button.vue'
import Input from '@/UI/Input.vue'
import Textarea from '@/UI/Textarea.vue'

import { createTask } from '@/api/api'

import imageClose from '@/assets/images/icon/icon-close.svg'

export default {
  components: {
    Button,
    Input,
    Textarea
  },
  data() {
    return {
      titleValue: '',
      textValue: '',
      imageClose: imageClose
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },

    async createTask() {
      const data = {
        title: this.titleValue,
        content: this.textValue
      }
      try {
        const result = await createTask(data)
        if(result) {
          this.close()
        }
      } catch (error) {
        console.error(error)
      }
    }
  },
}

</script>