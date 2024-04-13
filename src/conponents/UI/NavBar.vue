<template>
  <div class="navbar">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/posts">Posts</router-link>
    <router-link class="link" to="/about">About </router-link>
  </div>
</template>
<script>
export default {
  name: "navbar",
};
</script>
<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 60px;
  background-color: teal;
  margin-bottom: 20px;
}
.link {
  color: #fff;
  text-decoration: none;
  font-size: 22px;
}
</style>
