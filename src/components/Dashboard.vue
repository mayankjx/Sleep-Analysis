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
              :value="heartRate"
              title="Heart Rate"
            ></InfoContainer>
          </div>
          <div class="col-12 sm:col-4 bg-orange">
            <InfoContainer
              :icon="'blood'"
              :value="spo2"
              title="SpO2"
            ></InfoContainer>
          </div>
          <div class="col-12 sm:col-4 bg-orange">
            <InfoContainer
              icon="movement"
              :value="movement"
              title="Movement"
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
import { ref } from "vue";

export default {
  name: "Dashboard",
  components: {
    InfoContainer,
    ChartContainer,
    Score,
  },
  setup() {
    let heartRate = ref(30);
    let spo2 = ref(85);
    let movement = ref(100);

    return {
      heartRate,
      spo2,
      movement,
    };
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
