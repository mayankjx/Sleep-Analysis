<template>
  <div class="container">
    <div class="personalInfo">
      <p class="name">Hello, <span class="boldName">Mayank Jhavre</span></p>
      <p class="datetime"></p>
    </div>
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
      <div class="col-12 sm:col-9"><ChartContainer></ChartContainer></div>
    </div>
  </div>
</template>

<script>
import InfoContainer from "./InfoConatiner.vue";
import ChartContainer from "./ChartContainer.vue";

export default {
  name: "Dashboard",
  components: {
    InfoContainer,
    ChartContainer,
  },
};
</script>

<style>
.container {
  /* text-align: center; */
  padding: 20px;
  /* max-width: 80%;
  max-height: 80%; */
}

.personalInfo {
}

.name {
}

.boldName {
  font-weight: 700;
}

.grid {
  margin: auto;
  text-align: center;
  /* justify-content: center; */
}
</style>
