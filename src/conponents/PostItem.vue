<template>
  <div class="post">
    <div>
      <div><strong>Title</strong> {{ post.title }}</div>
      <div><strong>About</strong>{{ post.body }}</div>
    </div>
    <my-button @click="$router.push(`/posts/${post.id}`)">Open</my-button>
    <my-button @click="$emit('remove', post)">Delete</my-button>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
