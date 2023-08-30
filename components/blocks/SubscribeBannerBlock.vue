<template lang="pug">
section(:class="`subscribe-banner ${footer ? '' : 'section'}`")
  h3.subscribe-banner-title Подпишись на рассылку
  div.subscribe-banner-input
    form(@submit.prevent="submitForm")
      FormInput(type="email", placeholder="Email", v-model="formData.email", class="subscribe-banner-input-field", required)
      BtnLink(text="Присоединиться", type="join")
</template>

<script setup>
import BtnLink from '@/components/common/BtnLink.vue';
import FormInput from '@/components/common/FormInput.vue';
import { ref } from 'vue';

const props = defineProps([ 'footer' ]);

const formData = ref({
  email: '',
});

const submitForm = (event) => {
  event.preventDefault();
  if ( event.target.checkValidity() ) {
    // Форма прошла валидацию
    // Здесь можно добавить логику для отправки данных на сервер
  } else {
  }
};
</script>

<style lang="scss">
.subscribe-banner {
  display: flex;
  background-color: $black;
  justify-content: space-between;
  padding: 30px;
  @include media-intermediate {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  &-title {
    color: $white;
    @include media-small {
      text-align: center;
    }
  }

  &-input {
    display: flex;
    align-items: center;
    gap: 10px;

    @include media-small {
      form{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    &-field {
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

      color: $white;

      @include media-small {
        width: fit-content !important;
        margin-right: 0 !important;
        margin-bottom: 20px;
      }

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
