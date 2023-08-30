<template lang="pug">
section.section.image-section
  .image-section-wrapper
    img.image-section-image(:src="props.data.src", alt="Section Image")
  span.image-section-caption {{ props.data.caption }}
</template>

<script setup>
const props = defineProps(['data']);
</script>

<style scoped lang="scss">
.image-section {
  display: flex;
  flex-direction: column;

  &-wrapper {
    overflow: hidden; /* Обрезать содержимое, которое выходит за пределы контейнера */
  }

  &-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 15px;
  }

  &-caption {
    text-align: right;
    color: $gray;
  }

  @media (max-width: 768px) {
    .image-section-caption {
      text-align: center;
      margin-top: 10px;
    }
  }
}
</style>
