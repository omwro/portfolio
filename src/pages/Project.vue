<template>
    <div class="project-page">
        <Header />
        <section class="full-height">
            <div v-if="project" class="content">
                <BreadcrumbLink
                    :text="'/ ' + $t('projects.title')"
                    url="/projects" />
                <h1>{{ project.title }}</h1>
                <img
                    :v-lazy="project.img"
                    :src="project.img"
                    :alt="project.title" />
                <div class="languages">
                    <SkillChip
                        v-for="skill in getLanguages(project.stack)"
                        :key="skill.name"
                        :name="$t(skill.display_name)"
                        :img="skill.img" />
                </div>
                <div class="desc">{{ $t(project.desc) }}</div>
                <div class="external">
                    <a
                        v-if="project.github"
                        aria-label="github"
                        :href="project.github"
                        rel="noopener"
                        target="_blank">
                        <font-awesome-icon
                            :icon="['fab', 'github']"
                            class="icon" />
                        <div>{{ $t("projects.viewongithub") }}</div>
                    </a>
                    <a
                        v-if="project.url"
                        aria-label="link"
                        :href="project.url"
                        rel="noopener"
                        target="_blank">
                        <font-awesome-icon
                            :icon="['fas', 'external-link-alt']"
                            class="icon" />
                        <div>{{ $t("projects.viewonwebsite") }}</div>
                    </a>
                </div>
            </div>
            <div v-else>
                <h1>Project not found!</h1>
            </div>
        </section>
        <Footer />
        <Menu />
    </div>
</template>

<script>
import projectsJson from "../../public/data/projects.json";
import skillsJson from "../../public/data/skills.json";

import Header from "@/master/Header";
import Footer from "@/master/Footer";
import Menu from "@/master/Menu";
import SkillChip from "@/components/SkillChip";
import BreadcrumbLink from "@/components/BreadcrumbLink";

export default {
    name: "Project",
    components: { BreadcrumbLink, SkillChip, Menu, Footer, Header },
    computed: {
        project() {
            return projectsJson.find(
                (x) => x.id === parseInt(this.$route.params.id)
            );
        },
    },
    methods: {
        getLanguages(array) {
            return skillsJson.filter((x) => array.includes(x.name));
        },
    },
};
</script>

<style lang="scss" scoped>
@import "src/variables";

#app .project-page section {
    justify-content: unset;

    .content {
        max-width: 640px;
        gap: 8px;

        img {
            border-radius: 25px;
            aspect-ratio: 3/2;
            object-fit: cover;
            max-width: calc(100vw - 32px);
        }

        .languages {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 8px;
            padding-top: 4px;
        }

        .desc {
            font-size: 1rem;
            padding: 16px 0;
        }

        .external {
            display: flex;
            flex-direction: row;
            gap: 32px;

            a {
                display: flex;
                flex-direction: row;
                place-items: center;

                .icon {
                    color: black;
                    width: 24px;
                    height: 24px;
                    margin-right: 8px;
                }
            }
        }

        @media (min-width: $mq-m) {
            gap: 16px;

            .languages {
                gap: 16px;
            }

            .desc {
                font-size: 1.4rem;
                padding-top: 32px;
            }
        }
    }
}

#app.dark .project-page section .external {
    a .icon {
        color: white;
    }
}
</style>
