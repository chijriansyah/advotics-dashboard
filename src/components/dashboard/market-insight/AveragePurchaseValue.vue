<template>
  <b-col cols="6"
    ><b-card class="h-100">
      <div class="d-flex justify-content-between align-items-center mb-16px">
        <p class="card-title">AVERAGE PURCHASE VALUE</p>
        <div>
          <b-form-select
            v-model="selected"
            :options="options"
            class="select-chart"
            @change="changeSeries()"
          ></b-form-select>
          <a href="#"
            ><img
              class="icon-more"
              :src="require('@/assets/images/Icon - More - Filled.svg')"
              alt=""
          /></a>
        </div>
      </div>
      <Chart :series="series" /> </b-card
  ></b-col>
</template>

<script>
import Chart from "@/components/dashboard/market-insight/Chart";
import {
  yesterday,
  last7days,
  last30days,
  thisMonth,
} from "@/constants/chart-data";

export default {
  name: "AveragePurchaseValue",
  components: {
    Chart,
  },
  created() {
    this.changeSeries();
  },
  data() {
    return {
      series: [],
      selected: "last7days",
      options: [
        { value: "yesterday", text: "Yesterday" },
        { value: "last7days", text: "Last 7 days" },
        { value: "last30days", text: "Last 30 days" },
        { value: "thisMonth", text: "This Month" },
      ],
    };
  },
  methods: {
    changeSeries() {
      if (this.selected === "yesterday") {
        this.series = yesterday;
        return;
      }

      if (this.selected === "last7days") {
        this.series = last7days;
        return;
      }

      if (this.selected === "last30days") {
        this.series = last30days;
        return;
      }

      if (this.selected === "thisMonth") {
        this.series = thisMonth;
        return;
      }
    },
  },
};
</script>

<style scoped>
.select-chart {
  margin-right: 16px;
  color: #4d4f5c;
  font-size: 12px;
  padding: 10px;
  box-shadow: 0px 2px 3px #0000000d;
  border: 1px solid #d7dae2;
  border-radius: 2px;
  cursor: pointer;
}
</style>
