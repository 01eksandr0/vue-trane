<template>
  <div class="post" v-for="post in posts">
    <div><strong>Title</strong> {{ post.title }}</div>
    <div><strong>About</strong>{{ post.text }}</div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 10px;
}
</style>
