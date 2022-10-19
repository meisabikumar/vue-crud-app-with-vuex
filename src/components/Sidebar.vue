<template>
  <div class="h-100 d-flex flex-nowrap">
    <div class="d-flex flex-column  p-3 bg-light h-100 w-100">
      <router-link to="/" class="
          d-flex
          align-items-center
          mb-3 mb-md-0
          me-md-auto
          link-dark
          text-decoration-none
        ">
        <span class="fs-4">CRUD APP</span>
      </router-link>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link to="/dashboard/list-user" class="nav-link link-dark">
            <i class="fa-solid fa-list mr-3"></i>
            <span> List Users</span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard/add-user" class="nav-link link-dark">
            <i class="fa-solid fa-user mr-3"></i>
            <span> Add User</span>
          </router-link>
        </li>

      </ul>
      <hr />

    </div>
    <div class="b-example-divider b-example-vr"></div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.b-example-divider {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgb(0 0 0 / 10%),
    inset 0 0.125em 0.5em rgb(0 0 0 / 15%);
}

a.router-link-exact-active {
  color: #fff !important;
  background-color: #0d6efd;
  text-decoration: none;
}
</style>