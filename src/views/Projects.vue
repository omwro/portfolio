<template>
    <section id="projects">
        <h1>{{ $t("projects.title") }}</h1>
        <div class="content">
            <div class="content-block" v-for="type in getTypes()" :key="type">
                <h1 class="small">{{ $t(`projects.${type}`) }}</h1>
                <div class="project-container">
                <template v-for="(p,i) in getProjects(type)">
                    <div v-if="i < 2 || loadmore.includes(type)"
                         :key="i"
                         class="project">
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
                        <div class="description">{{ $t(p.desc) }}</div>
                        <div class="languages">
                            <img v-for="skill in getLanguages(p.stack)"
                                 :key="skill.name"
                                 :class="'c1'"
                                 :src="skill.img"
                                 :alt="skill.name"/>
                        </div>
                    </div>
                </template>
                </div>
                <div v-if="!loadmore.includes(type)"
                     @click="showmore(type)"
                     class="showmorebtn">
                    {{$t('projects.loadmore')}}
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
        projects: projectsJson,
        loadmore: []
    }),
    methods: {
        getLanguages(array) {
            return skillsJson.filter(x => array.includes(x.name))
        },
        getTypes() {
            return this.projects.map(x => x.type).filter((v, i, s) => s.indexOf(v) === i)
        },
        setFilter(filter) {
            this.filter = filter
        },
        getProjects(type) {
            return this.projects.filter(x => x.type === type)
        },
        showmore(t) {
            this.loadmore.push(t)
            console.log(t)
        }
    }
}


</script>

<style lang="scss">
@import "../styles/variables";

#projects {
    .content {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin-left: 8px;
        margin-right: 8px;
        align-content: center;

        @media (min-width: $mq-l) {
            flex-direction: column;
        }

        .content-block {
            display: flex;
            flex-direction: column;
            padding-bottom: 16px;
            margin: 0 auto 32px;
        }

        .project-container {
            text-align: center;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;

            @media (min-width: $mq-l) {
                margin-left: 20px;
                margin-right: 20px;
            }

            .project {
                display: flex;
                flex-direction: column;
                padding-top: 4px;
                margin: 16px;
                max-width: 600px;

                .title {
                    font-size: 1.5rem;
                }

                .description {
                    font-style: italic;
                    font-size: 1rem;
                    margin: 0 5%;
                }

                .languages {
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
                }
            }
        }

        .showmorebtn {
            display: block;
            padding: 8px 32px;
            border: solid 2px $accent-dark;
            background-color: $accent;
            color: $color-dark;
            width: fit-content;
            border-radius: 3px;
            margin: 0 auto;
            cursor: pointer;
            box-shadow: 0 0 10px 1px $accent-dark;

            &:hover {
                background-color: $accent-dark;
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

#app.dark {
    a .icon {
        color: white;
    }

    .filterbtn {
        color: $color-dark;
    }
}
</style>
