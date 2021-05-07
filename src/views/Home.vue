<template>
<div>
    <MainImage />
  <Main />
</div>
</template>
<script>
  import Main from '@/content/main.md'
  import MainImage from '@/components/MainImage.vue'

  export default {
    name: 'Home',
    components: {
      Main,
      MainImage
    }
  }
</script>
<style scoped>
</style>