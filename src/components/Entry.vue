<template>
  <div class="wrapper">
    <div class="container header">
  <div class="titulo-heading">
      <div class="container-background">
          <div class="titulo">
              <h3 class="Title">
                  {{this.title}}
              </h3>
              <br>
              <h4>
                 {{this.description}}
              </h4>
          </div>
      </div>
  </div>
        <div class="container">
            <div class="inner-content col-sm-8 col-md-10">
                <router-view />
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'Entry',
  components: {
  },
  props: {
    title: String,
    description: String
  }
}
</script>
<style scoped>
.container-background {
    background-image: url('~@/public/img/home-bg.jpg');
    min-height: 150px;
}
</style>
