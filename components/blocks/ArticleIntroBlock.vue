<template lang="pug">
section.section.article-intro
  .article-intro__image
    img.article-intro__image-img(:src="props.data.image" alt="Article Image")
  .article-intro__content
    h1.article-intro__title {{ props.data.title }}
    .article-intro__info
      .article-intro__time
        img.article-intro__icon(:src="timeImage" alt="Time Icon")
        span {{ props.data.reading_time }} мин время чтения
      .article-intro__views
        img.article-intro__icon(:src="viewsImage" alt="Views Icon")
        span {{ props.data.views_count }} прочитали статью
    p.article-intro__text {{ props.data.short_description }}
</template>

<script setup>
import viewsImage from '/assets/images/views.svg';
import timeImage from '/assets/images/time.svg';

const props = defineProps([ 'data' ]);
</script>

<style lang="scss">
.article-intro {
  display: flex;
  gap: 20px;
  @include media-medium {
    gap: 10px;
  }

  @include media-intermediate {
    flex-direction: column;
    align-items: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    margin-top: 90px;
    @include media-intermediate {
      margin-top: 10px;
    }
  }

  &__image {
    flex: 0 0 auto;
    height: auto;
    @include media-medium {
      max-width: 500px;
    }

    @include media-intermediate {
      max-width: 300px;
    }

    @include media-small {
      max-width: 350px;
    }

    &-img {
      @include imgBorderRadius;
      width: 100%;
      height: 100%; /* Изображение будет занимать всю высоту контейнера */
      object-fit: cover; /* Обрезать изображение, чтобы оно заполнило контейнер */
      object-position: center; /* Позиция изображения внутри контейнера */
    }
  }

  &__title {
    margin: 0;
    @include media-intermediate {
      text-align: center;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    color: $gray;
    @include media-intermediate {
      flex-direction: row;
      justify-content: space-around;
      margin-top: 10px;
    }
  }

  &__icon {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }

  &__time {
    display: flex;
    align-items: center;
  }

  &__views {
    display: flex;
    align-items: center;
  }

  &__text {
    margin-top: 50px;
    @include BodyText;
    @include media-intermediate {
      margin-top: 30px;
    }
  }
}
</style>