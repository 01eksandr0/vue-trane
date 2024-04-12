<template>
  <div>
    <PostItem v-for="post in posts" :post="post" />
  </div>
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
<style scoped></style>
