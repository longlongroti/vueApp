<template>
  <div class="row">
    <div
      class="card"
      v-for="item in info.users"
      :key="item.id"
      v-show="info.users.length"
    >
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ item.login }}</p>
    </div>
  </div>
  <div v-show="info.isFirst">欢迎使用</div>
  <div v-show="info.isLoading">加载中</div>
  <div v-show="info.errMsg">{{ info.errMsg }}</div>
</template>

<script>
export default {
  name: "githublist",
  data() {
    return {
      info: {
        users: [],
        isFirst: true,
        isLoading: false,
        errMsg: "",
      },
    };
  },
  mounted() {
    this.$mybus.on("updateGithubData", (data) => {
      // this.users = data;
      console.log("github user received ", data);
      this.info = {...this.info,...data};
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>