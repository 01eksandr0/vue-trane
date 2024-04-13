<template>
  <my-button @click="openModal">Create Post</my-button>
  <my-select v-model="selectedSort" :options="sortOptions"></my-select>
  <my-input v-model="searchQuery" />
  <backdrop v-model:show="modalVisible"
    ><PostForm @create="createPost"
  /></backdrop>
  <PostList :posts="searchPost" @remove="removeItem" />
</template>
<script>
import PostForm from "../conponents/PostForm.vue";
import PostList from "../conponents/PostList.vue";
import axios from "axios";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      modalVisible: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "Title" },
        { value: "body", name: "Discription" },
      ],
      searchQuery: "",
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removeItem(post) {
      this.posts = this.posts.filter((i) => i.id !== post.id);
    },
    openModal() {
      this.modalVisible = true;
    },
    async getPosts() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );

      this.posts = response.data;
    },
  },
  mounted() {
    this.getPosts();
  },

  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    searchPost() {
      return this.sortedPost.filter((i) => {
        return (
          i.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          i.body.includes(this.searchQuery)
        );
      });
    },
  },
};
</script>
<style scoped></style>
