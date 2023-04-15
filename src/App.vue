<template>
  <div class="mainContainer">
    <div class="navbar">
      <div class="website">Sleep Tracking App</div>
    </div>
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
body {
  margin: 0px;
  /* background-color: #fcfbf4; */
  background-color: #faf9f6;
  width: 100vw;
  height: 100vh;
  color: #03040b;
  /* color: #f4f5fc; */
}
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Schibsted Grotesk";
  height: 100%;
  width: 100%;
}
.mainContainer {
  margin: auto;
  height: 100%;
  width: 100%;
}

.navbar {
  height: 10%;
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
}
</style>
