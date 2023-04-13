<template>
  <div class="info">
    <div class="value">98</div>
    <div class="title">Heart Rate</div>
    <div class="remark">This heart rate is very good</div>
  </div>
</template>

<script>
import Card from "primevue/card";

export default {
  name: "InfoContainer",
  components: {
    Card,
  },
};
</script>

<style>
.info {
  /* height: 40vh; */
  padding: 20px;
  border-radius: 10px;
  background-color: bisque;
}

.value {
  font-size: 2.5em;
}

.title {
  font-size: 1.2em;
  padding-top: 3px;
}

.remark {
  padding-top: 7px;
}
</style>
