<template lang="pug">
section.unknown-block
  p Не удалось определить тип блока
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  data: Object, // Данные блока, переданные извне
});
</script>

<style scoped lang="scss">
.unknown-block {
  border: 2px dashed red;
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;
  font-weight: bold;
}
</style>
