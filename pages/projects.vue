<template>
    <NuxtLayout>
        <Section :heading="$t('projects.title')" class="pt-4">
            <template #top>
                <BreadcrumbLink text="/ Home" url="/#projects" />
            </template>
            <Content class="sm:flex-row flex-wrap gap-4">
                <ProjectBlock
                    v-for="(p, i) in projects"
                    :project="p"
                    :key="i" />
            </Content>
        </Section>
    </NuxtLayout>
</template>

<script setup>
import projects from "../assets/json/projects.json";
import Section from "../components/elements/Section";
import Content from "../components/elements/Content";
import ProjectBlock from "../components/elements/ProjectBlock";
import BreadcrumbLink from "../components/elements/BreadcrumbLink";
</script>

<script>
export default {
    name: "projects"
};
</script>