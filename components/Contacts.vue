<template>
    <div class="links">
        <div class="links__container">
            <a class="link" :href="`mailto:${$t('contacts.email')}`">{{ $t("contacts.email") }}</a>
        </div>
        <div class="links__container">
            <a :href="$t('contacts.tg_link')" class="link link_with-icon">
                <img src="/images/airplane.png" alt="Airplane emoji">
                {{ $t('contacts.tg_text') }}
            </a>
            <a :href="$t('contacts.linkedin_link')" class="link link_with-icon">
                <img src="/images/link.png" alt="Airplane emoji">
                {{ $t('contacts.linkedin_text') }}
            </a>
            <a :href="$t('contacts.gitlab_link')" class="link link_with-icon">
                <img src="/images/fox.png" alt="Fox emoji">
                {{ $t('contacts.gitlab_text') }}
            </a>
            <a :href="$t('contacts.github_link')" class="link link_with-icon">
                <img src="/images/robot.png" alt="Airplane emoji">
                {{ $t('contacts.github_text') }}
            </a>
            <a :href="$t('contacts.blog_link')" class="link link_with-icon">
                <img src="/images/mumproger.png" alt="Mumproger telegram channel logo">
                {{ $t('contacts.blog_text') }}
            </a>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.links
    &__container
        display: flex
        flex-direction: column
        gap: 10px
        margin-bottom: 25px
</style>