<template>
  <PostForm @create="createPost" />
  <PostList :posts="posts" />
</template>
<script>
import PostForm from "./conponents/PostForm.vue";
import PostList from "./conponents/PostList.vue";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "post about JavaScript",
          text: "JavaScript universal lang programing",
        },
        {
          id: 2,
          title: "post about JavaScript",
          text: "JavaScript universal lang programing",
        },
        {
          id: 3,
          title: "post about JavaScript",
          text: "JavaScript universal lang programing",
        },
        {
          id: 4,
          title: "post about JavaScript",
          text: "JavaScript universal lang programing",
        },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  padding: 20px;
}
</style>
