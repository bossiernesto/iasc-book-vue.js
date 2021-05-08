<template>
    <div class="error">
      <div class="container">
        <div class="row">
          <div class="col-md-6 align-self-center">
            <Svg />
          </div>
          <div class="col-md-6 align-self-center">
            <h1>404</h1>
            <h2>UH OH! You're lost.</h2>
            <p>The page you are looking for does not exist.
              How you got here is a mystery. But you can click the button below
              to go back to the homepage.
            </p>
            <router-link class="nav-link" to="/">
              <button class="btn orange">HOME</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Svg from '@/components/ErrorSvg.vue'

export default {
    name: 'NotFound',
    components: {
      Svg
    },
    mounted() {
        console.log('404');
    }
}
</script>
<style lang="scss" scoped>
  .error {
    min-height: 800px;
  }
  
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
:root {
  --blue: #0e0620;
  --white: #fff;
  --orange: #f05800;
}


button {
  font-family:"Nunito Sans";
}
ul {
  list-style-type: none;
  padding-inline-start: 35px;
}
svg {
  width: 100%;
}
h1 {
  font-size: 7.5em;
  margin: 15px 0px;
  font-weight:bold;
}
h2 {
  font-weight:bold;
}

.btn {
  z-index: 1;
  overflow: hidden;
  background: transparent;
  position: relative;
  padding: 8px 50px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1em;
  letter-spacing: 2px;
  transition: 0.2s ease;
  font-weight: bold;
  margin: 5px 0px;
  &.orange {
    border: 4px solid var(--orange);
    color: var(--blue);
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0%;
      height: 100%;
      background: var(--orange);
      z-index: -1;
      transition: 0.2s ease;
    }
    &:hover {
      color: var(--white);
      background: var(--orange);
      transition: 0.2s ease;
      &:before {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width:768px) {
  body {
    display:block;
  }
  .container {
    margin-top:70px;
    margin-bottom:70px;
  }
} 
</style>