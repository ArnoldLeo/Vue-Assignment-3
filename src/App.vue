<template>
  <div class="myApp">
    <!-- <Main /> -->
    
  <router-view/>
  </div>
</template>

<script>
// import Main from './components/main/Main.vue'

export default {
  // components: { Main },
  name: 'App',
  data(){
    return{}
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.myApp{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* background-color: azure; */
}
</style>
