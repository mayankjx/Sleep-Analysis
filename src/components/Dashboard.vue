<template>
  <div class="container">
    <div class="grid">
      <div class="sm:col-3 col-12">
        <Score></Score>
      </div>
      <div class="sm:col-9 col-12">
        <div class="grid">
          <div class="col-12 sm:col-4 bg-orange justify-content-center">
            <InfoContainer
              icon="heart"
              value="98"
              title="Heart Rate"
              remark="Very good"
            ></InfoContainer>
          </div>
          <div class="col-12 sm:col-4 bg-orange">
            <InfoContainer
              :icon="'blood'"
              value="93"
              title="Sp02"
              remark="Mild okaish"
            ></InfoContainer>
          </div>
          <div class="col-12 sm:col-4 bg-orange">
            <InfoContainer
              icon="movement"
              value="60"
              title="Movement"
              remark="Optimal movement"
            ></InfoContainer>
          </div>
        </div>
        <div class="grid">
          <div class="col-12 sm:col-12"><ChartContainer></ChartContainer></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoContainer from "./InfoConatiner.vue";
import ChartContainer from "./ChartContainer.vue";
import Score from "./Score.vue";

export default {
  name: "Dashboard",
  components: {
    InfoContainer,
    ChartContainer,
    Score,
  },
};
</script>

<style>
.container {
  /* text-align: center; */
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  max-height: 80%;
}

.grid {
  margin: auto;
  text-align: center;
  /* justify-content: center; */
}
</style>
