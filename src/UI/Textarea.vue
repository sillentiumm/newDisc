
<template>
  <span class="input__title text-small">{{ text }}</span>
  <div class="textarea__wrapper">
    <textarea 
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="textarea"
      :placeholder="placeholder"
    >
    </textarea>
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
    size: String
  },
  data() {
    return {
      visiblePassword: false,
      originalValue: '',
      displayedValue: '',
      isMasked: false
    }
  },
  methods: {
    changeVisiblePasword() {
      this.visiblePassword = !this.visiblePassword
    },
  }
}

</script>