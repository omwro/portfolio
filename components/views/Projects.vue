<template>
    <Section id="projects" :heading="$t('projects.title')">
        <div class="flex flex-row justify-center flex-wrap gap-4">
            <ProjectBlock
                v-for="(p, i) in getProjects()"
                :project="p"
                :key="i" />
        </div>
        <ViewMoreLink title="projects.title" url="/projects" />
    </Section>
</template>

<script setup>
import projects from "../../assets/json/projects.json";
import ViewMoreLink from "../elements/ViewMoreLink";
import ProjectBlock from "../elements/ProjectBlock";
import Section from "../elements/Section";

const getProjects = () => {
    return projects.filter((x) => x.homepage);
}
</script>

<script>
export default {
    name: "Projects"
};
</script>