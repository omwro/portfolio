<template>
    <section id="projects">
        <h1>{{ $t("projects.title") }}</h1>
        <div class="content">
            <div class="project-container" v-for="(p,i) in projects" :key="i">
                <ProjectImage :project="p"/>
                <div class="title">
                    {{ p.title }}
                    <a v-if="p.github"
                       aria-label="github"
                       :href="p.github"
                       rel="noopener"
                       target="_blank">
                        <font-awesome-icon :icon="['fab', 'github']" class="icon"/>
                    </a>
                    <a v-if="p.url"
                       aria-label="link"
                       :href="p.url"
                       rel="noopener"
                       target="_blank">
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" class="icon"/>
                    </a>
                </div>
                <div class="carousel-description">{{ $t(p.desc) }}</div>
                <div class="carousel-languages">
                    <img v-for="skill in getLanguages(p.stack)"
                         :key="skill.name"
                         :class="'c'+skill.color"
                         :src="skill.img"
                         :alt="skill.name"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import skillsJson from "../../public/data/skills.json"
import projectsJson from "../../public/data/projects.json"
import ProjectImage from "@/components/ProjectImage";

export default {
    name: "Projects",
    components: {ProjectImage},
    data: () => ({
        projects: projectsJson
    }),
    methods: {
        getLanguages(array) {
            return skillsJson.filter(x => array.includes(x.name))
        }
    }
}


</script>

<style lang="scss">
@import "../styles/variables";

#projects .content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 8px;
    margin-right: 8px;
    align-content: center;

    @media (min-width: $mq-l) {
        flex-direction: row;
    }

    .project-container {
        text-align: center;
        margin: 0 8px 32px;
        max-width: 600px;

        @media (min-width: $mq-l) {
            margin-left: 20px;
            margin-right: 20px;
        }


        > * {
            padding-top: 4px;
        }

        .title {
            font-size: 1.5rem;
        }

        .carousel-description {
            font-style: italic;
            font-size: 1rem;
            margin: 0 5%;
        }

        .carousel-languages {
            display: inline-flex;
            flex-direction: row;
            flex-wrap: wrap;
            text-align: center;
            justify-content: center;
            margin: 0 15px;

            img {
                width: 32px;
                height: 32px;
                padding: 4px;
                margin: 8px 4px 0 4px;
                border-radius: 12px;
            }

            .c1 {
                background-color: $accent;
            }

            .c2 {
                background-color: $accent2;
            }

            .c3 {
                background-color: $accent3;
            }

            .c4 {
                background-color: $accent4;
            }

            .c5 {
                background-color: $dark5;
            }
        }
    }
}

a {
    margin: 0 4px;

    .icon {
        color: black;
        width: 20px;
        height: 20px;
    }
}

#app.dark a .icon {
    color: white;
}
</style>
