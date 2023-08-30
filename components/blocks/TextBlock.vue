<template lang="pug">
section.section.text-block
  div.text-block__props(v-html="props.data")
</template>

<script setup>
const props = defineProps([ 'data' ]);
</script>

<style lang="scss">
.text-block {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%; /* Просто пример, вы можете настроить по своему */
  margin: 0 auto; /* Центрирование по горизонтали */
  @include media-medium {
    width: 80%; /* Просто пример, вы можете настроить по своему */
  }

  @include media-small{
    width: 90%; /* Просто пример, вы можете настроить по своему */
  }

  p {
    @include BodyText;
  }

  blockquote {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    gap: 20px;
    @include media-small{
      display: block;
      gap: 0;
      margin: 20px;
    }
  }

  blockquote::before {
    content: url('/assets/images/quotes.svg');
    @include media-small{
      position: relative;
      left: 0;
      margin: 0;
    }
    background-size: cover;
    background-position: center;
    margin: 0 20px 0 0;
    grid-column: 1;
    grid-row: 1 / span 1; /* Занимает 3 строки */
  }

  blockquote p {
    @include media-small{
      width: fit-content;
    }
    margin: 0;
    grid-column: 2;
    grid-row: 1;
    @include BodyTextItalic;
  }

  footer {
    margin: 0;
    grid-column: 2;
    grid-row: 3;
    text-align: right; /* Выравнивание по правому краю */
    @include BodyText2;
  }
}

</style>
