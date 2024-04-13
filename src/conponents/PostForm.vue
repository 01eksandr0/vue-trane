<template>
  <form class="form" @submit.prevent>
    <my-input placeholder="Title" type="text" v-model="post.title" />
    <my-input type="text" placeholder="About" v-model="post.body" />
    <button type="submit" class="button" @click="createPost">Create</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.$emit("create", { id: Date.now(), ...this.post });
      this.post.title = "";
      this.post.body = "";
    },
  },
};
</script>
<style scoped>
.form {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.button {
  padding: 15px 40px;
  background-color: teal;
  margin-top: 20px;
}
</style>
