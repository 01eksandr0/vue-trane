<template>
  <div v-if="posts.length">
    <transition-group name="postList">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
    /></transition-group>
  </div>
  <h2 v-else>You dont have posts</h2>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: {
    PostItem,
  },

  props: {
    posts: {
      type: Array,
    },
  },
};
</script>
<style scoped>
.postList-enter-active,
.postList-leave-active {
  transition: all 500ms ease;
}
.postList-enter-from,
.postList-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.postList-move {
  transition: transform 500ms ease;
}
</style>
