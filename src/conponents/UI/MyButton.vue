<template>
  <button class="btn"><slot></slot></button>
</template>
<script>
export default {
  name: "my-button",
};
</script>
<style scoped>
.btn {
  padding: 5px 10px;
  background-color: teal;
  border: none;
}
</style>
