<template lang="pug">
div
  NuxtLayout
    NuxtPage
</template>

<script setup>
import { pagesStore } from '@/stores/pagesStore';

const store = pagesStore();

onMounted(() => {
  document.title = store.page.meta.title; // Устанавливаем title страницы
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", store.page.meta.description); // Устанавливаем мета-тег description
  }
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;800&display=swap');
</style>
