<template>
  <div id="chartArea">
    <!-- <Chart type="line" :data="data" class="h-30rem"></Chart> -->
    <BarChart :chartData="data" />
  </div>
</template>

<script>
// import Chart from "primevue/chart";
import { reactive, onMounted } from "vue";
// import Chart from "chart.js/auto";
import { LineChart, BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
export default {
  components: {
    LineChart,
    BarChart,
  },
  setup() {
    const data = reactive({
      datasets: [
        {
          data: [20, 10, 40, 30, 10, 20, 5],
        },
      ],
      labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednessday",
        "Friday",
        "Sataurday",
      ],
    });

    const renderChart = () => {
      new Chart(document.getElementById("chartArea"), {
        type: "line",
        data: {
          datasets: [
            {
              data: [20, 10],
            },
          ],
          labels: ["a", "b"],
        },
      });
    };

    onMounted(() => {
      // renderChart();
    });

    return {
      data,
      renderChart,
    };
  },
};
</script>

<style>
#chartArea {
  margin-top: 20px;
}
</style>
