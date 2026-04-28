<template>
  <section class="work">
    <h2 class="title-2 work__title">{{ $t('experience.title') }}</h2>

    <div class="work__container">
      <UIWorkExperience v-for="(job, index) in $tm('experience.work_list')" :key="index">
        <template v-slot:title>
          {{ $rt(job.title) }}
        </template>
        <template v-slot:position>
          {{ $rt(job.position) }}
        </template>
        <template v-slot:time>
          {{ $rt(job.time) }}
        </template>
        <template v-if="job.company_info" v-slot:companyInfo>{{ $rt(job.company_info) }}</template>
        <template v-slot:stack>{{ $rt(job.stack) }}</template>
        <ul>
          <li
            v-for="(task, idx) in job.tasks"
            :key="idx"
            v-html="$rt(task)"
          />
        </ul>
        <template v-if="job.projects_title" v-slot:projects_title>
          <h5 class="title-5">{{ $rt(job.projects_title) }}</h5>
        </template>
        <template v-if="job.projects" v-slot:projects>
          <UIProjectContainer 
            v-for="(project, projectIdx) in job.projects" 
            :key="projectIdx"
            :url="$rt(project.link_url)"
          >
            <template v-slot:title>{{
              $rt(project.title)
            }}</template>
            <template v-slot:link>
              {{ $rt(project.link_text) }}
            </template>
            <template v-slot:subtitle>
              {{ $rt(project.subtitle) }}
            </template>
          </UIProjectContainer>
        </template>
      </UIWorkExperience>
    </div>
  </section>
</template>

<script setup></script>

<style lang="sass">
.work
    padding-top: 30px
</style>
