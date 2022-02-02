<template>
<nav-bar></nav-bar>
<router-view></router-view>
<the-footer></the-footer>

</template>

<script>
import NavBar from './components/NavBar.vue'

import TheFooter from './components/TheFooter.vue'

export default {
  components: {
    NavBar,
    TheFooter
  },


}

</script>



<style>
*{
  margin: 0;
  text-align: left;
}

a{
  color:white;
  text-decoration: none;
  cursor: pointer;
}

.wrapper {
  margin-right: auto; 
  margin-left:  auto; 
  max-width: 1400px;
  padding-right: 10px;
  padding-left:  10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 40px;
}
.navbar{
  top: 0;
}

</style>
