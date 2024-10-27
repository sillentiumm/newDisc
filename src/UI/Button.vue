
<template>
  <button class="btn">
    <img
      v-if="imageSrc"
      :src="imageSrc"
      alt="imageAlt"
      :class="imageClass"
    >
    {{ text }}
  </button>
</template>

<style scoped>

</style>

<script>

export default {
  props: {
    text: String,
    imageSrc: String,
    imageAlt: String,
    imageClass: String
  }
}

</script>
