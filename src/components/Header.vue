<template>
  <!-- Responsive navbar-->
  <nav class="navbar navbar-expand-lg  fixed-top  navbar-dark bg-dark">
    <div class="container px-5">

      <router-link class="navbar-brand" to="/">Start Bootstrap</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
          class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link ">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">
              Dashboard
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>


</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
a.router-link-exact-active {
  color: #fff !important;

  text-decoration: none;
}
</style>