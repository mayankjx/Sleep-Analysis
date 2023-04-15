<template>
  <div class="info">
    <div class="infoFlex">
      <img :src="imageSource" alt="heart" />
      <div class="infoText">
        <p class="value">{{ value }}</p>
        <p class="title">{{ title }}</p>
      </div>
    </div>
    <div class="remark">{{ remark }}</div>
  </div>
</template>

<script>
import Card from "primevue/card";
import { reactive, ref, onMounted, defineProps, pr } from "vue";

export default {
  name: "InfoContainer",
  components: {
    Card,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    remark: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    let { icon, value, title, remark } = props;
    const imageSource = require(`@/assets/${icon}.png`);

    return {
      value,
      title,
      remark,
      imageSource,
      icon,
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
