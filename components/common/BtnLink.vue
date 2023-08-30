<template lang="pug">
button(type="submit", :class="buttonClass", @click.prevent="handleClick")
  span.btn-text {{ text }}
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: String,
  type: String,
  link: String,
});

const buttonClass = computed(() => {
  return ['btn', props.type === 'join' ? 'btn-join' : 'btn-link'];
});

const handleClick = (event) => {
  if (props.link) {
    // Если есть атрибут link, перейти по ссылке
    window.location.href = props.link;
  } else {
    // В противном случае, если это кнопка отправки формы, выполнить отправку
    const form = event.target.closest('form'); // Найти ближайшую форму к кнопке
    if (form.checkValidity()) {
      // Все поля прошли валидацию, можно выполнить отправку
      form.submit();
    } else {
      // Некоторые поля не прошли валидацию, вывести сообщение об ошибке
      form.reportValidity();
    }
  }
};
</script>

<style lang="scss">
.btn {
  width: fit-content;
  display: inline-flex;
  padding: 10px 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;

  &:hover {
    opacity: 0.7;
    text-underline: none;
  }

  &-text {
    font-family: Montserrat, sans-serif;
    color: $white;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.44444;
  }
}

.btn-join {
  background-color: $blue;
}

.btn-link {
  background-color: $black;
}
</style>
