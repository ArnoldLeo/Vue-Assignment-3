<template>
  <div class="container">
    <h1>
      <span> User {{ individualDetails.id }} Details!!</span>
    </h1>
    <div class="card">
      <img :src="individualDetails.avatar" alt="images" />
      <div class="content">
        <p class="info" style="font-weight: 700">
         Name: {{ individualDetails.first_name }} {{ individualDetails.last_name }}
        </p>
        <p class="info" style="font-weight: 500; color: #372768">
          email: {{ individualDetails.email }}
        </p>
        <button class="backbtn" @click="this.$router.back()">Back</button>
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

<style scoped>
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
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(114, 86, 86, 0.623), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
img {
  margin: 10px auto;
  /* width:100%;
  height: 100%; */
}
.content {
  background-color: white;
  width: 50%;
  height: 70px;
  margin: 0 auto;
  border: 2px solid chocolate;
  border-radius: 10px;
  margin: auto auto;
}
.info {
  margin: 5px 0;
}
.backbtn {
  border: none;
  background-color: greenyellow;
  padding: 10px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  margin: 20px 0;
}
</style>