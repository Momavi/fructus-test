<template lang="pug">
section.section.slider
  .slider-wrapper
    img.slider-image(:src="currentImage", alt="Slider Image", @load="handleImageLoad")
    div.slider-loading(v-if="loading") Загрузка...
  p.slider-counter {{ currentIndex + 1 }}/{{ images.length }}
  .slider-controls
    button.slider-control.slider-prev(@click="prevSlide")
      img(:src="sliderPrevImg", alt="Назад")
    button.slider-control.slider-next(@click="nextSlide")
      img(:src="sliderNextImg", alt="Вперед")
</template>

<script setup>
import sliderPrevImg from '@/assets/images/slider-prev.svg';
import sliderNextImg from '@/assets/images/slider-next.svg';

import { ref } from 'vue';

const props = defineProps(['data']);
const images = props.data

const loading = ref(true); // Начальное состояние загрузки
const currentIndex = ref(0);

const currentImage = computed(() => images[currentIndex.value]);

const prevSlide = () => {
  loading.value = true;
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

const nextSlide = () => {
  loading.value = true;
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const handleImageLoad = () => {
  loading.value = false;
};

onMounted(() => {
  // Нужно для отрабатывания при 1 загрузке
  const img = new Image();
  img.src = currentImage.value;
  img.onload = handleImageLoad;
});
</script>

<style scoped lang="scss">
.slider {
  position: relative;
  max-width: 100%;
  overflow: hidden;

  .slider-wrapper {
    position: relative;
    display: flex;
    justify-content: center; /* Горизонтальное центрирование */
    align-items: center; /* Вертикальное центрирование */
    transition: transform 0.3s ease;
  }

  .slider-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .slider-loading {
    position: absolute;
    bottom: 50%;
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $black;
    color: $white;
    font-size: 18px;
    z-index: 2;
  }

  .slider-counter {
    width: 100%;
    margin-top: 25px;
    text-align: center;
    @include BodyText
  }

  .slider-controls {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between; /* Распределение кнопок по горизонтали */
    width: 100%;
    height: 100%;
    bottom: 26px;

    .slider-control {
      background-color: $black;
      color: white;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
      width: 60px;
      height: 60px;

      @include media-small{
        width: 45px;
        height: 45px;
      }
      padding: 0;

      &:hover {
        opacity: 0.7;
      }

      &.slider-prev {
        padding-right: 2px;
      }

      &.slider-next {
        padding-left: 2px;
      }
    }
  }
}
</style>
