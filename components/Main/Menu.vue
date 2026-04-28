<template>
  <nav class="menu">
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_533_92)">
        <path
          d="M7 14C10.5899 14 13.5 11.0899 13.5 7.5C13.5 3.91015 10.5899 1 7 1C3.41015 1 0.5 3.91015 0.5 7.5C0.5 11.0899 3.41015 14 7 14Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M0.5 7.5H13.5M9.5 7.5C9.3772 9.87699 8.50168 12.1533 7 14C5.49832 12.1533 4.6228 9.87699 4.5 7.5C4.6228 5.12301 5.49832 2.84665 7 1C8.50168 2.84665 9.3772 5.12301 9.5 7.5Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_533_92">
          <rect width="14" height="14" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
    <a
      :class="['menu__link', {menu__link_active: $i18n.locale === 'en'}]"
      :href="switchLocalePath('en')"
      >English</a
    >
    <a
      :class="['menu__link', {menu__link_active: $i18n.locale === 'ru'}]"
      :href="switchLocalePath('ru')"
      >Русский</a
    >
  </nav>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath()
</script>

<style lang="sass">
.menu
  display: flex
  align-items: center
  gap: 10px
  &__link
    text-decoration: underline
    &_active
      text-decoration: none
</style>
