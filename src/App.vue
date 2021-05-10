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
  font-family: "Source Sans Pro", "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f7f7f7;
}

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
  font-family: Open Sans;
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
  font-family: Open Sans;
}

.company {
  font-size: 10px;
  color: #727272;
  text-align: right;
  margin-bottom: 0;
  font-family: Open Sans;
  font-weight: 300;
}

.logout {
  margin: auto 0 auto 22px;
  align-items: center;
  display: flex;
}

.dashboard-title {
  font-size: 40px;
  color: #707070c4;
  font-weight: 600;
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
  height: 100%;
  width: 72px; /* Set the width of the sidebar */
  position: fixed;
  z-index: 1;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  border-right: 0.5px solid #d2d2d2;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

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
