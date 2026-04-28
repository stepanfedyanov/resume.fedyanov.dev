<template>
  <div class="project">
    <h3 class="project__title">
      <slot name="title" />
    </h3>
    <a :href="url" class="project__link" target="_blank">
      <slot name="link" />
    </a>
    <p class="text project__subtitle">
      <slot name="subtitle" />
    </p>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});
</script>

<style lang="sass" scoped>
.project
  margin-bottom: 40px
  @media (max-width: 900px)
    margin-bottom: 20px
    width: 220px
  @media (max-width: 800px)
    width: 100%
  &__title
    margin-bottom: 10px
  &__link
    display: block
    color: #B9B9B9
    font-size: 28px
    font-style: normal
    font-weight: 400
    line-height: normal
    text-decoration-line: underline
    margin-bottom: 20px
</style>
