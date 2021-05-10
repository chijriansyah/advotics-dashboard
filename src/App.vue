<template>
  <div id="app">
    <Navbar />
    <Sidebar />
    <!-- Page content -->
    <div class="main">
      <Dashboard />
    </div>
  </div>
</template>

<script>
import Dashboard from "@/components/dashboard/Dashboard";
import Navbar from "./components/_base/Navbar.vue";
import Sidebar from "./components/_base/Sidebar.vue";

export default {
  name: "App",
  components: {
    Dashboard,
    Navbar,
    Sidebar,
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

.dashboard-title {
  font-size: 40px;
  color: #707070c4;
  font-weight: 600;
}

.main {
  margin-left: 72px; /* Same as the width of the sidebar */
  padding: 32px;
}
</style>
