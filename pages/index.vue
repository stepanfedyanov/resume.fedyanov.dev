<template>
  <div class="container">
    <TheMain />
    <TheExperience />
  </div>
</template>

<script setup>
const {t, locale} = useI18n();

useSeoMeta({
  title: t('seo.index.title'),
  ogTitle: t('seo.index.title'),
  description: t('seo.index.description'),
  ogDescription: t('seo.index.description'),
  ogImage: `/og-fedyanov-${locale.value}.png`,
  twitterCard: 'summary_large_image',
});
</script>

<style lang="sass">
@import '~/style/main.sass'
</style>
