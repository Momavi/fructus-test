<template lang="pug">
ArticleListBlock(:data="homePageArticleData")
</template>

<script setup>
import ArticleListBlock from '@/components/blocks/ArticleListBlock.vue';
import { pagesStore } from '@/stores/pagesStore';

const store = pagesStore();
await useAsyncData('pages', () => store.fetchPage());

const homePageArticleData = store.page.body[0].data;
</script>
