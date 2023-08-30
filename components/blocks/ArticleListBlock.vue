<template lang="pug">
section.section.article-list-grid
  div(v-for="(item, index) in props.data.articles" :key="index" class="article-list")
    a.article-list__link(:href="item.link")
      img.article-list__image(:src="item.image", :alt="item.title")
      h3.article-list__title {{ item.title }}
    BtnLink(:link="item.link", text="Читать", class="article-list__btn")
</template>

<script setup>
import BtnLink from '@/components/common/BtnLink.vue';
const props = defineProps(['data']);
</script>

<style scoped lang="scss">
.article-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  @include media-extra-small {
    margin-bottom: 40px;
    padding: 10px;
    &:last-child{
      margin-bottom: 0;
    }
    align-items: center;
  }

  &__link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    transition: opacity 0.3s ease;

    @include media-extra-small {
      align-items: center;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  &__image {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
    @include media-intermediate {
      max-height: 340px;
    }
    @include media-extra-small {
      max-height: 320px;
    }
  }

  &__title {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    @include media-extra-small {
      text-align: center;
    }
  }

  &__btn {
    margin-top: 10px;
    @include media-extra-small {
      margin-top: 0;
    }
  }
}

.article-list-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Три карточки в ряд */
  gap: 20px; /* Расстояние между карточками */
  @include media-medium {
    gap: 10px
  }

  @include media-intermediate {
    grid-template-columns: repeat(2, 1fr);
  }

  @include media-small {
    grid-template-columns: repeat(2, 1fr);
  }

  @include media-extra-small {
    gap: 5px;
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
