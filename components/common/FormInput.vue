<template lang="pug">
input(
  :type="type",
  :id="id",
  :placeholder="placeholder",
  :value="value",
  @input="$emit('input', $event.target.value)",
  :pattern="pattern",
  :title="title",
  :required="required")
</template>

<script setup>
const props = defineProps({
  type: String,
  id: String,
  placeholder: String,
  value: String,
  pattern: String,
  title: String,
  required: Boolean,
});
</script>

<style scoped lang="scss">
input {
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 144.444% */

  padding: 8px;
  width: 300px;
  margin-right: 35px;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid $gray;
  border-radius: 0;

  color: $white;

  &:focus {
    outline: none;
  }
}
</style>
