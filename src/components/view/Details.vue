<template>
  <button class="backbtn" @click="this.$router.back()">Back</button>
  <div class="container">
    <h1>
      <span> User {{ individualDetails.id }} Details!!</span>
    </h1>
    <div class="card">
      <img :src="individualDetails.avatar" alt="images" style="width: 50%" />
      <div class="content">
        <p class="info" style="font-weight: 700">
          {{ individualDetails.first_name }} {{ individualDetails.last_name }}
        </p>
        <p class="info" style="font-weight: 500; color: #372768">
          {{ individualDetails.email }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      individualDetails: "",
    };
  },
  created() {
    console.log("route.params", JSON.parse(this.$route.params.details));
    this.individualDetails = this.$route.params.details
      ? JSON.parse(this.$route.params.details)
      : null;
    console.log("user", this.individualDetails);
  },
  // props:{
  //   userdetails:{
  //     type:Array,
  //     default:null
  //   },
  // }
};
</script>

<style>
.container {
  /* background-color: aquamarine; */
  /* height: 600px; */
  width: 60%;
  margin: 0 auto;
}
h1 {
  color: blue;
  margin: 10px;
}
span {
  border: orangered 2px solid;
  padding: 8px 20px;
  border-radius: 7px;
  background-color: lightyellow;
}
.card {
  border: 2px solid grey;
  margin: 30px auto;
  background-color: darkslategrey;
  border-radius: 15px;
}
img {
  margin: 10px auto;
}
.content {
  background-color: white;
  width: 200px;
  height: 70px;
  margin: 0 auto;
  border: 2px solid chocolate;
  border-radius: 10px;
  margin-bottom: 10px;
}
.info {
  margin: 5px 0;
}
.backbtn {
  float: left;
  border: none;
  background-color: greenyellow;
  padding: 10px;
  border-radius: 10px;
  margin: 2px 10px;
  color: white;
  cursor: pointer;
}
</style>