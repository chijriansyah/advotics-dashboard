<template>
  <b-col cols="3">
    <b-card>
      <div class="d-flex justify-content-between">
        <p class="m-0 sales-turnover">Sales Turnover</p>
        <a href="#sales"
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

<style scoped>
.sales-turnover {
  font-weight: lighter;
  color: #8b8b8b;
}

.icon-turnover {
  height: 43px;
  width: 49px;
  margin: auto;
}

.nominal-sales {
  font-size: 26px;
  font-weight: bolder;
  margin: 0;
}

.icon-down {
  height: 10px;
  width: 10px;
}

.nominal-down {
  margin: 0 5px;
  color: red;
  font-size: 10px;
  font-weight: bold;
}

.nominal-small {
  font-size: 10px;
}
</style>
