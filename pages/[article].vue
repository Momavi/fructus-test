<template lang="pug">
div(v-for="(item, index) in store.page.body" :id="item.type" :key="index")
  component(:is="componentMap[item.type]" :data="item.data")
</template>

<script setup>
import ArticleIntroBlock from '@/components/blocks/ArticleIntroBlock.vue';
import ArticleListBlock from '@/components/blocks/ArticleListBlock.vue';
import TextBlock from '@/components/blocks/TextBlock.vue';
import ImageBlock from '@/components/blocks/ImageBlock.vue';
import SliderBlock from '@/components/blocks/SliderBlock.vue';
import CtaFormBlock from '@/components/blocks/CtaFormBlock.vue';
import SubscribeBanner from '@/components/blocks/SubscribeBannerBlock.vue';
import UnknownBlock from '@/components/blocks/UnknownBlock.vue';

import { pagesStore } from '@/stores/pagesStore';

const store = pagesStore();
const route = useRoute();
await useAsyncData('pages', () => store.fetchPage(route.params.article));

const componentMap = {
  article_intro_block: ArticleIntroBlock,
  article_list_block: ArticleListBlock,
  text_block: TextBlock,
  image_block: ImageBlock,
  slider_block: SliderBlock,
  cta_form_block: CtaFormBlock,
  subscribe_form_block: SubscribeBanner,
  default: UnknownBlock,
};
</script>
