
<template>
  <span class="input__title text-small">{{ text }}</span>
  <div class="input__wrapper">
    <input 
      @input="updateValue"
      :type="inputType"
      :placeholder="placeholder"
      :value="modelValue"
      class="input text-small" 
    >
    <div v-if="error" class="error__small">{{ error }}</div>
    
    <div @click="changeVisiblePasword" v-if="type === 'password'" class="input__wrapper__img">
      <img v-if="visiblePassword" src="@/assets/images/icon/icon-password-visible.svg">
      <img v-else src="@/assets/images/icon/icon-password.svg">
    </div>
  </div>
</template>

<style scoped>

</style>

<script>

export default {
  props: {
    modelValue: {
      type: String,
      required: true
    },
    text: String,
    type: String,
    value: String,
    placeholder: String,
    error: String
  },
  data() {
    return {
      visiblePassword: true,
      originalValue: '',
      displayedValue: '',
      isMasked: false,
      inputType: 'text'


    }
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value)
      // this.$emit('changeValue', event.target.value)
    },
    changeVisiblePasword() {
      this.visiblePassword = !this.visiblePassword
      if(this.visiblePassword) this.inputType = 'text'
      else this.inputType = 'password'
    },
  },

  mounted() {
    if(this.type === 'password') this.changeVisiblePasword()
  }
}

</script>