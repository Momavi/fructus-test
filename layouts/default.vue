<template lang="pug">
.layout
  nav.layout__nav
    a(href="/")
      img(:src="LogoSvg", alt="Logo", class="layout__logo")
  .container
    slot
  footer.layout__footer
    .layout__footer-content
      .layout__footer-block
        .layout__footer-logo
          a(href="/")
            img(:src="LogoSvg", alt="Logo", class="layout__logo")
          p.layout__footer-text Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
        .layout__footer-contact
          .layout__footer-contact-text
            span.layout__footer-contact-title email
            a(href="mailto: testblogsupport@gmail.com")
              span.layout__footer-contact-email testblogsupport@gmail.com
          .layout__footer-social
            a(href="/")
              img(:src="facebookSvg", alt="facebook", class="layout__footer-social-icon")
            a(href="/")
              img(:src="vkSvg", alt="vk", class="layout__footer-social-icon")
            a(href="/")
              img(:src="instagramSvg", alt="instagram", class="layout__footer-social-icon")
            a(href="/")
              img(:src="telegramSvg", alt="telegram", class="layout__footer-social-icon")
      SubscribeBannerBlock(footer="true")
</template>

<script setup>
import SubscribeBannerBlock from '~/components/blocks/SubscribeBannerBlock.vue';

import LogoSvg from '@/assets/images/Logo.svg'
import facebookSvg from '@/assets/images/facebook.svg';
import vkSvg from '@/assets/images/vk.svg';
import instagramSvg from '@/assets/images/instagram.svg';
import telegramSvg from '@/assets/images/telegram.svg';
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  &__nav {
    padding: 20px;
    display: flex;
    justify-content: center;

    @include media-small {
      padding: 20px;
    }

    &__logo {
      width: 134px;
      height: 32px;
    }
  }

  &__footer {
    padding-top: 50px;
    border-top: 1px solid $gray;
    @include media-small {
      padding-top: 20px;
      flex-direction: column;
    }

    &-content {
      @include container;
    }

    &-block {
      display: flex;
      justify-content: space-between;
      margin-bottom: 70px;
      @include media-small {
        margin-bottom: 20px;
        flex-direction: column;
      }
    }

    &-logo {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      @include media-small {
        margin-top: 20px;
        align-items: center;
      }
    }

    &-text {
      font-size: 14px;
      width: 426px;
      color: $gray;
      margin-bottom: 0;
      @include media-small {
        width: fit-content;
        text-align: center;
      }
    }

    &-contact {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;
      @include media-medium {
        margin-top: 20px;
        align-items: center;
      }
    }

    &-contact-text {
      display: flex;
      flex-direction: column;
    }

    &-contact-title {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      color: $gray;
    }

    &-contact-email {
      font-family: Ubuntu, sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      color: $black;
    }

    &-social {
      display: flex;
      justify-content: flex-end;
      gap: 20px;

      &-icon {
        width: 30px;
        height: 30px;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}

.container {
  @include container
}
</style>