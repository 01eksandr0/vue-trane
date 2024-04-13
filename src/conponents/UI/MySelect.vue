<template>
  <select :value="modelValue" @change="changeOption($event.target.value)">
    <option disabled value="">Choce</option>
    <option
      v-for="option in options"
      ::key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>
<script>
export default {
  name: "my-select",
  props: {
    modelValue: { type: String },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(opion) {
      this.$emit("update:modelValue", opion);
    },
  },
};
</script>
<style scoped></style>
