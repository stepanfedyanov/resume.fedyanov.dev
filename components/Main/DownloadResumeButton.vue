<template>
  <a
    class="download-resume-button"
    :href="$t('main.resume_file')"
    download
    @click="onClick"
  >{{ $t('main.download_pdf') }}</a>
</template>

<script setup>
const {gtag} = useGtag()

const onClick = () => {
  gtag('event', 'download_resume')
}
</script>

<style lang="sass" scoped>
.download-resume-button
  display: inline-flex
  align-items: center
  background: #000
  color: #fff !important
  padding: 8px 16px
  border-radius: 8px
  text-decoration: none !important
  white-space: nowrap
  transition: opacity 0.2s ease
  &:hover
    opacity: 0.8
</style>
