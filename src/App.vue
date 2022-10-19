<template>
  <Header />
  <div class="pt-[50px]">
    <router-view></router-view>
  </div>

  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
// import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    // Sidebar,
    Footer,
  },
};
</script>


<style>
a.router-link-exact-active {
  /* color: #42b983; */
  text-decoration: none;
}
</style>
