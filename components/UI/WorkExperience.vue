<template>
  <div class="work-experience">
    <div class="work-experience__main">
      <div class="work-experience__header">
        <h3 class="title-3 work-experience__title">
          <slot name="title" />
        </h3>
        <h4 class="title-4 work-experience__title work-experience__position">
          <slot name="position" />
        </h4>
      </div>
      <h5 class="title-5 work-experience__title work-experience__time">
        <slot name="time" />
      </h5>
      <p class="work-experience__company-info"><slot name="companyInfo" /></p>
      <slot></slot>
      <p class="work-experience__stack"><slot name="stack" /></p>
    </div>
    <div class="work-experience__projects">
      <slot name="projects_title" />
      <div class="work-experience__projects-wrapper">
        <slot name="projects" />
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.work-experience
    margin-bottom: 30px
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    @media (max-width: 900px)
        flex-direction: column
        gap: 40px
    &__main
        width: 700px
        @media (max-width: 1040px)
            width: 500px
        @media (max-width: 800px)
            width: 100%
    &__projects
        width: 260px
        @media (max-width: 1040px)
            width: 400px
        @media (max-width: 900px)
            width: 100%
        &-wrapper
            @media (max-width: 900px)
                display: flex
                flex-wrap: wrap
        h5
          @media (max-width: 800px)
            font-size: 20px
            font-weight: 700
    &__header
        display: flex
        gap: 20px
        @media (max-width: 1040px)
            flex-direction: column
            gap: 0
    &__title
        margin-bottom: 10px
        @media (max-width: 1040px)
            margin-bottom: 0
    &__company-info
        font-style: italic
        margin-bottom: 25px
        @media (max-width: 1040px)
            margin-top: 10px
    &__stack
        margin-top: 25px
</style>
