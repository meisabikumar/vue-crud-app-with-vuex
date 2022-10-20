<template>
  <!-- <pre>{{getUserList}}</pre> -->
  <!-- <input type="text" v-model="search" /> -->

  <!-- {{search_by}} -->
  <div class="d-flex justify-between">
    <div class="form-group">
      <!-- <label for="search" class="form-label">Search</label> -->
      <div class="max-w-[300px]">
        <div class="input-group">
          <input type="text" class="form-control" id="search" placeholder="search" v-model="search" />

          <select class="form-control" v-model="search_by">
            <option value="name">by Name</option>
            <option value="email">by Email</option>
            <option value="phone">by Phone</option>
            <option value="city">by City</option>
          </select>
        </div>
      </div>
    </div>

    <div>
      <button class="btn btn-primary" @click="onAddUser()">
        Add User
      </button>
    </div>
  </div>

  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">DOB</th>
          <th scope="col">Skills</th>
          <th scope="col">Address</th>
          <th scope="col">City</th>
          <th scope="col">Country</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="user.id" v-for="(user,index) in filteredItems">
          <th scope="row">{{index+1}}
            <small>({{user.id}})</small>
          </th>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.dob}}</td>
          <td>
            <ul>
              <li :key="index" v-for="(skill,index) in user.skills">
                {{skill}}
              </li>
            </ul>
          </td>
          <td>{{user.address}}</td>
          <td>{{user.city}}</td>
          <td>{{user.country}}</td>
          <td>
            <button class="btn btn-secondary" @click="onEdit(user.id)"><i class="fa-regular fa-pen-to-square"></i>
              Edit</button>
            <button class="btn btn-danger mt-2" @click="onDelete(user.email)"><i
                class="fa-solid fa-trash"></i>Delete</button>
          </td>

        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListUsers",
  data() {
    return {
      search: '',
      search_by: 'name',
    }
  },
  methods: {
    onAddUser() {
      this.$router.push('/dashboard/add-user')
    },
    onEdit(user_id) {
      this.$router.push(`/dashboard/edit-user/${user_id}`)
    },
    onDelete(user_id) {
      this.$store.commit('deleteUser', { user_id })
    }
  },
  computed: {
    getUserList() {
      return this.$store.getters.getUserList;
    },
    filteredItems() {
      return this.getUserList.filter(user => {
        return user[this.search_by].toLowerCase().indexOf(this.search.toLowerCase()) > -1
      })
    }
  },
};
</script>

<style scoped>

</style>