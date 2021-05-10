<template>
  <div>
    <b-row>
      <b-col :cols="6" class="title"
        ><h1 class="dashboard-title m-0">Dashboard</h1></b-col
      >
      <b-col :cols="6" class="float-right">
        <DatePicker />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <b-button
          v-b-toggle.collapse-market
          class="w-100 btn-market"
          @click="openToggleMarket = !openToggleMarket"
        >
          <div class="d-flex justify-content-between align-items-center">
            <span class="market-text-btn">MARKET INSIGHTS</span>
            <div>
              <img :src="require('@/assets/images/Help.png')" />
              <a href="#help" class="help">Click Here for Help</a>
              <template v-if="openToggleMarket">
                <b-icon-chevron-up></b-icon-chevron-up>
              </template>
              <template v-else>
                <b-icon-chevron-down></b-icon-chevron-down>
              </template>
            </div>
          </div>
        </b-button>
        <b-collapse visible id="collapse-market">
          <b-row class="pt-3">
            <SalesTurnover />
          </b-row>
          <b-row class="pt-3">
            <AveragePurchaseValue />
            <CardSKU title="BEST SELLING SKU" :products="list2" />
            <CardSKU title="TOP COMPETITOR SKU" :products="list1" />
          </b-row>
        </b-collapse>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import DatePicker from "@/components/dashboard/header/DatePicker";
import SalesTurnover from "@/components/dashboard/market-insight/SalesTurnover";
import AveragePurchaseValue from "@/components/dashboard/market-insight/AveragePurchaseValue";
import CardSKU from "@/components/dashboard/market-insight/CardSKU";
import { BIconChevronDown, BIconChevronUp } from "bootstrap-vue";
import { list1, list2 } from "@/constants/listsku.js";

export default {
  name: "Dashboard",
  components: {
    DatePicker,
    SalesTurnover,
    AveragePurchaseValue,
    CardSKU,
    BIconChevronDown,
    BIconChevronUp,
  },
  data() {
    return {
      openToggleMarket: true,
    };
  },
  computed: {
    list1() {
      return list1;
    },
    list2() {
      return list2;
    },
  },
};
</script>

<style>
.icon-more {
  height: 24px;
  width: 12px;
}

.card {
  box-shadow: 0px 2px 6px #0000000a !important;
  border: 0.5px solid #cdcdcd !important;
  border-radius: 2px !important;
}

.card-title {
  color: #4d4f5c;
  font-size: 20px;
  margin: 0 !important;
}

.card-item:not(:first-child) {
  margin-top: 10px;
}

.card-item .card {
  border-radius: 4px !important;
  border: 0.5px solid #c5c5c59c !important;
}

.card-item .card-body {
  padding: 0 !important;
}

.mb-16px {
  margin-bottom: 16px;
}
</style>

<style scoped>
.title {
  margin: 0 0 30px;
}

.btn-market {
  background-color: #37b04c !important;
  height: 48px;
  border-radius: 2px !important;
  border: none !important;
}

.market-text-btn {
  font-size: 20px;
  font-weight: 600;
}

.help {
  color: #fff;
  font-size: 14px;
  margin: 0 16px 0 4px;
  font-weight: lighter;
}

.help:hover {
  color: #fff;
}
</style>
