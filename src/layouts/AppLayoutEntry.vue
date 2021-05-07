<template>
  <div>
    <Entry :title="entry.title" :description="entry.description"/>
    <slot />
  </div>
</template>

<script>
import Entry from '@/components/Entry.vue'

export default {
  name: "AppLayoutEntry",
  components: {
    Entry
  },
  data() {
    return {
      entry: {
        title: this.$route.meta.title,
        description: this.$route.meta.description
      }
    }
  }
}
</script>
<style scoped>
</style>