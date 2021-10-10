<template>
  <div>
    <button id="googleBtn">Google</button>
  </div>
</template>

<script>
import GoogleLogin from "@/utils/GoogleLogin.js";
export default {
  name: "login",
  data() {
    return {};
  },
  created() {
    console.log("created")
    const google = new GoogleLogin();
    google.startApp();
  },
};
</script>

<style>
</style>