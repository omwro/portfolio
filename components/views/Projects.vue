<template>
    <section id="projects">
        <h1>{{ $t("projects.title") }}</h1>
        <div class="flex flex-row justify-center flex-wrap gap-4">
            <ProjectBlock
                v-for="(p, i) in getProjects()"
                :project="p"
                :key="i" />
        </div>
        <ViewMoreLink title="projects.title" url="/projects" />
    </section>
</template>

<script setup>
import projects from "../../assets/json/projects.json";
import ViewMoreLink from "../elements/ViewMoreLink";
import ProjectBlock from "../elements/ProjectBlock";

const getProjects = () => {
    return projects.filter((x) => x.homepage);
}
</script>

<script>
export default {
    name: "Projects"
};
</script>