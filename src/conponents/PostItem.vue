<template>
  <div class="post">
    <div><strong>Title</strong> {{ post.title }}</div>
    <div><strong>About</strong>{{ post.text }}</div>
  </div>
</template>
<script>
export default {
  props: {
    post: { type: Object },
  },
};
</script>
<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 10px;
}
</style>
