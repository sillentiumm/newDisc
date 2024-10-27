<template>
  <div class="section">
    <div class="container">
      <Header></Header>
      <div class="taskslist__content">
        <Button
          @click="changeVisibleTaskAdd"
          :imageSrc="imageAdd"
          imageClass="btn__small"
          imageAlt="добавить заметку"
          class="btn__tasklist"
        >
        </Button>
        <div class="taskslist">
          <div v-for="task in taskslist" :key="task.id" class="task">
            <div class="task__content">
              <div class="task__header">
                <h4> {{ task.title }} </h4>
              </div>
              <div class="task__body text-normal">
                {{ task.content }}
              </div>
              <div class="task__footer">
                <button @click="deleteTask(task.id)" class="task__footer__btn">
                  <img src="@/assets/images/icon/icon-close.svg" alt="фон">
                  <span class="text-normal">Удалить</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TaskAdd v-if="visibleTaskAdd" @close="changeVisibleTaskAdd"></TaskAdd>
  </div>
</template>

<script>

import Header from '../components/Header.vue'
import TaskAdd from '../components/TaskAdd.vue'
import Button from '@/UI/Button.vue'

import { getTasks, deleteTask } from '@/api/api'
import router from '@/router'

import imageAdd from '@/assets/images/icon/icon-add.svg'


export default {
  components: {
    Header,
    TaskAdd,
    Button
  },
  data() {
    return {
      taskslist: [],
      visibleTaskAdd: false,

      imageAdd: imageAdd
    }
  },
  methods: {
    changeVisibleTaskAdd() {
      this.visibleTaskAdd = !this.visibleTaskAdd
      if (!this.visibleTaskAdd) this.getTasks()
    },

    async getTasks() {
      try {
        const result = await getTasks()
        if(result) {
          this.taskslist = result
        }
      } catch (error) {
        console.error(error)
      }
    },

    async deleteTask(id) {
      this.taskslist = this.taskslist.filter(task => task.id !== id)
      deleteTask(id)
    }
  },
  mounted() {
    if(localStorage.getItem('JWT')) this.getTasks()
    else router.push({ name: 'main_page' })
  }
}

</script>