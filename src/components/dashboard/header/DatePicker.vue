<template>
  <date-range-picker
    v-model="dateRange"
    :locale-data="localeData"
    :opens="'left'"
    :minDate="last6months"
    :maxDate="yesterday"
    :ranges="range"
    @toggle="openToggleCalendar = !openToggleCalendar"
  >
    <div
      slot="header"
      slot-scope="data"
      class="slot d-flex justify-content-between align-items-center p-2"
      style="border-bottom: 1px solid #ddd"
    >
      <div class="d-flex align-items-center">
        <img :src="require('@/assets/images/calendar.png')" />
        <span class="period">Period</span>
      </div>
      <b-icon-x
        @click="data.clickCancel"
        style="width: 25px; height: 25px; cursor: pointer"
      ></b-icon-x>
    </div>
    <template v-slot:input="picker" style="min-width: 350px">
      <img :src="require('@/assets/images/calendar.png')" />
      <span class="period">Period</span>
      <span class="period-range"
        >{{ picker.startDate | toDate }} - {{ picker.endDate | toDate }}</span
      >
      <template v-if="openToggleCalendar">
        <b-icon-chevron-up></b-icon-chevron-up>
      </template>
      <template v-else>
        <b-icon-chevron-down></b-icon-chevron-down>
      </template>
    </template>
    <div slot="footer" slot-scope="data" class="footer-slot-daterange">
      <div>
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
</template>

<script>
import { BIconChevronDown, BIconChevronUp, BIconX } from "bootstrap-vue";
import DateRangePicker from "vue2-daterange-picker";
import "vue2-daterange-picker/dist/vue2-daterange-picker.css";

export default {
  name: "DatePicker",
  components: {
    DateRangePicker,
    BIconChevronDown,
    BIconChevronUp,
    BIconX,
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
    localeData() {
      return {
        format: "d mmmm yyyy",
        applyLabel: "Apply",
        cancelLabel: "Cancel",
        firstDay: 1,
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

<style>
.vue-daterange-picker {
  float: right;
}

.reportrange-text {
  background-color: #fff !important;
  padding: 10px !important;
  box-shadow: 0px 2px 3px #00000029;
  border-radius: 2px !important;
  border: none !important;
  display: flex !important;
  align-items: center !important;
}

.period {
  font-size: 16px;
  margin: 0 22px 0 16px;
  color: #8b8b8b;
  font-family: Open Sans;
}

.period-range {
  font-size: 16px;
  color: #6a6a6a;
  margin-right: 16px;
  font-family: Open Sans;
}

.footer-slot-daterange {
  padding: 10px;
  border-top: 1px solid #ddd;
}

.applyBtn {
  min-width: 125px;
}

.daterangepicker .ranges li.active {
  background-color: #37b04c;
}

.daterangepicker td.start-date,
.daterangepicker td.end-date,
.daterangepicker td.start-date.end-date {
  border-radius: 50%;
}

.daterangepicker td.active,
.daterangepicker td.active:hover {
  background-color: #37b04c;
}

.daterangepicker td.in-range {
  border-radius: 50%;
  font-weight: bold;
}
</style>
