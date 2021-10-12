<template>
<h1>USERS!</h1>
  <div class="container-main">
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
* {
  box-sizing: border-box;
}
.container-main{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  padding-left: 60px;
}
.box {
  width: 250px;
  height: 250px;
  border: 2px solid grey;
  border-radius: 10%;
  margin: 10px;
  align-items: center;
  background-color: beige;
  box-shadow: 0 4px 8px 0 rgba(114, 86, 86, 0.623), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
img {
  border: 5px solid palevioletred;
  width: 160px;
  margin: 40px auto;
  border-radius: 50%;
  cursor: pointer;
}
</style>