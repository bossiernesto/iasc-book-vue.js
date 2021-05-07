<template>
<div class="wrapper">

    <div class="container header">

  <div class="titulo-heading">
      <div class="container-background">
          <div class="titulo">
              <h3 class="Title">
                  dddd
              </h3>
              <br>
              <h4>
                 dddd
              </h4>
          </div>
      </div>
  </div>


        <div class="container">

            <div class="inner-content col-sm-8 col-md-10">
                <Main />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Main from '../content/main.md'

export default {
  name: 'HelloWorld',
  components: {
    Main
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container-background {
    background-image: url('~@/public/img/home-bg.jpg');
    min-height: 150px;
}
</style>
