<template></template>
<script>
export default {
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
      title: "",
      about: "",
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        text: this.about,
      };
      this.posts.push(newPost);
      this.title = "";
      this.about = "";
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
