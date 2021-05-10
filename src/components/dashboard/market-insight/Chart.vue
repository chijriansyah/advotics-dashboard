<template>
  <div>
    <apexchart type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

export default {
  name: "Chart",
  props: {
    series: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data: function () {
    return {
      chartOptions: {
        colors: ["#37B04C", "#289E45", "#7AE28C", "#707070", "#FFE854"],
        chart: {
          type: "line",
          stacked: true,
        },
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        legend: {
          position: "bottom",
        },
        fill: {
          opacity: 1,
        },
      },
    };
  },
};
</script>
