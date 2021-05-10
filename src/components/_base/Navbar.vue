<template>
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
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
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
</style>
