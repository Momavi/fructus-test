<template lang="pug">
section.cta-form__wrapper
  .section.cta-form
    .cta-form__image
      img(:src="CtaImage", alt="Join Project")
    .cta-form__content
      h2.cta-form__title Стань участником проекта
      form(@submit.prevent="submitForm")
        .cta-form__input
          FormInput(type="text", id="name", placeholder="Имя", v-model="formData.name", required)
        .cta-form__input
          FormInput(type="tel", id="phone", placeholder="Телефон", v-model="formData.phone", pattern="^[ 0-9]+$", title="Введите 10 цифр", required)
        .cta-form__input
          FormInput(type="email", id="email", placeholder="Email", v-model="formData.email", required)
        .cta-form__button
          BtnLink(type="join", text="Присоединиться")
</template>

<script setup>
import BtnLink from '@/components/common/BtnLink.vue';
import FormInput from '@/components/common/FormInput.vue';
import CtaImage from '/assets/images/CtaImage.png';
import { ref } from 'vue';

const formData = ref({
  name: '',
  phone: '',
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
.cta-form {
  display: flex;
  justify-content: space-evenly;
  gap: 60px;
  background-color: $black;
  color: $white;
  padding: 60px;
  @include media-medium {
    gap: 30px;
    padding: 30px;
  }

  @include media-intermediate {
    width: fit-content;
  }

  &__wrapper{
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    margin: 0;
  }

  &__input {
    margin-top: 20px;

    input {
      width: 80%;
      @include media-intermediate {
        width: 95%;
      }
    }
  }

  &__button {
    margin-top: 40px;
    @include media-intermediate {
      display: flex;
      justify-content: center;
    }
  }

  &__image {
    max-width: 100%;
    @include media-medium {
      max-width: 800px;
    }

    @include media-intermediate {
      display: none;
    }

    img {
      max-width: 100%;
      max-height: 100%; /* Изображение будет занимать всю доступную высоту */
      object-fit: cover; /* Обрезать изображение, чтобы оно заполнило контейнер */
    }
  }
}
</style>
