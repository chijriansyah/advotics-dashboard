<template>
  <b-col cols="3">
    <b-card>
      <div class="d-flex justify-content-between">
        <p class="m-0 sales-turnover">Sales Turnover</p>
        <a href="#"
          ><img
            class="icon-more"
            :src="require('@/assets/images/Icon - More - Filled.svg')"
            alt=""
        /></a>
      </div>
      <div class="d-flex justify-content-between">
        <div>
          <p class="nominal-sales">{{ 3600000 | toRp }}</p>
          <div>
            <img
              class="icon-down"
              :src="require('@/assets/images/DownArrow.svg')"
              alt=""
            />
            <span class="nominal-down">5,67%</span>
            <span class="nominal-small">last period in products sold </span>
          </div>
        </div>
        <img
          class="icon-turnover"
          :src="require('@/assets/images/Sales Turnover.svg')"
          alt=""
        />
      </div>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "SalesTurnover",
};
</script>
