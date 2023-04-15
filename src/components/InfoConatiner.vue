<template>
  <div class="info">
    <div class="infoFlex">
      <img :src="imageSource" alt="heart" />
      <div class="infoText">
        <p class="value" :style="myStyle">{{ value }}</p>
        <p class="title">{{ title }}</p>
      </div>
    </div>
    <div class="remark">{{ remark }}</div>
  </div>
</template>

<script>
import Card from "primevue/card";
import ProgressBar from "primevue/progressbar";
import { reactive, ref, onMounted, defineProps, pr } from "vue";

export default {
  name: "InfoContainer",
  components: {
    Card,
    ProgressBar,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    let { icon, value, title } = props;
    const imageSource = require(`@/assets/${icon}.png`);
    let color = ref("#03040b");
    let remark = ref("");

    // check for heart rate values
    const computeHeartBeat = () => {
      if (title === "Heart Rate") {
        if (value < 70) {
          color.value = "#FF6600";
          remark.value = "Heart beat is mildily okay";
          if (value < 50) {
            color.value = "#e42218";
            remark.value = "Heartbeat is very low";
          }
        } else {
          color.value = "#66CC00";
          remark.value = "Heartbeat is okay";
        }
      }
    };

    // check values for spo2
    const computeSpO2 = () => {
      if (title === "SpO2") {
        if (value < 90) {
          color.value = "#FF6600";
          remark.value = "SpO2 level is mildily okay";
          if (value < 80) {
            color.value = "#e42218";
            remark.value = "SpO2 is dangerously low";
          }
        } else {
          color.value = "#66CC00";
          remark.value = "SpO2 is great";
        }
      }
    };

    // check values for movement
    const computeMovement = () => {
      if (title === "Movement") {
        if (value < 90) {
          color.value = "#FF6600";
          remark.value = "Movement level is mildily okay";
          if (value < 80) {
            color.value = "#e42218";
            remark.value = "Movement is dangerously low";
          }
        } else {
          color.value = "#66CC00";
          remark.value = "Movement is great";
        }
      }
    };

    if (title == "Heart Rate") {
      computeHeartBeat();
    } else if (title === "SpO2") {
      computeSpO2();
    } else {
      computeMovement();
    }
    let myStyle = ref({
      color: color.value,
    });
    return {
      value,
      title,
      remark,
      imageSource,
      icon,
      myStyle,
    };
  },
};
</script>

<style>
.info {
  /* height: 100%;
  width: 60%; */
  padding: 20px;
  border-radius: 10px;
  background-color: #fcf5e5;
  /* background-color: #03040b; */
  color: #03040b;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  text-align: left;
}

.infoFlex {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 15px;
  border-bottom: 1px solid black;
}

.infoFlex img {
  height: 60px;
}

.infoText {
  padding-left: 10px;
}

.value {
  font-size: 2.5em;
  font-weight: 600;
  margin: 0;
  color: #e42218;
}

.title {
  font-size: 1em;
  margin: 0;
  font-weight: 400;
}

.remark {
  margin-top: 10px;
}
</style>
