<template>
  <div class="container">
    <div class="box" v-for="(user, index) in apiData" :key="index">
      <img :src="user.avatar" @click="getDetails(user),scrollToTop()" :userdetails="user" />
    </div>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      apiData: [],
    };
  },

  methods: {
    getDetails(user) {
      this.$router.push({
        name: "details",
        params: { id: user.id, details: JSON.stringify(user) },
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  async created() {
    console.log("main");
    const response = await fetch("https://reqres.in/api/users/");
    const result = await response.json();
    console.log("result", result);
    this.apiData = result.data;
    console.log("apiData", this.apiData);
  },
};
</script>

<style>
.box {
  width: 300px;
  height: 300px;
  border: 2px solid grey;
  border-radius: 10%;
  margin: 10px auto;
  align-items: center;
  background-color: beige;
}
img {
  border: 5px solid palevioletred;
  width: 200px;
  margin: 40px auto;
  border-radius: 50%;
  cursor: pointer;
}
</style>