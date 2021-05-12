<template>
  <span @click="navigate"><router-link ref="link" :to="to"><slot></slot></router-link></span>
</template>

<script>
  export default {
    name: 'AnchorLink',
    props: ['to'],
    methods: {
      navigate() {
        const current = this.$router.currentRoute.fullPath;
        const href = this.$refs.link.$el.getAttribute('href');
        if (current === href) {
          location.href = this.to.hash;
        }
      }
    }
  };
</script>