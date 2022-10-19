<template>
  <div class="row g-0">
    <div class="col-lg-3">
      <Sidebar />
    </div>

    <div class="col-lg-9">
      <div class="p-3">

        <div class="container-fluid px-4">
          <h1 class="mt-4">Dashboard</h1>

          <div class="row">
            <div class="col-xl-3 col-md-6">
              <div class="card bg-primary text-white mb-4">
                <div class="card-body">User Count
                  <div class="mt-4 text-4xl">{{user_list.length}}</div>
                </div>            
                <div class="card-footer d-flex align-items-center justify-content-between">
                  <a class="small text-white stretched-link" href="#">View Details</a>
                  <div class="small text-white"><svg class="svg-inline--fa fa-angle-right" aria-hidden="true"
                      focusable="false" data-prefix="fas" data-icon="angle-right" role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg="">
                      <path fill="currentColor"
                        d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z">
                      </path>
                    </svg><!-- <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com -->
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card bg-warning text-white mb-4">
                <div class="card-body">Total Orders
                  <div class="mt-4 text-4xl">165</div>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-between">
                  <a class="small text-white stretched-link" href="#">View Details</a>
                  <div class="small text-white"><svg class="svg-inline--fa fa-angle-right" aria-hidden="true"
                      focusable="false" data-prefix="fas" data-icon="angle-right" role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg="">
                      <path fill="currentColor"
                        d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z">
                      </path>
                    </svg><!-- <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com -->
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card bg-success text-white mb-4">
                <div class="card-body">Income
                  <div class="mt-4 text-4xl">Rs. 78,000</div>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-between">
                  <a class="small text-white stretched-link" href="#">View Details</a>
                  <div class="small text-white"><svg class="svg-inline--fa fa-angle-right" aria-hidden="true"
                      focusable="false" data-prefix="fas" data-icon="angle-right" role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg="">
                      <path fill="currentColor"
                        d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z">
                      </path>
                    </svg><!-- <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com -->
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card bg-danger text-white mb-4">
                <div class="card-body">Expense
                  <div class="mt-4 text-4xl">13,500</div>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-between">
                  <a class="small text-white stretched-link" href="#">View Details</a>
                  <div class="small text-white"><svg class="svg-inline--fa fa-angle-right" aria-hidden="true"
                      focusable="false" data-prefix="fas" data-icon="angle-right" role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg="">
                      <path fill="currentColor"
                        d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z">
                      </path>
                    </svg><!-- <i class="fas fa-angle-right"></i> Font Awesome fontawesome.com -->
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <hr>
        <div>
          <router-view v-if="load_flag" @add-user="addUser" @edit-user="onEditUser" @delete-user="deleteuser"
            :user_list="user_list" :edit_user="edit_user">
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import { toRefs } from 'vue'
import ListUsers from "@/components/Dashboard/ListUsers.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    ListUsers
  },

  data() {
    return {
      load_flag: false,
      user_list: [],
      edit_user: null,
      showAdduser: false,
    };
  },
  methods: {
    toggleAdduser() {
      this.showAdduser = !this.showAdduser;
    },
    addUser(data) {
      if (data.is_edit) {
        this.updateUserData(data.user)
      } else {
        this.user_list = [data.user, ...this.user_list];
        this.$toast.success(`User added`);
        this.$router.push('/dashboard/list-user')
      }

    },
    updateUserData(user) {
      let index = this.user_list.findIndex(item => item.id === user.id);
      this.user_list[index] = user;
      this.$toast.success(`User Updated`);
      this.$router.push('/dashboard/list-user')
    },
    onEditUser(user_id) {
      let user = this.user_list.find(user => user.id = user_id);
      this.edit_user = user;
      this.$router.push('/dashboard/add-user')
      // alert(`edit ${user}`)
    },

    deleteuser(user_id) {
      // console.log('user',id)
      if (confirm("Are you sure?")) {
        this.user_list = this.user_list.filter((user) => user.email != user_id);
        this.$toast.success(`Deleted`);
      }
    },

    toggleReminder(id) {
      // console.log('user',id)
      this.user_list = this.user_list.map((user) =>
        user.id === id ? { ...user, reminder: !user.reminder } : user
      );
    },
  },
  created() {

    this.user_list = [
      {
        id: Math.floor(Math.random() * 100000),
        name: "zumba",
        email: "zumba@gmail.com",
        phone: "9837847584",
        dob: "06/02/1999",
        skills: ['frontend', 'fullstack'],
        address: "yelahanka old town",
        city: "bengaluru",
        country: "India",
      },
      {
        id: Math.floor(Math.random() * 100000),
        name: "Abhi",
        email: "meisabikumar@gmail.com",
        phone: "8094113042",
        dob: "16/05/1999",
        skills: ['backend'],
        address: "yelahanka new town",
        city: "bengaluru",
        country: "India",
      },
      



    ];
    this.load_flag = true;
  }
};
</script>
  