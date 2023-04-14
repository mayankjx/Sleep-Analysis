<template>
  <div class="mainConatiner">
    <Dashboard></Dashboard>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Dashboard from "./components/Dashboard.vue";

export default {
  name: "App",
  components: {
    Dashboard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}
.mainContainer {
  margin: auto;
}
</style>
