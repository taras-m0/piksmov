<template>
  <div id="app" class="container">
    <div class="nav">
      <router-link :to="{name: 'vuex'}">Use Vuex</router-link>
      <router-link :to="{name: 'no_vuex'}">No Vuex</router-link>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import copyStorage from "../api/copyStorage";

export default {
  name: 'App',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

.nav {
  display: flex;
  justify-content: space-around;
  margin: 10px;
}
</style>
