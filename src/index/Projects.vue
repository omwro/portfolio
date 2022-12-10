<template>
    <section id="projects">
        <h1>{{ $t("projects.title") }}</h1>
        <div class="content">
            <ProjectBlock
                v-for="(p, i) in getProjects()"
                :project="p"
                :key="i" />
            <ViewMoreLink title="projects.title" url="/projects" />
        </div>
    </section>
</template>

<script>
import projectsJson from "../../public/data/projects.json";
import ProjectBlock from "@/components/ProjectBlock";
import ViewMoreLink from "@/components/ViewMoreLink";

export default {
    name: "Projects",
    components: { ViewMoreLink, ProjectBlock },
    data: () => ({
        projects: projectsJson,
    }),
    methods: {
        getProjects() {
            return this.projects.filter((x) => x.homepage);
        },
    },
};
</script>

<style lang="scss">
@import "src/variables";

#app #projects {
    .content {
        display: flex;
        flex-direction: row;
        align-content: center;
        flex-wrap: wrap;
        gap: 16px;
    }
}
</style>
