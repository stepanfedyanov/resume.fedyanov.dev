<template>
  <section class="main">
    <header class="main__header">
      <MainAvatar url="/images/fedyanov.jpeg" :alt="$t('main.avatar_alt')" />
      <MainMenu />
    </header>
    <div class="main__wrapper">
      <div class="main__column">
        <h1 class="title-1 main__title">{{ $t('main.title') }}<br>{{ $t('main.jobtitle') }}</h1>
        <div class="main__contacts">
          <h2 class="title-2 main__second-title">{{ $t('main.contacts_title') }}</h2>
          <Contacts />
        </div>
      </div>
      <div class="main__column">
        <UITextContainer>
          <h2 class="title-2 main__second-title">{{ $t('main.about_title') }}</h2>
          <p class="text main__text" v-html="$t('main.about_text')" />
        </UITextContainer>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.main
    padding-top: 58px
    &__header
        display: flex
        justify-content: space-between
        align-items: flex-start
    &__wrapper
        padding-top: 30px
        display: flex
        align-items: flex-start
        justify-content: space-between
        flex-wrap: wrap
        @media (max-width: 800px)
            padding-top: 0
    &__column
        width: 50%
        @media (max-width: 1040px)
            width: 400px
        @media (max-width: 800px)
            width: 100%
            .text-container
                margin-bottom: 30px

    &__title
        max-width: 350px
        padding-bottom: 70px
        @media (max-width: 800px)
            padding-bottom: 30px
</style>
