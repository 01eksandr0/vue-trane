<template>
  <input class="input" :value="modelValue" @input="updateInput" />
</template>
<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>
<style scoped>
.input {
  width: 100%;
  padding: 15px;
  display: block;
  margin-top: 10px;
  border: 2px solid teal;
}
</style>
