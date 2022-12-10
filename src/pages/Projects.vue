<template>
    <div>
        <Header />
        <section id="projects" class="full-height">
            <div class="content project-content">
                <BreadcrumbLink text="/ Home" url="/" />
                <h1>{{ $t("projects.title") }}</h1>
                <div
                    class="types-container"
                    v-for="type in getTypes()"
                    :key="type">
                    <h1 class="small">{{ $t(`projects.${type}`) }}</h1>
                    <div class="project-container">
                        <ProjectBlock
                            v-for="(p, i) in getProjects(type)"
                            :project="p"
                            :key="i" />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        <Menu />
    </div>
</template>

<script>
import Header from "@/master/Header";
import Footer from "@/master/Footer";
import Menu from "@/master/Menu";
import ProjectBlock from "@/components/ProjectBlock";
import projectsJson from "../../public/data/projects.json";
import BreadcrumbLink from "@/components/BreadcrumbLink";

export default {
    name: "Projects",
    components: { BreadcrumbLink, ProjectBlock, Menu, Footer, Header },
    data: () => ({
        projects: projectsJson,
    }),
    methods: {
        getTypes() {
            return this.projects
                .map((x) => x.type)
                .filter((v, i, s) => s.indexOf(v) === i);
        },
        getProjects(type) {
            return this.projects.filter((x) => x.type === type);
        },
    },
};
</script>

<style lang="scss" scoped>
#app #projects .content.project-content {
    flex-direction: column;
    gap: 32px;

    .types-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        .project-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 16px;
            justify-content: center;
        }
    }
}
</style>
