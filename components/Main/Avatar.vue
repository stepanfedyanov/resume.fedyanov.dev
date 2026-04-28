<template>
  <div class="avatar">
    <img class="avatar__img" :src="url" :alt="alt" />
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>

<style lang="sass" scoped>
.avatar
    position: relative
    max-height: 114px
    max-width: 114px
    height: 114px
    width: 114px
    &__img
        position: relative
        z-index: 1
        width: 100%
        height: 100%
    &::after
        position: absolute
        top: 0
        left: 0
        z-index: 0
        content: ''
        width: 110px
        height: 110px
        background: linear-gradient(90deg, #FF75C3 0%, #FFA647 20.00%, #FFE83F 40.00%, #9FFF5B 60.00%, #70E2FF 80.00%, #CD93FF 100%)
        filter: blur(30px)
        animation: rotate 3s 0s infinite linear

@keyframes rotate
    0%
        transform: rotate(0deg)
    50%
        transform: rotate(180deg)
    100%
        transform: rotate(360deg)
</style>
