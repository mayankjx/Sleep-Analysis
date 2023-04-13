<template>
  <div class="info">
    <div class="value">{{ value }}</div>
    <div class="title">{{ title }}</div>
    <div class="remark">{{ remark }}</div>
  </div>
</template>

<script>
import { isIntegerKey } from "@vue/shared";
import Card from "primevue/card";
import { reactive, onMounted, defineProps, pr } from "vue";

export default {
  name: "InfoContainer",
  components: {
    Card,
  },
  props: {
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
    let { value, title, remark } = props;

    return {
      value,
      title,
      remark,
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
