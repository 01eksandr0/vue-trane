<template>
  <div class="container" v-if="show" @click="hideModal">
    <div @click.stop class="content"><slot></slot></div>
  </div>
</template>
<script>
export default {
  name: "backdrop",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit("update:show", false);
    },
  },
};
</script>
<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  min-width: 300px;
}
</style>
