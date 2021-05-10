<template>
  <div>
    <div class="sidenav">
      <ul class="sidemenu p-0 m-0">
        <li>
          <div class="d-flex">
            <b-button variant="white" v-b-toggle.sidebar-backdrop>☰</b-button>
          </div>
        </li>
        <li>
          <div class="d-flex">
            <b-button variant="white" class="active"
              ><img
                class="menu-icon"
                :src="require('@/assets/images/Dashboard icon.svg')"
            /></b-button>
          </div>
        </li>
        <!-- dummy menu -->
        <li v-for="index in 3" :key="index">
          <div class="d-flex">
            <b-button variant="link"><img class="menu-icon" /></b-button>
          </div>
        </li>
        <!-- dummy menu -->
      </ul>
    </div>

    <b-sidebar
      id="sidebar-backdrop"
      backdrop-variant="dark"
      bg-variant="white"
      width="250px"
      no-header
      backdrop
      shadow
    >
      <div class="pt-64px">
        <ul class="sidemenu p-0 m-0">
          <li>
            <div>
              <b-button
                v-b-toggle.sidebar-backdrop
                variant="white"
                class="active d-flex align-items-center"
                ><img
                  class="menu-icon"
                  :src="require('@/assets/images/Dashboard icon.svg')"
                /><span style="margin-left: 16px; font-weight: bold"
                  >Dashboard</span
                ></b-button
              >
            </div>
          </li>
          <!-- dummy menu -->
          <li v-for="index in 3" :key="index">
            <div>
              <b-button variant="white" class="d-flex align-items-center"
                ><img class="menu-icon" /><span style="margin-left: 16px"
                  >Dummy Menu {{ index }}</span
                ></b-button
              >
            </div>
          </li>
          <!-- dummy menu -->
        </ul>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
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

.pt-64px {
  padding-top: 64px;
}
</style>
