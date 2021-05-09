<template>
  <div>
    <b-row>
      <b-col :cols="6" class="title"
        ><h1 class="dashboard-title m-0">Dashboard</h1></b-col
      >
      <b-col :cols="6" class="float-right">
        <date-range-picker
          v-model="dateRange"
          :locale-data="localeData"
          :opens="'left'"
          :minDate="last6months"
          :maxDate="yesterday"
          :ranges="range"
          @toggle="openToggleCalendar = !openToggleCalendar"
        >
          <template v-slot:input="picker" style="min-width: 350px">
            <img :src="require('@/assets/images/calendar.png')" />
            <span class="period">Period</span>
            <span class="period-range"
              >{{ picker.startDate | toDate }} -
              {{ picker.endDate | toDate }}</span
            >
            <template v-if="openToggleCalendar">
              <b-icon-chevron-up></b-icon-chevron-up>
            </template>
            <template v-else>
              <b-icon-chevron-down></b-icon-chevron-down>
            </template>
            <!-- {{ picker.startDate | date }} - {{ picker.endDate | date }} -->
          </template>
          <!--    footer slot-->
          <div slot="footer" slot-scope="data" class="footer-slot-daterange">
            <div>
              <button
                @click="data.clickCancel"
                class="cancelBtn btn btn-secondary btn-md"
              >
                Cancel
              </button>
              <button
                @click="data.clickApply"
                :disabled="data.in_selection"
                class="applyBtn btn btn-success btn-md"
              >
                Apply
              </button>
            </div>
          </div>
        </date-range-picker>
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
            <CardSKU title="BEST SELLING SKU" :products="list1" />
            <CardSKU title="TOP COMPETITOR SKU" :products="list2" />
          </b-row>
        </b-collapse>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import SalesTurnover from "@/components/dashboard/market-insight/SalesTurnover";
import AveragePurchaseValue from "@/components/dashboard/market-insight/AveragePurchaseValue";
import CardSKU from "@/components/dashboard/market-insight/CardSKU";
import { BIconChevronDown, BIconChevronUp } from "bootstrap-vue";

import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";

import { list1, list2 } from "@/constants/listsku.js";

export default {
  name: "Dashboard",
  components: {
    SalesTurnover,
    AveragePurchaseValue,
    CardSKU,
    DateRangePicker,
    BIconChevronDown,
    BIconChevronUp,
  },
  filters: {
    toDate(date) {
      if (date) {
        const newDate = new Date(date);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return newDate.toLocaleDateString("id-ID", options);
      } else {
        return "";
      }
    },
  },
  data() {
    return {
      openToggleCalendar: false,
      openToggleMarket: true,
      dateRange: {
        startDate: "",
        endDate: "",
      },
    };
  },
  created() {
    this.dateRange.startDate = this.last7days;
    this.dateRange.endDate = this.yesterday;
  },
  computed: {
    list1() {
      return list1;
    },
    list2() {
      return list2;
    },
    localeData() {
      return {
        format: "d mmmm yyyy",
        applyLabel: "Apply",
        cancelLabel: "Cancel",
      };
    },
    last6months() {
      let last6months = new Date();
      last6months.setMonth(this.yesterday.getMonth() - 6);
      last6months.setHours(0, 0, 0, 0);

      return last6months;
    },
    yesterday() {
      let today = new Date();
      today.setHours(0, 0, 0, 0);

      let yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);
      yesterday.setHours(0, 0, 0, 0);

      return yesterday;
    },
    last7days() {
      let last7days = new Date();
      last7days.setDate(this.yesterday.getDate() - 7);
      last7days.setHours(0, 0, 0, 0);

      return last7days;
    },
    range() {
      let last30days = new Date();
      last30days.setDate(this.yesterday.getDate() - 30);
      last30days.setHours(0, 0, 0, 0);

      let thisStartMonth = new Date(
        this.yesterday.getFullYear(),
        this.yesterday.getMonth(),
        1
      );

      return {
        Yesterday: [this.yesterday, this.yesterday],
        "Last 7 days": [this.last7days, this.yesterday],
        "Last 30 days": [last30days, this.yesterday],
        "This Month": [thisStartMonth, this.yesterday],
      };
    },
  },
};
</script>
