<template>
    <Section id="projects" :heading="$t('projects.title')">
        <Content class="sm:flex-row flex-wrap gap-3">
            <ProjectBlock
                v-for="(p, i) in getProjects()"
                :project="p"
                :key="i" />
        </Content>
        <ViewMoreLink title="projects.title" url="/projects" />
    </Section>
</template>

<script setup>
import projects from "../../assets/json/projects.json";
import ViewMoreLink from "../elements/ViewMoreLink";
import ProjectBlock from "../elements/ProjectBlock";
import Section from "../elements/Section";
import Content from "../elements/Content";

const getProjects = () => {
    return projects.filter((x) => x.homepage);
}
</script>

<script>
export default {
    name: "Projects"
};
</script>