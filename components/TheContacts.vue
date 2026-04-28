<template>
  <section class="the-contacts">
    <div class="the-contacts__wrapper">
      <div class="the-contacts__column">
        <Contacts />
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.the-contacts
    margin-top: 100px
    @media (max-width: 800px)
        margin-top: 50px
    &__title
        width: 480px
        @media (max-width: 480px)
            width: 100%
    &__wrapper
        margin-top: 50px
        display: flex
        justify-content: space-between
    &__column
        width: 50%
        @media (max-width: 800px)
            width: 100%
</style>
