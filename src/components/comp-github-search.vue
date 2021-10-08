<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
        @keydown.enter="searchUser"
      />&nbsp;<button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "githubuser",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchUser() {
      this.$mybus.emit("updateGithubData", {
        users: [],
        isFirst: false,
        isLoading: true,
        errMsg: "",
      });
      axios
        .get("http://localhost:8642/api/search/users?q=" + this.keyword)
        .then(
          (response) => {
            this.$mybus.emit("updateGithubData", {
              users: response.data.items,
              isLoading: false,
              errMsg: "",
            });
          },
          (error) => {
            console.log("请求失败了", error.message);
            this.$mybus.emit("updateGithubData", {
              users: [],
              isLoading: false,
              errMsg: error.message,
            });
          }
        );
    },
  },
};
</script>

<style>
</style>