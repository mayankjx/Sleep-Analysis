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
@import url("https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700&display=swap");
.body {
}
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Schibsted Grotesk";
}
.mainContainer {
  margin: auto;
}
</style>
