<template>
  <div class="container">
    <h1>Dashboard</h1>
    <div class="grid">
      <div class="col-12 sm:col-3 bg-orange">
        <InfoContainer></InfoContainer>
      </div>
      <div class="col-12 sm:col-3 bg-orange">
        <InfoContainer></InfoContainer>
      </div>
      <div class="col-12 sm:col-3 bg-orange">
        <InfoContainer></InfoContainer>
      </div>
    </div>
    <div class="grid">
      <div class="col-12"></div>
    </div>
  </div>
</template>

<script>
import InfoContainer from "./InfoConatiner.vue";

export default {
  name: "Dashboard",
  components: {
    InfoContainer,
  },
};
</script>

<style>
.container {
  /* text-align: center; */
}

.grid {
  margin: auto;
  text-align: center;
}
</style>
