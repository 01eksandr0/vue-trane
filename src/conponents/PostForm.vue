<template>
  <form class="form" @submit.prevent>
    <input class="input" placeholder="Title" type="text" v-model="post.title" />
    <input type="text" class="input" placeholder="About" v-model="post.text" />
    <button type="submit" class="button" @click="createPost">Create</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      post: {
        title: "",
        text: "",
      },
    };
  },
  methods: {
    createPost() {
      this.$emit("create", { id: Date.now(), ...this.post });
      this.post.title = "";
      this.post.about = "";
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
.input {
  width: 100%;
  padding: 15px;
  display: block;
  margin-top: 10px;
  border: 2px solid teal;
}
.button {
  padding: 15px 40px;
  background-color: teal;
  margin-top: 20px;
}
</style>
