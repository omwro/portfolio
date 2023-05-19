<template>
    <NuxtLayout>
        <Section v-if="project" :heading="project.title" class="pt-4">
            <template #top>
                <div class="flex flex-row gap-2">
                    <BreadcrumbLink text="/ Home" url="/#projects" />
                    <BreadcrumbLink text="/ Projects" url="/projects" />
                </div>
            </template>
            <Content v-if="project" class="gap-2 md:gap-4">
                <img :src="project.img"
                     :alt="project.title"
                     class="aspect-[3/2] object-cover max-w-full rounded-[25px]"/>
                <div class="flex flex-row flex-wrap gap-2 md:gap-4 pt-1">
                    <SkillChip
                        v-for="skill in getLanguages(project.stack)"
                        :key="skill.name"
                        :name="$t(skill.display_name)"
                        :icon="skill.name" />
                </div>
                <p class="text-base px-0 py-4 md:text-[1.4rem] md:pt-8">{{ $t(project.desc) }}</p>
                <div class="flex flex-row gap-8">
                    <a
                        v-if="project.github"
                        aria-label="github"
                        :href="project.github"
                        rel="noopener"
                        target="_blank"
                        class="flex flex-row place-items-center">
                        <IconWrapper class="text-primary-text-dark mr-2 dark:text-primary-text-light"
                              name="github"
                              size="24px"/>
                        <div>{{ $t("projects.viewongithub") }}</div>
                    </a>
                    <a
                        v-if="project.url"
                        aria-label="link"
                        :href="project.url"
                        rel="noopener"
                        target="_blank"
                        class="flex flex-row place-items-center">
                        <IconWrapper class="text-primary-text-dark dark:text-primary-text-light mr-2"
                              name="www"
                              size="24px"/>
                        <div>{{ $t("projects.viewonwebsite") }}</div>
                    </a>
                </div>
            </Content>
            <Content v-else>
                <h3>Project not found!</h3>
            </Content>
        </Section>
    </NuxtLayout>
</template>

<script setup>
import projects from "../../assets/json/projects.json";
import skills from "../../assets/json/skills.json";

import Section from "../../components/elements/Section";
import Content from "../../components/elements/Content";
import BreadcrumbLink from "../../components/elements/BreadcrumbLink";
import SkillChip from "../../components/elements/SkillChip";
import IconWrapper from "../../components/elements/IconWrapper";

const project =  projects.find(x => x.id === parseInt(useRoute().params.id))
const getLanguages = (array) => skills.filter(x => array.includes(x.name))
</script>

<script>
export default {
    name: "[id]"
};
</script>
