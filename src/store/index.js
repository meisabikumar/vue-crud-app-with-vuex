import { createStore } from "vuex";
import router from "../router";
// import toast from "../../node_modules/@k90mirzaei/vue-toast";

export default createStore({
  state: {
    users: [
      {
        id: Math.floor(Math.random() * 100000),
        name: "zumba",
        email: "zumba@gmail.com",
        phone: "9837847584",
        dob: "1999-06-02",
        skills: ["frontend", "fullstack"],
        address: "yelahanka old town",
        city: "bengaluru",
        country: "India",
      },
      {
        id: Math.floor(Math.random() * 100000),
        name: "Abhi",
        email: "meisabikumar@gmail.com",
        phone: "8094113042",
        dob: "1999-05-09",
        skills: ["backend"],
        address: "yelahanka new town",
        city: "bengaluru",
        country: "India",
      },
    ],
  },
  mutations: {
    addUser(state, user) {
      state.users = [user, ...state.users];
      router.push("/dashboard/list-user");
    },
    updateUser(state, user) {
      let index = state.users.findIndex((item) => item.id === user.id);
      state.users[index] = user;
      // this.$toast.success(`User Updated`);
      router.push("/dashboard/list-user");
    },
    deleteUser(state, { email }) {
      if (confirm("Are you sure?")) {
        state.users = state.users.filter((user) => user.email != email);
        // toast.success(`Deleted`);
      }
    },
  },
  actions: {},
  getters: {
    getUserList(state) {
      return state.users;
    },
  },
  modules: {},
});
