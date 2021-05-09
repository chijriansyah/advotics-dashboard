<template>
  <b-col cols="6"
    ><b-card class="h-100">
      <div class="d-flex justify-content-between align-items-center">
        <p class="card-title">AVERAGE PURCHASE VALUE</p>
        <div>
          <b-form-select
            v-model="selected"
            :options="options"
            class="select-chart"
          ></b-form-select>
          <a href="#"
            ><img
              class="icon-more"
              :src="require('@/assets/images/Icon - More - Filled.svg')"
              alt=""
          /></a>
        </div></div></b-card
  ></b-col>
</template>

<script>
export default {
  name: "AveragePurchaseValue",
  data() {
    return {
      selected: "last7days",
      options: [
        { value: "yesterday", text: "Yesterday" },
        { value: "last7days", text: "Last 7 days" },
        { value: "last30days", text: "Last 30 days" },
        { value: "thismonth", text: "This Month" },
      ],
    };
  },
};
</script>
