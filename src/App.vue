<template>
  <div id="app">
    <b-navbar class="nav-bar sticky-top">
      <div class="nav-heading">
        <div class="d-flex">
          <img
            class="logo"
            :src="require('@/assets/images/advotics-logo-optimize.jpg')"
            alt="icon"
          />
          <div class="powered">
            <span class="powered-text">powered by</span>
            <img
              class="logo-small"
              :src="require('@/assets/images/advotics-logo-optimize.jpg')"
              alt="icon"
            />
          </div>
        </div>

        <div class="d-flex">
          <div class="user">
            <p class="username text-right">Username</p>
            <p class="company text-right">Company Name</p>
          </div>
          <img class="profile" :src="require('@/assets/images/Profile.svg')" />
          <a class="logout" href="#logout">
            <img :src="require('@/assets/images/logout.png')" />
          </a>
        </div>
      </div>
    </b-navbar>

    <div class="sidenav">
      <ul class="sidemenu p-0 m-0">
        <li>
          <div class="d-flex">
            <b-button variant="link">☰</b-button>
          </div>
        </li>
        <li>
          <div class="d-flex">
            <b-button variant="link" class="active"
              ><img
                class="menu-icon"
                :src="require('@/assets/images/Dashboard icon.svg')"
            /></b-button>
          </div>
        </li>
      </ul>
    </div>

    <!-- Page content -->
    <div class="main">
      <Dashboard />
    </div>
  </div>
</template>

<script>
import Dashboard from "@/components/dashboard/Dashboard";
export default {
  name: "App",
  components: {
    Dashboard,
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  background-color: #f7f7f7;
}
</style>

<style>
.nav-bar {
  background-color: #ffffff;
  padding: 0 34px;
  height: 64px;
  z-index: 9999 !important;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
}

.nav-heading {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.logo {
  height: 32px;
  margin: 17px 0 15px;
}

.powered {
  margin-top: 32px;
}

.powered-text {
  font-size: 11px;
  color: #5b5b5b;
  margin: 0 5px 0 10px;
}

.logo-small {
  height: 18px;
}

.profile {
  height: 32px;
  width: 32px;
  margin: auto 0;
}

.user {
  margin: auto 18px auto 0;
}

.username {
  font-size: 14px;
  color: #727272;
  text-align: right;
  margin-bottom: 0;
}

.company {
  font-size: 10px;
  color: #727272;
  text-align: right;
  margin-bottom: 0;
}

.logout {
  margin: auto 0 auto 22px;
  align-items: center;
  display: flex;
}

.dashboard-title {
  font-size: 40px;
  color: #707070c4;
}

.sidebar {
  position: fixed;
  overflow-y: auto;
  min-width: 72px;
  background: #fff;
  border-right: 0.5px solid #d2d2d2;
  height: 100%;
}

.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 72px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  left: 0;
  background-color: #fff; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  border-right: 0.5px solid #d2d2d2;
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Style page content */
.main {
  margin-left: 72px; /* Same as the width of the sidebar */
  padding: 32px;
}

.sidemenu {
  list-style: none;
}

.sidemenu button {
  height: 48px;
  width: 100%;
  text-decoration: none;
  color: black;
  border-radius: 0 !important;
}

.sidemenu button:hover {
  background-color: #eaeaea;
}

.sidemenu button.active {
  background-color: #d2d2d2;
}

.menu-icon {
  height: 22px;
  width: 22px;
  background-color: white;
  padding: 2px;
  border-radius: 2px;
}

.title {
  margin: 0 0 30px;
}

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
}

.period-range {
  font-size: 16px;
  color: #6a6a6a;
  margin-right: 16px;
}

.footer-slot-daterange {
  padding: 10px;
  border-top: 1px solid #ddd;
}

.applyBtn {
  margin-left: 10px;
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
  /* background-color: #37b04c24; */
  border-radius: 50%;
  font-weight: bold;
}

.sales-turnover {
  font-weight: lighter;
  color: #8b8b8b;
}

.btn-market {
  background-color: #37b04c !important;
  height: 48px;
  border-radius: 2px !important;
  border: none !important;
}

.market-text-btn {
  font-size: 20px;
  font-weight: 500;
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

.icon-more {
  height: 24px;
  width: 12px;
}

.icon-turnover {
  height: 43px;
  width: 49px;
  margin: auto;
}

.nominal-sales {
  font-size: 24px;
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

.card-item:first-child {
  margin-top: 16px;
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

.big-item {
  display: flex;
  background-color: #ffe7bd;
  border-radius: 4px;
  height: 80px;
}

.big-item img {
  height: 80px;
  width: 80px;
  border-radius: 4px 0 0;
}

.big-item .detail-item {
  padding: 10px;
  width: 100%;
}

.big-item .detail-item p {
  margin-bottom: 10px;
  font-size: 20px;
}

.big-item .detail-text p {
  margin: 0;
  font-size: 14px;
  color: #00000099;
}

.small-item {
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  height: 60px;
}

.small-item img {
  height: 60px;
  width: 60px;
  border-radius: 4px 0 0;
}

.small-item .detail-item {
  padding: 10px;
  width: 100%;
}

.small-item .detail-item p {
  margin-bottom: 0px;
  font-size: 16px;
}

.small-item .detail-text p {
  margin: 0;
  font-size: 12px;
  color: #00000099;
}
</style>
